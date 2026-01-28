// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Navbar from '../components/Navbar'
// import {useSelector} from 'react-redux'
// import Loader from '../components/Loader'
// import Login from './Login'

// const Layout = () => {

//   const {user, loading} = useSelector(state => state.auth)

//   if(loading){
//     return <Loader />
//   }

//   return (
//     <div>
//       {
//         user ? (
//         <div className='min-h-screen bg-gray-50'>
//           <Navbar />
//           <Outlet />
//         </div>
//       ) 
//       : <Login />
//       }
      
//     </div>
//   )
// }

// export default Layout


import React from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader"
import Login from "./Login"

const Layout = () => {
  const { user, loading } = useSelector((state) => state.auth)

  // Global loading state
  if (loading) {
    return <Loader text="Setting up your workspace By CreateResume" />
  }

  return (
    <>
      {user ? (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
          {/* Top Navigation */}
          <Navbar />

          {/* Main Content Area */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <Outlet />
          </main>
        </div>
      ) : (
        <Login />
      )}
    </>
  )
}

export default Layout
