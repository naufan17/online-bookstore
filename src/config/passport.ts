/* eslint-disable @typescript-eslint/no-explicit-any */
import passport from "passport";
import bcrypt from "bcryptjs";
import { Strategy as LocalStrategy } from "passport-local";
import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { customerRepository } from "../repositories/customer.repository";
import config from "./config";
import logger from "./logger";

passport.use(
  new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    }, async (
      email: string, 
      password: string, 
      done: (error: unknown, user?: any, info?: { message: string }) => void
    ): Promise<void> => {
      try {
        const user = await customerRepository().findByEmail(email);
        if (!user) return done(null, false, { message: 'Invalid email' });

        const isPasswordValid: boolean = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return done(null, false, { message: 'Invalid password' });

        return done(null, user);
      } catch (error) {
        console.error(error);
        logger.error(error);

        return done(error);        
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