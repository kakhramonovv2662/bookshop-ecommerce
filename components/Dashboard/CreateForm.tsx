"use client";

import Link from "next/link";
import { updateBooks } from "@/lib/action";
import { ProductTypes } from "@/types";
import { Button } from "../Button";

export default function Form({ bookItem }: { bookItem: ProductTypes }) {
  const updateInvoiceWithId = updateBooks.bind(null, bookItem?.id);

  return (
    <form action={updateInvoiceWithId}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the book status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input
                  required
                  id="inactive"
                  name="status"
                  type="radio"
                  value="inactive"
                  defaultChecked={bookItem?.status === "inactive"}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="inactive"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Inactive
                </label>
              </div>
              <div className="flex items-center">
                <input
                  required
                  id="active"
                  name="status"
                  type="radio"
                  defaultChecked={bookItem?.status === "active"}
                  value="active"
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label
                  htmlFor="active"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white"
                >
                  Active
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard"
          className="flex h-10 items-center rounded-3xl bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Update status</Button>
      </div>
    </form>
  );
}
