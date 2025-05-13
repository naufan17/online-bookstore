import { Request, Response, NextFunction } from "express";
import passport from "passport";
import { responseUnauthorized } from "../helpers/response.helper";

export const authorizeBearer = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, (err: Error, user: { id: string }, info?: { message: string }) => {
    if (err || !user) return responseUnauthorized(res, info?.message || 'Access token is invalid');

    req.user = user;
    next();
  })(req, res, next);
}