import { GetUserService } from '@services/GetUserService';
import { NextFunction, Request, Response } from 'express';
import { verify, JwtPayload } from 'jsonwebtoken';

type IPayload = {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

export async function verifyAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;
  const [ token, ] = authorization.split( ' ' );

  const {email}: IPayload = Object(verify( token, process.env.SALT ));
  
  const getUserService = new GetUserService();
  const user = await getUserService.execute( { email } );

  // const isAdmin = true;

  if (user.admin) {
    return next();
  }

  return response.status(401).json({
    status: 'error',
    message: 'Unauthorized',
  });
}
