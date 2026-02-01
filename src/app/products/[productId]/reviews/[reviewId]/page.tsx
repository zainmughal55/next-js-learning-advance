export default async function ReviewDetailPage({ params }: { params: Promise<{ reviewId: string; productId: string }> }) {
  const resolvedParams = await params;
  return (
    <main>
      <h1>Review Detail Page {resolvedParams.reviewId} for Product {resolvedParams.productId}</h1>
    </main>
  );
}