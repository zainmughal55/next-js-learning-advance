export default async function ProductDetailPage({ params }: { params: Promise<{ productId: string }> }) {
  const resolvedParams = await params;
  return (
    <main>
      <h1>Product Detail Page {resolvedParams.productId}</h1>
    </main>
  );
}