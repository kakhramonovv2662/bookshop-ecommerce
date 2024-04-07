import Header from "@/components/Header";
import ShoppingCartModal from "@/components/cart/ShoppingCartModal";
import { Suspense } from "react";
import Loading from "./loading";

const Cart = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <main>
        <div className="container my-5">
          <ShoppingCartModal />
        </div>
      </main>
    </Suspense>
  );
};

export default Cart;
