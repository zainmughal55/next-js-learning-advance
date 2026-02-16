import Link from "next/link";

export default function PhotosPage() {
  return (
    <div>
      <h1>Photos Page</h1>
      <Link href="/photos/1">View Photo 1</Link>
    </div>
  );
}