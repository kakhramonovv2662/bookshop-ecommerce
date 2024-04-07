import ProductList from "@/components/Product/CardList";
import Header from "@/components/Header";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  return (
    <Suspense fallback={<Loading />}>
      <div>
        <Header />

        <main>
          <div className="container my-5">
            <ProductList
              query={searchParams?.query || ""}
              page={searchParams?.page || "1"}
            />
          </div>
        </main>
      </div>
    </Suspense>
  );
}
