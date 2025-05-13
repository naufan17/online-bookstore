import jwt, { JwtPayload, SignOptions, VerifyOptions } from 'jsonwebtoken';
import config from '../configs/config';

export const generateJWTAccess = (payload: JwtPayload): { 
  accessToken: string; 
  expiresIn: number; 
  tokenType: string 
} => {
  const secretToken: string = config.JWTSecretKey ;
  const expiredToken: number = Number(config.JWTExpiresIn);
  const options: SignOptions = { 
    expiresIn: expiredToken, 
    algorithm: 'HS256' 
  };
  const token: string = jwt.sign(payload, secretToken, options);

  return {
    accessToken: token,
    expiresIn: Date.now() + expiredToken,
    tokenType: 'Bearer'
  };
};

export const verifyTJWTAccess = (token: string) => {
  const secretToken: string = config.JWTSecretKey;
  const options: VerifyOptions = { 
    ignoreExpiration: false 
  }
  
  return jwt.verify(token, secretToken, options);
};
