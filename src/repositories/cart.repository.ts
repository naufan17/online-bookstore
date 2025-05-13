import prisma from "../config/prisma";


export const cartRepository = () => {
  const getCartByCustomerId = async (customerId: string) => {
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

  return {
    getCartByCustomerId
  }
};