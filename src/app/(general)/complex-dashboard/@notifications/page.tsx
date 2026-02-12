import Link from "next/link";

export default function NotificationsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Notifications Page</h2>
      <p>This is the notifications page content.</p>
      <Link href="/complex-dashboard/archive">View Archive</Link>
    </div>
  )
}