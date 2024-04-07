import BackToProductButton from "@/components/Product[id]/BackToProductButton";
import ProductInfo from "@/components/Product[id]/ProductInfo";
import { fetchBooksById } from "@/lib/data";
import ProductImage from "../Product/ProductImage";

async function ProductDetails({ bookId }: { bookId: string }) {
  const getDetailById = await fetchBooksById(bookId);

  const cartDetails = getDetailById?.[0];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        <BackToProductButton />
        <ProductInfo cartDetails={cartDetails} />
      </div>
      <ProductImage file={cartDetails?.["file"]} />
    </div>
  );
}

export default ProductDetails;
