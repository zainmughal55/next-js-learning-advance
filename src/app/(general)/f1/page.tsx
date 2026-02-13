import Link from "next/link";

export default function F1Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">F1 Page</h1>
      <Link href="/f1/f2">Go to F2</Link>
      <Link href="/f3">Go to F3</Link>
    </div>
  )
}