import Footer from "../../components/footer";
import Header from "../../components/header";
import "./../globals.css";

export const metadata = {
  title: "General Layout",
  description: "This is the general layout for the application.",
}

export default function GeneralLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <h1 className="bg-green-500 text-white px-10 py-5">General Layout</h1>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}