import Link from "next/link";

export default async function BlogPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay for loading
  return (
    <main>
      <h1>Welcome to the Blog Page</h1>
      <Link href="/">Go back to Home</Link>
    </main>
  );
}