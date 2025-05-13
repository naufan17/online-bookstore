/* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express";
import { responseInternalServerError, responseNotFound, responseOk } from "../helpers/response.helper";
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

  const addToCart = async (req: Request | any, res: Response) => {
    const { user }: { user: { id: string } } = req;
    const { books_products_id, quantity }: { books_products_id: string, quantity: number } = req.body;

    try {
      let cart = await cartRepository().getCartByCustomerId(user.id);

      if (!cart) {
        cart = await cartRepository().create(user.id);
        if (!cart) return responseNotFound(res, 'Cart not found');
      }

      const cartItem = await cartRepository().addToCart(books_products_id, quantity, cart.id); 
      if (!cartItem) return responseNotFound(res, 'Cart item not found');
      
      return responseOk(res, 'Book added to cart successfully', cartItem);
    } catch (error) {
      logger.error(error);
      console.error(error);
      
      return responseInternalServerError(res, 'Add to cart failed');
    }
  };

  return {
    getCart,
    addToCart
  }
}