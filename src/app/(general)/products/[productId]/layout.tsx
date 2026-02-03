export default function ProductDetailLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <h1 className="bg-amber-500 text-white px-10 py-5">Product Detail Layout</h1>
        {children}
      </body>
    </html>
  )
}