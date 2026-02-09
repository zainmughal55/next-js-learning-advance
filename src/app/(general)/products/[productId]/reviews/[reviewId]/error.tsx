"use client";

export default function ErrorBoundary({ error }: { error: Error }) {
  return <h1 className="text-red-400">Something went wrong while loading the review details: {error.message}</h1>;
}