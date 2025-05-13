/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { AuthService } from "../services/auth.service";
import config from "./config";
import logger from "./logger";


const authService = AuthService();

passport.use(
  new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, async (
      email: string, 
      password: string, 
      done: (error: unknown, user?: any, info?: { message: string }) => void
    ) => {
      try {
        const customer = await authService.authenticate(email, password);

        return done(null, customer);
      } catch (error) {
        console.error(error);
        logger.error(error);

        return done(null, false, { message: (error as Error).message });        
      }
    }
  )
)

passport.use(
  new JwtStrategy({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.JWTSecretKey
    }, async (
      payload: { sub: string }, 
      done: (error: unknown, user?: { id: string } | false, info?: { message: string }) => void
    ): Promise<void> => {
      if (!payload.sub) return done(null, false, { message: 'Access token is invalid' });

      return done(null, { id: payload.sub });
    }
  )
)