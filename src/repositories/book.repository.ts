import prisma from "../config/prisma";

export const bookRepository = () => {
  const findAll = async () => {
    return await prisma.books.findMany({
      select: {
        id: true,
        title: true,
        isbn: true,
        publication_year: true,
        genre: true,
        author: {
          select: {
            id: true,
            name: true,
          },
        },
      }
    });
  };

  const findById = async (id: string) => {
    return await prisma.books.findUnique({
      where: { 
        id 
      },
      select: {
        id: true,
        title: true,
        isbn: true,
        publication_year: true,
        genre: true,
        author: {
          select: {
            id: true,
            name: true,
          },
        },
        books_products: {
          select: {
            id: true,
            format: true,
            price: true,
            stock: true,
            warehouse: {
              select: {
                id: true,
                name: true,
              }
            }
          },
        },
      }
    });
  };

  return {
    findAll,
    findById
  };
}