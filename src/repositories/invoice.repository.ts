import prisma from "../config/prisma"

export const invoiceRepository = () => {
  const create = async (customerId: string, cartId: string, totalAmount: number, issuedAt: Date) => {
    return await prisma.invoices.create({
      data: {
        total_amount: totalAmount,
        issued_at: issuedAt,
        status: 'Pending',
        cart: { 
          connect: { 
            id: cartId 
          } 
        },
        customer: { 
          connect: { 
            id: customerId 
          } 
        }
      }
    })
  }

  const createInvoiceItem = async (invoiceId: string, booksProductsId: string, quantity: number, price: number) => {
    return await prisma.invoice_items.create({
      data: {
        invoice: {
          connect: {
            id: invoiceId
          }
        },
        books_products: {
          connect: {
            id: booksProductsId
          }
        },
        quantity,
        price
      }
    })
  }

  const findByCustomerId = async (customerId: string) => {
    return await prisma.invoices.findMany({
      where: {
        customer_id: customerId
      },
      select: {
        id: true,
        status: true,
        total_amount: true,
        issued_at: true
      }
    })
  }

  return {
    create,
    createInvoiceItem,
    findByCustomerId
  }
}