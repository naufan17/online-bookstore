/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express";
import { responseNotFound, responseOk } from "../helpers/response.helper";
import { cartRepository } from "../repositories/cart.repository";
import logger from "../config/logger";

export const cartController = () => {

  const getCart = async (req: Request | any, res: Response) => {
    const { user }: { user: { id: string } } = req;

    try {
      const cart = await cartRepository().getCartByCustomerId(user.id);
      if (!cart) return responseNotFound(res, 'Cart not found');
      
      return responseOk(res, 'Cart found successfully', cart);
    } catch (error) {
      logger.error(error);
      console.error(error);
      
      return responseNotFound(res, 'Cart not found');
    }
  };

  return {
    getCart
  }
}