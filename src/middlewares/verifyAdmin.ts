import { GetUserService } from '@services/GetUserService';
import { NextFunction, Request, Response } from 'express';

export async function verifyAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { userEmail, userId } = request.headers;
  console.log(userId);

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
