import Image from "next/image";
import Link from "next/link";
import Price from "./Price";

export default function ProductCards({ product }: any) {
  const { id, file, title, cost, description } = product;

  return (
    <Link
      href={`/product/${id}`}
      className="rounded shadow-lg mx-auto border flex flex-col gap-3"
    >
      <div className="h-72 relative z-10">
        <Image
          src={file}
          alt={"product-img"}
          width={350}
          height={288}
          className="transform w-full h-full duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <div className="h-56 relative z-0 flex flex-col gap-5 px-5">
        <div className="text-purple-600 text-2xl font-semibold">{title}</div>
        <p className="text-lg text-gray-600 font-light">{description}</p>
        <div className="text-purple-600 font-medium text-base bg-gray-200 rounded-s-3xl absolute bottom-2 right-0 pl-6 pr-4 py-1">
          <Price currency="$" num={cost} numSize="text-lg" />
        </div>
      </div>
    </Link>
  );
}
