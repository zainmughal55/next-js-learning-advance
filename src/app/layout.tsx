import Footer from "../components/footer";
import Header from "../components/header";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <h1>Root Layout</h1>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}