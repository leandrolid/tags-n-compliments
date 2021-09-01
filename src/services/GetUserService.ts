import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '@repositories/UserRepositories';
import { User } from '@entities/User';

type IUserRequest = {
  id?: string;
  email?: string;
};

type IExecute = (userRequest: IUserRequest) => Promise<User>;

class GetUserService {
  execute: IExecute = async ({ email, id }) => {
    const userRepository = getCustomRepository(UserRepositories);

    if (email) {
      const user = await userRepository.findOne({ email });
      return user;
    }

    if (id) {
      const user = await userRepository.findOne({ id });
      return user;
    }

    throw new Error('No info supplied');
  };
}

export { GetUserService };
