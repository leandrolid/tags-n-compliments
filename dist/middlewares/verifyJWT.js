import { verify } from 'jsonwebtoken';
export async function verifyJWT(request, response, next) {
    const { authorization } = request.headers;
    if (!authorization) {
        throw new Error('No token provided');
    }
    const tokenParts = authorization.split(' ');
    if (tokenParts.length !== 2) {
        throw new Error('Token error');
    }
    const [bearer, token] = tokenParts;
    if (!/Bearer/i.test(bearer)) {
        throw new Error('Token malformed');
    }
    const payload = Object(verify(token, process.env.SALT));
    const nowInMilliseconds = Date.now();
    const expInMilliseconds = payload.exp * 1000;
    if (expInMilliseconds < nowInMilliseconds) {
        throw new Error('Token expired');
    }
    request.headers.userEmail = payload.email;
    request.headers.userId = payload.sub;
    return next();
}
