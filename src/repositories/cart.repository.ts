/* eslint-disable @typescript-eslint/no-explicit-any */
import prisma from "../config/prisma";

export const cartRepository = () => {
  const getCartByCustomerId = async (customerId: string): Promise<any> => {
    return await prisma.carts.findFirst({ 
      where: { 
        customer_id: customerId 
      },
      select: {
        id: true,
        customer_id: true,
        created_at: true,
        cart_items: {
          select: {
            id: true,
            books_products_id: true,
            quantity: true,
            created_at: true,
            books_products: {
              select: {
                id: true,
                book: {
                  select: {
                    title: true,
                  }
                },
                format: true,
                price: true
              }
            }
          }
        }
      }
    });
  }

  const create = async (customerId: string): Promise<any> => {
    return await prisma.carts.create({ 
      data: { 
        customer_id: customerId,
        created_at: new Date()
      }
    });
  }

  const addToCart = async (booksProductsId: string, quantity: number, cartId: string): Promise<any> => {
    return await prisma.cart_items.create({
      data: { 
        quantity,
        created_at: new Date(),
        cart: { 
          connect: { 
            id: cartId 
          } 
        },
        books_products: { 
          connect: { 
            id: booksProductsId 
          } 
        }
      }
    });
  }

  const deleteCart = async (cartId: string): Promise<any> => {
    await prisma.cart_items.deleteMany({
      where: {
        cart_id: cartId
      }
    });
  }

  return {
    getCartByCustomerId,
    create,
    addToCart,
    deleteCart
  }
};