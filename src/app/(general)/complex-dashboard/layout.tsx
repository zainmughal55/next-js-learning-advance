export default function ComplexDashboardLayout({ children, users, revenue, notifications, login }:
  {
    children: React.ReactNode,
    notifications: React.ReactNode,
    revenue: React.ReactNode,
    users: React.ReactNode
    login: React.ReactNode
  }) {
  const isLoggedIn = true;
  return (isLoggedIn ?
    <div className="border-2 border-emerald-600 p-5">
      <h1 className="bg-green-500 text-white px-10 py-5">Complex Dashboard Layout</h1>
      {children}
      <div className="flex flex-row border-blue-400 border-2 w-fit">
        {users}
        {revenue}
      </div>
      {notifications}
    </div> : (login)
  )
}