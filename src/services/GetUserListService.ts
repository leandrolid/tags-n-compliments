import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '@repositories/UserRepositories';
import { User } from '@entities/User';

type IExecute = () => Promise<User[]>;

class GetUserListService {
  execute: IExecute = async () => {
    const userRepository = getCustomRepository(UserRepositories);
    const user = await userRepository.find();

    if ( !user ) {
      throw new Error('Unable to find users');
    }

    return user
  };
}

export { GetUserListService };
