import { CreateUserService } from '@services/CreateUserService';
class CreateUserController {
    async handle(request, response) {
        const { name, email, admin, password } = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({
            name,
            email,
            admin,
            password,
        });
        return response.json({ user });
    }
}
export { CreateUserController };
