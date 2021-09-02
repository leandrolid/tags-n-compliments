import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '@repositories/UserRepositories';
import { hash } from 'bcryptjs';
class CreateUserService {
    constructor() {
        this.execute = async ({ name, email, admin, password }) => {
            const userRepository = getCustomRepository(UserRepositories);
            if (!email || !password) {
                throw new Error('Invalid e-mail or password');
            }
            const userAlreadyExists = await userRepository.findOne({ email });
            if (userAlreadyExists) {
                throw new Error('User already exists');
            }
            const passwordHash = await hash(password, 8);
            const newUser = userRepository.create({
                name,
                email,
                admin,
                password: passwordHash,
            });
            await userRepository.save(newUser);
            return Object.assign(Object.assign({}, newUser), { password: undefined });
        };
    }
}
export { CreateUserService };
