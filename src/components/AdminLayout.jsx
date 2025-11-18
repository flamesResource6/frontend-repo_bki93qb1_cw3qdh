import { Link, NavLink, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60 bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/admin" className="font-semibold text-lg">Admin</Link>
          <nav className="flex items-center gap-6 text-slate-300">
            <NavLink to="/admin" end className={({isActive})=> isActive? 'text-white' : 'hover:text-white'}>Dashboard</NavLink>
            <NavLink to="/admin/users" className={({isActive})=> isActive? 'text-white' : 'hover:text-white'}>Users</NavLink>
            <NavLink to="/admin/settings" className={({isActive})=> isActive? 'text-white' : 'hover:text-white'}>Settings</NavLink>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 py-6 text-center text-slate-400">
        © {new Date().getFullYear()} Admin Panel
      </footer>
    </div>
  )
}
