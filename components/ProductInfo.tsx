"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/app/CartContext";
import Price from "./Price";

const atcBtnStyle = `p-3 bg-purple-600 text-white w-full text-lg flex items-center justify-center gap-5 
rounded-xl transform duration-500 ease-in-out hover:scale-105 active:scale-100`;

function ProductInfo({
  cartDetails,
}: {
  cartDetails: {
    id: string;
    title: string;
    description: string;
    file: string;
    cost: number;
    quantity: number;
  };
}) {
  const { addToCart } = useCart();

  const { cost, description, title } = cartDetails;

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="leading-relaxed font-bold text-3xl text-purple-600">
          {title}
        </h1>
        <p className="font-medium text-lg">{description}</p>
        <div className="text-xl text-purple-600 font-medium">
          <Price currency="$" num={cost} numSize="text-2xl" />
        </div>
        <button
          className={atcBtnStyle}
          aria-label="cart-button"
          onClick={() => addToCart(cartDetails)}
        >
          Add To Cart
          <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
