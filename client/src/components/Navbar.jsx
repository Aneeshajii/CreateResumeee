// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { logout } from '../app/features/authSlice'

// const Navbar = () => {

//    const {user} = useSelector(state => state.auth)
//    const dispatch = useDispatch()

//     const navigate = useNavigate()

//     const logoutUser = ()=>{
//         navigate('/')
//         dispatch(logout())
//     }

//   return (
//     <div className='shadow bg-white'>
//       <nav className='flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all'>
//         <Link to='/'>
//             <img src="/ll.png" alt="logo" className="h-11 w-auto" />
//         </Link>
//         <div className='flex items-center gap-4 text-sm'>
//             <p className='max-sm:hidden'>Hi, {user?.name}</p>
//             <button onClick={logoutUser} className='bg-white hover:bg-slate-50 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default Navbar



import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../app/features/authSlice'

const Navbar = () => {

  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutUser = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900" />

      <nav className="
        bg-white/90 backdrop-blur-xl
        border-b border-slate-200/70
      ">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LOGO + BRAND */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/ll.png"
              alt="ResumeAI"
              className="
                h-16 w-auto object-contain
                transition-transform duration-300
                group-hover:scale-105
              "
            />
            <div className="hidden sm:block">
              <p className="text-lg font-semibold text-slate-900 tracking-tight">
                ResumeAI
              </p>
              <p className="text-[11px] text-slate-500 tracking-wide">
                ATS-Optimized Resume Builder
              </p>
            </div>
          </Link>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-4 sm:gap-6">

            {/* User info */}
            <div className="hidden sm:flex flex-col leading-tight text-right">
              <span className="text-xs text-slate-500">Welcome</span>
              <span className="text-sm font-medium text-slate-900">
                {user?.name}
              </span>
            </div>

            {/* Divider */}
            <span className="hidden sm:block h-8 w-px bg-slate-200" />

            {/* Logout */}
            <button
              onClick={logoutUser}
              className="
                px-6 py-2 rounded-full
                text-sm font-medium
                text-slate-700
                border border-slate-300
                bg-white
                hover:bg-slate-900 hover:text-white
                hover:border-slate-900
                transition-all duration-300
                active:scale-95
                shadow-sm hover:shadow-md
              "
            >
              Logout
            </button>

          </div>

        </div>
      </nav>
    </header>
  )
}

export default Navbar
