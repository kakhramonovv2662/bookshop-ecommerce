import Image from "next/image";
import Price from "../Product/Price";
import { UpdateInvoice } from "./Buttons";
import BookStatus from "./Status";
import { ProductTypes } from "@/types";

export default function DashboardTable({ rows }: { rows: ProductTypes[] }) {
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Picture
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Description
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Cost
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {rows?.map(({ cost, description, file, id, title, status }) => (
                <tr
                  key={id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      <Image
                        src={`/${file}`}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${title}'s profile picture`}
                      />
                      <p>{title}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">{description}</td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <Price currency="$" num={cost} numSize="text-lg" />
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <BookStatus status={status} />
                  </td>
                  <td className="whitespace-nowrap py-3">
                    <div className="flex justify-center gap-3">
                      <UpdateInvoice id={id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
