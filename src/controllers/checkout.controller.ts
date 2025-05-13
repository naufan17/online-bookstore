/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import logger from "../config/logger";
import { responseInternalServerError, responseNotFound, responseOk } from "../helpers/response.helper";
import { cartRepository } from "../repositories/cart.repository";
import { invoiceRepository } from "../repositories/invoice.repository";

export const checkoutController = () => {
  const checkout = async (req: Request | any, res: Response) => {
    const { user }: { user: { id: string } } = req;

    try {
      const cart = await cartRepository().getCartByCustomerId(user.id);
      if (!cart) return responseNotFound(res, 'Cart not found');

      const totalAmount = cart.cart_items?.reduce((total: number, item: any) => total + Number(item.books_products.price) * item.quantity, 0) || 0;
      
      const invoice = await invoiceRepository().create(user.id, cart.id, totalAmount, new Date());
      if (!invoice) return responseNotFound(res, 'Invoice not found');

      for (const item of cart.cart_items) {
        await invoiceRepository().createInvoiceItem(invoice.id, item.books_products.id, item.quantity, item.books_products.price);
      }

      await cartRepository().deleteCart(cart.id);

      return responseOk(res, 'Checkout successfully', {
        invoice_id: invoice.id,
        status: invoice.status,
        total_amount: invoice.total_amount,
        issued_at: invoice.issued_at,
      });
    } catch (error) {
      logger.error(error);
      console.error(error);

      return responseInternalServerError(res, 'Checkout failed');
    }
  }

  return { 
    checkout 
  }
}