import { AuthenticateUserService } from '@services/AuthenticateUserService';
class AuthenticateUserController {
    async handle(request, response) {
        const { email, password } = request.body;
        const createAuthService = new AuthenticateUserService();
        const token = await createAuthService.execute({ email, password });
        return response.json({ token });
    }
}
export { AuthenticateUserController };
