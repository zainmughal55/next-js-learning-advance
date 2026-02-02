import Footer from "../components/footer";
import Header from "../components/header";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <h1 className="bg-amber-500 text-white px-10 py-5">Root Layout</h1>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}