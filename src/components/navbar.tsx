"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot Password" },
]

export default function Navbar() {
  const pathname = usePathname();

  return (navLinks.map(link => {
    const isActive = pathname === link.href;
    return (
      <Link key={link.href} href={link.href} className={`px-5 py-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
        {link.label}
      </Link>
    )
  }))
}