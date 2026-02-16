export default function PhotosLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Photos Layout</h1>
      {children}
      {modal}
    </div>
  );
}