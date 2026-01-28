import { Lock, Mail, User2Icon } from 'lucide-react'
import React from 'react'
import api from '../configs/api'
import { useDispatch } from 'react-redux'
import { login } from '../app/features/authSlice'
import toast from 'react-hot-toast'

const Login = () => {

  const dispatch = useDispatch()
  const query = new URLSearchParams(window.location.search)
  const urlState = query.get('state')
  const [state, setState] = React.useState(urlState || "login")

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    password: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post(`/api/users/${state}`, formData)
      dispatch(login(data))
      localStorage.setItem('token', data.token)
      toast.success(data.message)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white rounded-2xl px-8 py-10 shadow-xl border border-slate-200"
      >
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-slate-900 text-center">
          {state === "login" ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-slate-500 text-sm mt-2 text-center">
          {state === "login"
            ? "Login to continue building your resume"
            : "Sign up to start building ATS-friendly resumes"}
        </p>

        {/* Name */}
        {state !== "login" && (
          <div className="flex items-center mt-6 w-full border border-slate-300 h-12 rounded-full px-5 gap-2">
            <User2Icon size={16} className="text-slate-500" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full outline-none text-sm text-slate-800"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}

        {/* Email */}
        <div className="flex items-center mt-4 w-full border border-slate-300 h-12 rounded-full px-5 gap-2">
          <Mail size={15} className="text-slate-500" />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full outline-none text-sm text-slate-800"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password */}
        <div className="flex items-center mt-4 w-full border border-slate-300 h-12 rounded-full px-5 gap-2">
          <Lock size={15} className="text-slate-500" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full outline-none text-sm text-slate-800"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {/* Forgot password */}
        <div className="mt-4 text-right">
          <button
            type="button"
            className="text-sm text-slate-500 hover:text-slate-700"
          >
            Forgot password?
          </button>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="mt-6 w-full h-11 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
        >
          {state === "login" ? "Login" : "Create Account"}
        </button>

        {/* Switch */}
        <p
          onClick={() =>
            setState(prev => (prev === "login" ? "register" : "login"))
          }
          className="text-slate-500 text-sm mt-6 text-center cursor-pointer"
        >
          {state === "login"
            ? "Don’t have an account?"
            : "Already have an account?"}
          <span className="ml-1 text-slate-900 font-medium hover:underline">
            {state === "login" ? "Sign up" : "Login"}
          </span>
        </p>
      </form>
    </div>
  )
}

export default Login

