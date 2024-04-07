import { BooksCardSkeleton } from "@/components/Skeletons";

export default function Loading() {
  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-16">
        <BooksCardSkeleton />
      </div>
    </div>
  );
}
