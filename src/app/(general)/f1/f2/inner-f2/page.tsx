import Link from "next/link";

export default function InnerF2Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Inner F2 Page</h1>
      <Link href="/f5">Go to F5</Link>
    </div>
  )
}