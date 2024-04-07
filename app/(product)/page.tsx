import ProductList from "@/components/CardList";

export default function Home({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  return (
    <div className="container">
      <ProductList
        query={searchParams?.query || ""}
        page={searchParams?.page || "1"}
      />
    </div>
  );
}
