import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '@repositories/UserRepositories';
class GetUserService {
    constructor() {
        this.execute = async ({ email, id }) => {
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
}
export { GetUserService };
