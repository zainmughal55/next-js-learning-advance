import Link from "next/link";

export default function NotificationsArchivePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Notifications Archive Page</h2>
      <p>This is the notifications archive page content.</p>
      <Link href="/complex-dashboard">View Complex Dashboard</Link>
    </div>
  )
}