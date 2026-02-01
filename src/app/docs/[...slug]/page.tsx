export default async function DocsSlugPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  if (slug.length === 2) {
    return <h1>Docs Feature: {slug[0]}, Concept: {slug[1]}</h1>;
  } else if (slug.length === 1) {
    return <h1>Docs Feature: {slug[0]}</h1>;
  }
  return <h1>Docs Home</h1>;
}