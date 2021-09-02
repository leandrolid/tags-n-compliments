import { GetUserService } from '@services/GetUserService';
export async function verifyAdmin(request, response, next) {
    const { userEmail } = request.headers;
    const getUserService = new GetUserService();
    const user = await getUserService.execute({ email: String(userEmail) });
    // const isAdmin = true;
    if (user.admin) {
        return next();
    }
    return response.status(401).json({
        status: 'error',
        message: 'Unauthorized',
    });
}
