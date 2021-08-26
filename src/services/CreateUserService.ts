import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '@repositories/UserRepositories';
import { User } from '@entities/User';

type IUserRequest = {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
};

type IExecute = (userRequest: IUserRequest) => Promise<User>;

class CreateUserService {
  execute: IExecute = async ({ name, email, admin, password }) => {
    const userRepository = getCustomRepository(UserRepositories);

    if (!email || !password) {
      throw new Error('Invalid e-mail or password');
    }

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const newUser = userRepository.create({
      name,
      email,
      admin,
      password,
    });

    await userRepository.save(newUser);

    return newUser;
  };
}

export { CreateUserService };
