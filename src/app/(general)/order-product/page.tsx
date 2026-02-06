"use client";

import { useRouter } from "next/navigation";

export default function OrderProductPage() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Order placed successfully!");
    router.push("/");
  }

  return (
    <>
      <h1 className="bg-green-400 text-white px-10 py-5">
        Order Product Page
      </h1>
      <button onClick={handleClick} className="bg-blue-500 text-white px-10 py-5 mt-5">
        Place order
      </button>
    </>
  );
}