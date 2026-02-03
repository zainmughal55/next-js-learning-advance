import Footer from "../../components/footer";
import Header from "../../components/header";
import "./../globals.css";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <h1 className="bg-blue-500 text-white px-10 py-5">Marketing Layout</h1>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}