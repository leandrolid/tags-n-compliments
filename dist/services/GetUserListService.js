import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '@repositories/UserRepositories';
class GetUserListService {
    constructor() {
        this.execute = async () => {
            const userRepository = getCustomRepository(UserRepositories);
            const user = await userRepository.find();
            if (!user) {
                throw new Error('Unable to find users');
            }
            return user;
        };
    }
}
export { GetUserListService };
