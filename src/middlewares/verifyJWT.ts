import { GetUserService } from '@services/GetUserService';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

type IPayload = {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

export async function verifyJWT(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers;

  if ( !authorization ) {
    throw new Error('No token provided')
  }
  
  const tokenParts = authorization.split( ' ' );
  
  if ( tokenParts.length !== 2 ) {
    throw new Error( 'Token error' );
  }
  
  const [ bearer, token ] = tokenParts;
  
  if ( !/Bearer/i.test( bearer ) ) {
    throw new Error( 'Token malformed' );
  }
  
  const payload: IPayload = Object( verify( token, process.env.SALT ) );
  
  const now =  String(Date.now()).slice(0, 10)
  
  if ( payload.exp < Number(now) ) {
    throw new Error( 'Token expired' );
  }

  request.headers.userEmail = payload.email

  return next()
}
