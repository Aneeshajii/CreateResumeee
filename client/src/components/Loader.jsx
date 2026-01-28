// import React from 'react'

// const Loader = () => {
//   return (
//     <div className='flex items-center justify-center h-screen'>
//       <div className='size-12 border-3 border-gray-400 border-t-transparent rounded-full animate-spin'></div>
//     </div>
//   )
// }

// export default Loader


import React from "react"

const Loader = ({ text = "Preparing your professional resume…" }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      {/* Spinner */}
      <div className="relative h-16 w-16 mb-4">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin"></div>
      </div>

      {/* Loader Text */}
      <p className="text-gray-700 font-medium text-base tracking-wide text-center">
        {text}
      </p>

      {/* Optional sub-text for reassurance */}
      <p className="text-gray-400 text-sm mt-2 text-center">
        This might take a few seconds. Sit back, we’re creating your premium resume.
      </p>
    </div>
  )
}

export default Loader
