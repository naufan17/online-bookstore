import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma: PrismaClient = new PrismaClient();

async function main() {

  // Seed authors
  await prisma.authors.createMany({
    data: [
      { name: "Alice Doe", bio: "I am Alice", birthdate: new Date("1990-01-01") },
      { name: "Bob Doe", bio: "I am Bob", birthdate: new Date("1991-01-01") },
      { name: "Charlie Doe", bio: "I am Charlie", birthdate: new Date("1992-01-01") },
      { name: "Dave Doe", bio: "I am Dave", birthdate: new Date("1993-01-01") },
    ],
  });

  // Seed customers
  await prisma.customers.createMany({
    data: [
      {
        name: "John Smith",
        email: "john.smith@example.com",
        address: "123 Main St",
        phone: "123-456-7890",
        password: bcrypt.hashSync("password123", 10),
      },
      {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        address: "456 Elm St",
        phone: "987-654-3210",
        password: bcrypt.hashSync("password123", 10),
      },
    ],
  });

    // Seed warehouses
  await prisma.warehouses.createMany({
    data: [
      { 
        name: "Central Warehouse", 
        location: "City Center", 
        capacity: 1000 
      },
      { 
        name: "East Warehouse", 
        location: "East Side", 
        capacity: 500 
      },
    ],
  });

  // Seed books
  const authors = await prisma.authors.findMany();
  if (authors.length > 0) {
    await prisma.books.createMany({
      data: [
        {
          title: "Book One",
          isbn: "1234567890",
          publication_year: 2020,
          genre: "Fiction",
          author_id: authors[0].id,
        },
        {
          title: "Book Two",
          isbn: "0987654321",
          publication_year: 2021,
          genre: "Non-Fiction",
          author_id: authors[1].id,
        },
        {
          title: "Book Three",
          isbn: "1111111111",
          publication_year: 2022,
          genre: "Fiction",
          author_id: authors[2].id,
        },
        {
          title: "Book Four",
          isbn: "2222222222",
          publication_year: 2023,
          genre: "Non-Fiction",
          author_id: authors[3].id,
        },
      ],
    });
  }

  // Seed books_products
  const books = await prisma.books.findMany();
  const warehouses = await prisma.warehouses.findMany();
  if (books.length > 0 && warehouses.length > 0) {
    await prisma.books_products.createMany({
      data: [
        { 
          books_id: books[0].id, 
          price: 9.99,
          stock: 100,
          format: "Hardcover",
          warehouses_id: warehouses[0].id 
        },
        { 
          books_id: books[1].id,
          price: 14.99,
          stock: 50,
          format: "Paperback", 
          warehouses_id: warehouses[1].id 
        },
        { 
          books_id: books[2].id,
          price: 12.99,
          stock: 75,
          format: "Hardcover", 
          warehouses_id: warehouses[0].id 
        },
        { 
          books_id: books[3].id,
          price: 8.99,
          stock: 200,
          format: "Paperback", 
          warehouses_id: warehouses[1].id 
        },
      ],
    });
  }

  // Seed carts
  const customers = await prisma.customers.findMany();
  if (customers.length > 0) {
    await prisma.carts.createMany({
      data: [
        { 
          customer_id: customers[0].id,
          created_at: new Date()
        },
        { 
          customer_id: customers[1].id,
          created_at: new Date() 
        },
      ],
    });
  }

  // Seed cart items
  const booksForCart = await prisma.books.findMany();
  const warehousesForCart = await prisma.warehouses.findMany();
  if (booksForCart.length > 0 && warehousesForCart.length > 0) {
    await prisma.cart_items.createMany({
      data: [
        { 
          books_products_id: booksForCart[0].id, 
          quantity: 2,
          created_at: new Date(), 
          cart_id: warehousesForCart[0].id 
        },
        { 
          books_products_id: booksForCart[1].id, 
          quantity: 1, 
          created_at: new Date(),
          cart_id: warehousesForCart[1].id 
        },
      ],
    });
  }

  // Seed invoices
  const customers2 = await prisma.customers.findMany();
  if (customers2.length > 0) {
    await prisma.invoices.createMany({
      data: [
        { 
          total_amount: 100.00, 
          issued_at: new Date(), 
          status: "Pending",
          customer_id: customers2[0].id, 
          cart_id: warehouses[0].id },
        { 
          total_amount: 50.00, 
          issued_at: new Date(), 
          status: "Paid",
          customer_id: customers2[1].id, 
          cart_id: warehouses[1].id 
        },
      ],
    });
  }

  // Seed invoice items
  const books2 = await prisma.books.findMany();
  const warehouses2 = await prisma.warehouses.findMany();
  if (books2.length > 0 && warehouses2.length > 0) {
    await prisma.invoice_items.createMany({
      data: [
        { 
          books_products_id: books2[0].id, 
          quantity: 2,
          price: 9.99, 
          invoice_id: warehouses2[0].id 
        },
        { 
          books_products_id: books2[1].id, 
          quantity: 1, 
          price: 14.99,
          invoice_id: warehouses2[1].id 
        },
      ],
    });
  }

  console.log("Seeding complete.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });