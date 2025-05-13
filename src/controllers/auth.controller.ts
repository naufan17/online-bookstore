/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import passport from "passport";
import { AccessToken } from "../types/token";
import { customerRepository } from "../repositories/customer.repository";
import { responseBadRequest, responseConflict, responseCreated, responseInternalServerError, responseOk, responseUnauthorized } from "../helpers/response.helper";
import { generateJWTAccess } from "../utils/jwt";
import logger from "../config/logger";
import { validationResult } from "express-validator";

export const authController = () => {
  const register = async (req: Request, res: Response): Promise<void> => {
    const { name, email, address, phone, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) return responseBadRequest(res, errors.array()[0].msg);

    try {
      const existingCustomer = await customerRepository().findByEmail(email);
      if (existingCustomer) return responseConflict(res, 'Email already exists');

      const hashedPassword: string = await bcrypt.hash(password, 10);
      if (!hashedPassword) return responseInternalServerError(res, 'Password not hashed');

      const newCustomer = await customerRepository().create(name, email, address, phone, hashedPassword);
      if (!newCustomer) return responseInternalServerError(res, 'Customer not created');

      const accessToken: AccessToken = generateJWTAccess({ sub: newCustomer.id });

      return responseCreated(res, 'Customer registered successfully', accessToken);
    } catch (error) {
      logger.error(error);
      console.error(error);

      return responseInternalServerError(res, 'Registration failed');
    }
  }

  const login = (req: Request, res: Response): void => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return responseBadRequest(res, errors.array()[0].msg);

    passport.authenticate('local', { session: false }, (err: Error, user: any, info?: { message: string }) => {
      if (err || !user) return responseUnauthorized(res, info?.message || 'Invalid email or password');

      const accessToken: AccessToken = generateJWTAccess({ sub: user.id });

      return responseOk(res, 'Login successful', accessToken);
    })(req, res);
  }

  return {  
    register,
    login
  };
}