import { fetchBooks } from "@/lib/data";
import ProductCards from "./ProductCard";
import Search from "../Search";
import Pagination from "../Pagination";

export default async function ProductList({
  query,
  page,
}: {
  query: string;
  page: string;
}) {
  const getBooks = await fetchBooks(query, +page);

  return (
    <div className="flex flex-col gap-5">
      <Search placeholder="Kitoblarni Qidirish..." />
      <div className="grid grid-cols-3 gap-16">
        {getBooks?.rows?.map((product, i) => (
          <ProductCards key={i} product={product} />
        ))}
      </div>
      <div className="flex items-center justify-end">
        <Pagination totalPages={getBooks?.totalPages} />
      </div>
    </div>
  );
}
