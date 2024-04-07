"use client";

import CustomError from "@/components/Error";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <CustomError error={error} reset={reset} />;
}
