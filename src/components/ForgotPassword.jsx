import { useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ForgotPassword(){
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  async function handleSubmit(e){
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending request...' })
    try{
      const res = await fetch(`${API_BASE}/auth/forgot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data.detail || 'Something went wrong')
      setStatus({ type: 'success', message: data.message })
    }catch(err){
      setStatus({ type: 'error', message: err.message })
    }
  }

  return (
    <div className="min-h-screen grid place-items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6">
      <div className="w-full max-w-md bg-slate-900/70 border border-slate-800 rounded-2xl p-6 shadow-xl">
        <h1 className="text-2xl font-bold text-white mb-1">Forgot your password?</h1>
        <p className="text-slate-300 text-sm mb-6">Enter your email and we'll send you a reset link.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={e=>setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-slate-950 border border-slate-800 rounded-md px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white"
            disabled={status.type==='loading'}
          >
            {status.type==='loading' ? 'Sending…' : 'Send reset link'}
          </button>
        </form>

        {status.type !== 'idle' && (
          <div className={`mt-4 text-sm ${status.type==='success' ? 'text-emerald-300' : status.type==='error' ? 'text-rose-300' : 'text-slate-300'}`}>
            {status.message}
          </div>
        )}
      </div>
    </div>
  )
}
