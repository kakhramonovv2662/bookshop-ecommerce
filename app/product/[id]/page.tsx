import Header from "@/components/Header";
import ProductDetails from "@/components/Product[id]/ProductDetails";
import Loading from "./loading";
import { Suspense } from "react";

function Product({ params }: { params: { id: string } }) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Header />
        <main>
          <div className="container my-5">
            <ProductDetails bookId={params?.id} />
          </div>
        </main>
      </Suspense>
    </>
  );
}

export default Product;
