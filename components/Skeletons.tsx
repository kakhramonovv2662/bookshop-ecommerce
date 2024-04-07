const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function BooksCardSkeleton() {
  return (
      <div
        className={`${shimmer} relative overflow-hidden rounded shadow-lg mx-auto border flex flex-col gap-3 bg-gray-100`}
      >
        <div className="w-96 h-72 relative z-10 bg-gray-200"></div>
        <div className="h-56 relative z-0 flex flex-col gap-5 px-5">
          <div className="text-2xl w-full h-10 font-semibold bg-gray-200"></div>
          <div className="text-lg w-full h-11 bg-gray-200 font-light"></div>
          <div className="font-medium h-10 w-20 text-base bg-gray-200 rounded-s-3xl absolute bottom-2 right-0 pl-6 pr-4 py-1"></div>
        </div>
      </div>
  );
}
