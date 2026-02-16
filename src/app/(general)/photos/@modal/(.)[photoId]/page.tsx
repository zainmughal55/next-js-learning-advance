export default async function InterceptedPhotoPage({ params }: { params: Promise<{ photoId: string }> }) {
  const { photoId } = await params;
  return (
    <div>
      <h1>Photo Page for ID: {photoId}</h1>
    </div>
  );
}