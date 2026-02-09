import { notFound } from "next/navigation";

export default async function ReviewDetailPage({ params }: { params: Promise<{ reviewId: string; productId: string }> }) {
  const { productId, reviewId } = await params;

  if (Math.floor(Math.random() * 2)) {
    throw new Error("Random error occurred while fetching review details");
  }

  if (+reviewId > 1000) {
    notFound()
  }
  return (
    <main>
      <h1 className="bg-blue-400 text-white px-10 py-5">Review Detail Page {reviewId} for Product {productId}</h1>
    </main>
  );
}