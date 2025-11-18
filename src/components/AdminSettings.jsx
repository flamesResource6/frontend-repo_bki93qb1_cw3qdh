export default function AdminSettings(){
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 space-y-4">
        <div>
          <label className="block text-sm text-slate-400 mb-1">Site name</label>
          <input className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/40" placeholder="My Admin" />
        </div>
        <div className="flex items-center gap-3">
          <input id="dark" type="checkbox" className="size-4" defaultChecked />
          <label htmlFor="dark" className="text-sm text-slate-300">Enable dark mode</label>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white">Save changes</button>
          <button className="px-4 py-2 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200">Reset</button>
        </div>
      </div>
    </div>
  )
}
