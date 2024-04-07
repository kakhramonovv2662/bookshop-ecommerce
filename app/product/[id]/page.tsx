import ProductDetails from "@/components/ProductDetails";

function Product({ params }: { params: { id: string } }) {
  return (
    <div className="container">
      <ProductDetails bookId={params?.id} />
    </div>
  );
}

export default Product;
