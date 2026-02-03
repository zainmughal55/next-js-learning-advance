"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname()
  return <h1>404 - That Review Page Not Found in path: {pathname}</h1>;
}