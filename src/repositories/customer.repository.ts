/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "../config/prisma";

export const CustomerRepository = () => {
  const create = async (name: string, email: string, address: string, phone: string, password: string): Promise<any> => {
    return await prisma.customers.create({ 
      data: { 
        name, 
        email, 
        address, 
        phone, 
        password 
      }
    });
  };

  const findByEmail = async (email: string): Promise<any> => {
    return await prisma.customers.findFirst({ 
      where: { 
        email 
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true
      }
    });
  };
  
  return {
    create,
    findByEmail
  };
};