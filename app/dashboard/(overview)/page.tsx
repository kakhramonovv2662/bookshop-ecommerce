import { CreateInvoice } from "@/components/Dashboard/Buttons";
import DashboardTable from "@/components/Dashboard/Table";
import Pagination from "@/components/Pagination";
import Search from "@/components/Search";
import { fetchBooks } from "@/lib/data";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  const books = await fetchBooks(
    searchParams?.query || "",
    +searchParams?.page || 1
  );

  return (
    <main>
      <div className="w-full">
        <div className="flex w-full items-center justify-between">
          <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <Search placeholder="Search books..." />
        </div>
        <Suspense fallback={<>loading...</>}>
          <DashboardTable rows={books?.rows} />
        </Suspense>
        <div className="mt-5 flex w-full justify-end">
          <Pagination totalPages={books?.totalPages} />
        </div>
      </div>
    </main>
  );
}
