export default function AdminUsers(){
  const users = [
    {id: 1, name: 'John Carter', email: 'john@example.com', role: 'Admin'},
    {id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'Editor'},
    {id: 3, name: 'Mark Hill', email: 'mark@example.com', role: 'Viewer'},
  ]
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Users</h1>
      <div className="overflow-x-auto bg-slate-900/50 border border-slate-800 rounded-xl">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="text-left text-slate-400">
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-t border-slate-800 hover:bg-slate-900/40">
                <td className="py-3 px-4">{u.name}</td>
                <td className="py-3 px-4 text-slate-300">{u.email}</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 rounded-md text-xs bg-slate-800 text-slate-200">{u.role}</span>
                </td>
                <td className="py-3 px-4 text-right">
                  <button className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500 text-white">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
