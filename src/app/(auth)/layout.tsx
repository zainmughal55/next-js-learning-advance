"use client";
import Link from "next/link";
import Footer from "../../components/footer";
import Header from "../../components/header";
import "./../globals.css";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/login", label: "Login" },
  { href: "/register", label: "Register" },
  { href: "/forgot-password", label: "Forgot Password" },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html>
      <body>
        <h1 className="bg-amber-500 text-white px-10 py-5">Auth Layout</h1>
        <Header />
        {navLinks.map(link => {
          const isActive = pathname === link.href;
          return <Link key={link.href} href={link.href} className={`px-5 py-2 rounded ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>{link.label}</Link>
        })}
        {children}
        <Footer />
      </body>
    </html>
  )
}