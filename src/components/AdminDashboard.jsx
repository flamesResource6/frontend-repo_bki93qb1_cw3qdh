export default function AdminDashboard(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Users" value="1,248" trend="up"/>
        <Card title="Revenue" value="$32,410" trend="up"/>
        <Card title="Errors" value="7" trend="down"/>
      </div>

      <section className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
        <h2 className="font-semibold mb-2">Recent Activity</h2>
        <ul className="text-slate-300 text-sm space-y-2">
          <li>• New user registered: jane@example.com</li>
          <li>• Order #1042 refunded</li>
          <li>• Backup completed successfully</li>
        </ul>
      </section>
    </div>
  )
}

function Card({title, value, trend}){
  const color = trend === 'up' ? 'text-emerald-400' : 'text-rose-400'
  const badge = trend === 'up' ? 'bg-emerald-400/10 text-emerald-300' : 'bg-rose-400/10 text-rose-300'
  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
      <div className="text-slate-400 text-sm mb-2">{title}</div>
      <div className="text-2xl font-semibold">{value}</div>
      <span className={`inline-flex mt-3 px-2 py-1 rounded-md text-xs ${badge}`}>{trend === 'up' ? '▲' : '▼'} 12%</span>
    </div>
  )
}
