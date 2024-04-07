import { cn } from "@/lib/utils";

export default function BookStatus({ status }: { status: string }) {
  return (
    <span
      className={cn("inline-flex items-center rounded-full px-2 py-1 text-md", {
        "bg-red-300 text-red-800": status === "inactive",
        "bg-blue-300 text-blue-800": status === "active",
      })}
    >
      {status === "inactive" ? <>Inactive</> : null}
      {status === "active" ? <>Active</> : null}
    </span>
  );
}
