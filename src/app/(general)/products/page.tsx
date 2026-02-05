import Link from "next/link";

export default function ProductsPage() {
  const productId = 100;
  return (
    <main>
      <Link href="/">Home</Link>
      <h1>Welcome to the Products Page</h1>
      <nav className="px-10 py-5 flex gap-5">
        <Link href="/products/1">Product 1</Link>
        <Link href="/products/2">Product 2</Link>
        <Link href="/products/3" replace>Product 3</Link>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </nav>
    </main>
  );
}