const { db } = require("@vercel/postgres");
const { books } = require("../lib/placeholder-data");

async function seedBooks(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS products (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description VARCHAR(255) NOT NULL,
          cost INT NOT NULL,
          status VARCHAR(255) NOT NULL,
          file VARCHAR(255) NOT NULL
        );
      `;

    const insertedBooks = await Promise.all(
      books.map(async (book) => {
        return client.sql`
          INSERT INTO products (id, title, description, cost, file, status)
          VALUES (${book.id}, ${book.title}, ${book.description},  ${book.cost}, ${book.file}, ${book.status})
          ON CONFLICT (id) DO NOTHING;
        `;
      })
    );

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
