"use client";

import Image from "next/image";
import { useCart } from "@/app/CartContext";
import { Button } from "../Button";
import { Delete } from "lucide-react";

const ShoppingCartModal: React.FC = () => {
  const { cartItems, updateCartItemQuantity, removeFromCart } = useCart();

  return (
    <div className="container mx-auto flex flex-col gap-10">
      <h1 className="text-3xl font-semibold">Shopping Cart</h1>
      {cartItems?.length ? (
        <div className="flex flex-col gap-5">
          {cartItems?.map(({ cost, file, id, title, quantity }) => (
            <div key={id} className="flex items-center gap-5">
              <div className="flex-shrink-0 w-24">
                <Image src={`/${file}`} alt={title} width={100} height={100} />
              </div>
              <div className="flex-grow flex flex-col gap-1">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-base text-gray-500">${cost}</p>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      updateCartItemQuantity(id, parseInt(e.target.value))
                    }
                    min={1}
                    className="w-16 h-12 border rounded-md px-2 text-sm"
                  />
                  <div>
                    <Button
                      onClick={() => removeFromCart(id)}
                      className="ml-4 text-sm p-2 bg-red-400"
                    >
                      <Delete />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="border"></div>
          <div className="text-xl font-semibold">
            Total: $
            {cartItems.reduce(
              (acc, { cost, quantity }) => acc + cost * (quantity || 1),
              0
            )}
          </div>
          <button
            className="p-3 bg-blue-600 text-white w-full text-lg flex items-center justify-center gap-5 
                        rounded-xl transform duration-500 ease-in-out hover:scale-105 active:scale-100"
          >
            Checkout
          </button>
        </div>
      ) : (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      )}
    </div>
  );
};

export default ShoppingCartModal;
