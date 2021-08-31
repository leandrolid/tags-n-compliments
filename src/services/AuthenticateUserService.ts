import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '@repositories/UserRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

type IUserRequest = {
  email: string;
  password: string;
};

type IExecute = (userRequest: IUserRequest) => Promise<string>;

class AuthenticateUserService {
  execute: IExecute = async ({ email, password }) => {
    const userRepository = getCustomRepository(UserRepositories);

    if (!email || !password) {
      throw new Error('Invalid e-mail or password');
    }

    const user = await userRepository.findOne({ email });

    if (!user) {
      throw new Error('Email/Password incorrect');
    }
    
    
    const isPasswordValid = await compare( password, user.password );
    
    if ( !isPasswordValid ) {
      throw new Error('Email/Password incorrect');
    }

    const token = sign(
      {
        email: user.email
      },
      process.env.SALT,
      {
        subject: user.id,
        expiresIn: 86400 // 1day
      }
    )

    return token;
  };
}

export { AuthenticateUserService };
