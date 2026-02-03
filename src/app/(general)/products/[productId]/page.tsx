import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { productId } = await params;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Iphone ${productId}`)
    }, 100)
  })
  return {
    title: `Product ${title}`
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const resolvedParams = await params;
  return (
    <main>
      <h1>Product Detail Page {resolvedParams.productId}</h1>
    </main>
  );
}