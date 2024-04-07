import BackToProductButton from "@/components/BackToProductButton";
import ProductInfo from "@/components/ProductInfo";
import { fetchBooksById } from "@/lib/data";
import ProductImage from "./ProductImage";

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
