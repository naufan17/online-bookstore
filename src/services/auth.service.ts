import bcrypt from "bcryptjs/umd/types";
import logger from "../configs/logger";
import { CustomerRepository } from "../repositories/customer.repository";

const customerRepository = CustomerRepository();

export const AuthService = () => {
  const authenticate = async (email: string, password: string) => {
   try {
    const customer = await customerRepository.findByEmail(email);
    if (!customer) throw new Error('Invalid email or password');

    const isPasswordValid: boolean = await bcrypt.compare(password, customer.password);
    if (!isPasswordValid) throw new Error('Invalid email or password');

    return customer;
   } catch (error) {
    logger.error(error);
    console.error(error);
    throw new Error('Invalid email or password');
   }
  }

  return {
    authenticate
  }
}