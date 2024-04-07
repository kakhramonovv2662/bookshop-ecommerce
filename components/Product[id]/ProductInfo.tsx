"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/app/CartContext";
import Price from "../Product/Price";
import { Button } from "../Button";
import BookStatus from "../Dashboard/Status";
import { ProductTypes } from "@/types";
import { cn } from "@/lib/utils";

function ProductInfo({ cartDetails }: { cartDetails: ProductTypes }) {
  const { addToCart } = useCart();

  const { cost, description, title, status } = cartDetails;

  return (
    <div>
      <div className="flex flex-col gap-5">
        <h1 className="leading-relaxed font-bold text-3xl text-blue-600">
          {title}
        </h1>
        <p className="font-medium text-lg">{description}</p>
        <div className="text-xl text-blue-600 font-medium flex items-center gap-5">
          <div>
            <Price currency="$" num={cost} numSize="text-2xl" />
          </div>
          <BookStatus status={status} />
        </div>
        <Button
          disabled={status === "inactive" ? true : false}
          className={cn({
            "bg-gray-300": status === "inactive",
          })}
          aria-label="cart-button"
          onClick={() => addToCart(cartDetails)}
        >
          Add To Cart
          <FontAwesomeIcon icon={faShoppingCart} className="w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
}

export default ProductInfo;
