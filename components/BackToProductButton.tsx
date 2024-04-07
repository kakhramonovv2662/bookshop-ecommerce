import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function BackToProductButton() {
  return (
    <Link
      href="/"
      aria-label="back-to-products"
      className="border text-purple-600 text-lg font-semibold py-2 leading-relaxed flex 
  justify-center items-center focus:ring-1 focus:ring-palette-light focus:outline-none w-full hover:bg-palette-lighter rounded-xl transform duration-500 ease-in-out hover:scale-105"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="w-4 mr-2 inline-flex" />
      Back To All Products
    </Link>
  );
}

export default BackToProductButton;
