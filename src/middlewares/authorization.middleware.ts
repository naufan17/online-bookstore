import { Request, Response, NextFunction } from "express";
import passport from "passport";
import HTTP_STATUS from 'http-status-codes';

export const authorizeBearer = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: Error, user: { id: string }, info?: { message: string }) => {
   if (err || !user) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({
      statusCode: HTTP_STATUS.UNAUTHORIZED, 
      message: info?.message || 'Access token is invalid' 
    });
   } 

   req.user = user;
   next();
  })(req, res, next);
}