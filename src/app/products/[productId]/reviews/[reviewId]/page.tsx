import { notFound } from "next/navigation";

export default async function ReviewDetailPage({ params }: { params: Promise<{ reviewId: string; productId: string }> }) {
  const { productId, reviewId } = await params;

  if (+reviewId > 1000) {
    notFound()
  }
  return (
    <main>
      <h1>Review Detail Page {reviewId} for Product {productId}</h1>
    </main>
  );
}