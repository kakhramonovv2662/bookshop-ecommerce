import { Suspense } from "react";
import LoginForm from "@/components/Login/LoginForm";
import Loading from "./loading";

export default function LoginPage() {
  return (
    <Suspense fallback={<Loading />}>
      <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
            <div className="w-32 text-white md:w-36">Shopping Cart</div>
          </div>
          <LoginForm />
        </div>
      </main>
    </Suspense>
  );
}
