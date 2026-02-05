import Link from 'next/link';

export default function GeneralPage() {
  return (
    <main>
      <h1 className="bg-blue-400 text-white px-10 py-5">

      </h1>
      <nav className='gap-5 flex px-10 py-5'>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/products">Products</Link>
      </nav>
    </main >
  );
}