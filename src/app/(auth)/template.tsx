import Footer from "@/src/components/footer";
import Header from "@/src/components/header";
import "./../globals.css";
import Navbar from "@/src/components/navbar";
import TextField from "@/src/components/text-field";

export const metadata = {
  title: "Auth Layout",
  description: "This is the auth layout for login and register pages",
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <h1 className="bg-amber-500 text-white px-10 py-5">Auth Layout</h1>
        <Header />
        <TextField />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}