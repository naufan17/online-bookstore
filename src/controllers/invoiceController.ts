/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { invoiceRepository } from "../repositories/invoice.repository";
import { responseNotFound, responseOk } from "../helpers/response.helper";
import logger from "../config/logger";

export const invoiceController = () => {

  const getInvoices = async (req: Request | any, res: Response) => {
    const { user }: { user: { id: string } } = req;

    try {
      const invoices = await invoiceRepository().findByCustomerId(user.id);
      if (!invoices) return responseNotFound(res, 'Invoices not found');
      
      return responseOk(res, 'Invoices found successfully', invoices);
    } catch (error) {
      logger.error(error);
      console.error(error);

      return responseNotFound(res, 'Invoices not found');
    }
  }

  return {
    getInvoices
  }
}