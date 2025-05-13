import prisma from "../config/prisma"

export const invoiceRepository = () => {
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
    findByCustomerId
  }
}