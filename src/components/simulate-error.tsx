"use client";
import { useState } from "react";

export default function SimulateError() {
  const [isError, setIsError] = useState(false);
  if (isError) {
    throw new Error("Random error occurred while fetching root");
  }
  return <button className="text-red-500 border-2 border-red-500" onClick={() => setIsError(true)}>Simulate Error</button>
}