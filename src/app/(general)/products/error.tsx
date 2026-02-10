"use client";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({ error, reset }: { error: Error, reset: () => void }) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    })
  }
  return (
    <div>
      <h1 className="text-red-400">Something went wrong while loading the product details: {error.message}</h1>
      <button onClick={reload}>Try Again</button>
    </div>
  )
}