import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';

type IUserRequest = {
  name: string,
  email: string,
  admin?: boolean
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepositories);
    
    if (!email) {
      throw new Error("E-mail invalid");
    }

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const newUser = userRepository.create({
      name,
      email,
      admin
    });

    await userRepository.save(newUser);

    return newUser;

  }
}

export { CreateUserService };