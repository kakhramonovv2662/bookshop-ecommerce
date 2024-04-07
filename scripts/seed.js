const { db } = require("@vercel/postgres");
const { books } = require("../lib/placeholder-data");

async function seedBooks(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS books (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL,
          cost INT NOT NULL,
          file VARCHAR(255) NOT NULL
        );
      `;

    console.log(`Created "books" table`);

    const insertedBooks = await Promise.all(
      books.map(async (book) => {
        return client.sql`
          INSERT INTO books (id, title, description, cost, file)
          VALUES (${book.id}, ${book.title}, ${book.description},  ${book.cost}, ${book.file})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

    console.log(insertedBooks);

    return {
      createTable,
      books: insertedBooks,
    };
  } catch (error) {
    console.error("Error seeding books:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedBooks(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
