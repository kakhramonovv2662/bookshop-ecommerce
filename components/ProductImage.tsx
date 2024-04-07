import Image from "next/image";

function ProductImage({ file }: { file: string }) {
  return (
    <div className="w-full border bg-white rounded shadow-lg">
      <Image
        src={file}
        alt={"product-detail-img"}
        width={500}
        height={500}
        className="w-full h-full"
      />
    </div>
  );
}

export default ProductImage;
