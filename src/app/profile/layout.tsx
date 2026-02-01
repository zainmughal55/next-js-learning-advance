export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>
        <h1>User Profile</h1>
      </header>
      <section>
        {children}
      </section>
    </div>
  );
}