import { Request, Response } from "express";
import { responseNotFound, responseOk } from "../helpers/response.helper";
import { bookRepository } from "../repositories/book.repository";
import logger from "../config/logger";

export const bookController = () => {
  const allBooks = async (req: Request, res: Response) => {
    try {
      const books = await bookRepository().findAll();
      if (books.length === 0) return responseNotFound(res, 'Books not found');

      return responseOk(res, 'Books found successfully', books);
    } catch (error) {
      logger.error(error);
      console.error(error);
      
      return responseNotFound(res, 'Books not found');
    }
  }

  const bookById = async (req: Request, res: Response) => {
    const id = req.params.id;

    try {
      const book = await bookRepository().findById(id);
      if (!book) return responseNotFound(res, 'Book not found');

      return responseOk(res, 'Book found successfully', book);
    } catch (error) {
      logger.error(error);
      console.error(error);
      
      return responseNotFound(res, 'Book not found');
    }
  }
  
  return {
    allBooks,
    bookById
  }
}