"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/app/CartContext";

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="border-b sticky top-0 z-20 bg-white">
      <div className="container flex items-center justify-between mx-auto px-6 py-5">
        <Link href="/">
          <h1 className="block no-underline text-xl text-blue-600 font-bold">
            {/* <Image
                height="32"
                width="32"
                alt="logo"
                className="h-8 w-8 mr-1 object-contain"
                src="/icon.svg"
              /> */}
            Book shop
          </h1>
        </Link>
        <div className="flex items-center gap-3">
          <Link className="relative" href="/login">
            <FontAwesomeIcon
              width={25}
              height={25}
              className="text-blue-600 w-6 m-auto"
              icon={faUser}
            />
          </Link>
          <Link className="relative" href="/cart">
            <FontAwesomeIcon
              width={25}
              height={25}
              className="text-blue-600 w-6 m-auto"
              icon={faShoppingCart}
            />
            <div className="absolute top-0 right-0 text-xs bg-yellow-300 text-gray-900 font-semibold rounded-full py-1 px-2 transform translate-x-10 -translate-y-3">
              {cartCount}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
