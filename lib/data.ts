import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { FetchBooksResponseTypes, ProductTypes } from "@/types";

export async function fetchBooks(
  searchTerm: string = "",
  page: number = 1,
  limit: number = 6
): Promise<FetchBooksResponseTypes> {
  noStore();

  try {
    console.log("Fetching books data...");

    const offset = (page - 1) * limit;

    const query = sql`
      SELECT * FROM products
      WHERE title ILIKE ${`%${searchTerm}%`}
      ORDER BY title
      LIMIT ${limit} OFFSET ${offset}
    `;

    const countQuery = sql`
    SELECT COUNT(*) FROM products
    WHERE title ILIKE ${`%${searchTerm}%`}
  `;

    const [data, countData] = await Promise.all([query, countQuery]);

    return {
      rows: data?.rows as ProductTypes[],
      totalCount: parseInt(countData.rows[0].count),
      totalPages: Math.ceil(parseInt(countData.rows[0].count) / limit),
      currentPage: page,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch books data.");
  }
}

export async function fetchBooksById(id: string) {
  noStore();
  try {
    const data = await sql<ProductTypes>`
      SELECT
        products.id,
        products.title,
        products.description,
        products.cost,
        products.file,
        products.status
      FROM products
      WHERE products.id = ${id};
    `;

    return data?.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Database Error: ${error}`);
  }
}
