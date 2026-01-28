// import { BriefcaseBusiness, Globe, Linkedin, Mail, MapPin, Phone, User } from 'lucide-react'
// import React from 'react'

// const PersonalInfoForm = ({data, onChange, removeBackground, setRemoveBackground}) => {

//     const handleChange = (field, value)=>{
//         onChange({...data, [field]: value})
//     }

//     const fields = [
//         {key: "full_name", label: "Full Name", icon: User, type: "text", required: true},
//         {key: "email", label: "Email Address", icon: Mail, type: "email", required: true},
//         { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
//         { key: "location", label: "Location", icon: MapPin, type: "text" },
//         { key: "profession", label: "Profession", icon: BriefcaseBusiness, type: "text" },
//         { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
//         { key: "website", label: "Personal Website", icon: Globe, type: "url" }
//     ]

//   return (
//     <div>
//       <h3 className='text-lg font-semibold text-gray-900'>Personal Information</h3>
//       <p className='text-sm text-gray-600'>Get Started with the personal information</p>
//       <div className='flex items-center gap-2'>
//         <label>
//             {data.image ? (
//                 <img src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)} alt="user-image" className='w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80'/>
//             ) : (
//                 <div className='inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer'>
//                     <User className='size-10 p-2.5 border rounded-full'/> 
//                     upload user image
//                 </div>
//             )}
//             <input type="file" accept="image/jpeg, image/png" className="hidden" onChange={(e)=>handleChange("image", e.target.files[0])}/>
//         </label>
//         {typeof data.image === 'object' && (
//             <div className='flex flex-col gap-1 pl-4 text-sm'>
//                 <p>Remove Background</p>
//                 <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>
//                     <input type="checkbox" className="sr-only peer" onChange={()=>setRemoveBackground(prev => !prev)} checked={removeBackground}/>
//                     <div className='w-9 h-5 bg-slate-300 rounded-full peer peer-checked:bg-green-600 transition-colors duration-200'>
//                     </div>
//                     <span className='dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4'></span>
//                 </label>
//             </div>
//         )}
//       </div>

//     {fields.map((field)=>{
//         const Icon = field.icon;
//         return (
//             <div key={field.key} className='space-y-1 mt-5'>
//                 <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
//                     <Icon className="size-4"/>
//                     {field.label}
//                     {field.required && <span className="text-red-500">*</span>}
//                 </label>
//                 <input type={field.type} value={data[field.key] || ""} onChange={(e)=>handleChange(field.key, e.target.value)} className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm' placeholder={`Enter your ${field.label.toLowerCase()}`} required={field.required}/>
//             </div>
//         )
//     })}
//     </div>
//   )
// }

// export default PersonalInfoForm



// import {
//   BriefcaseBusiness,
//   Globe,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   User
// } from 'lucide-react'
// import React from 'react'

// const PersonalInfoForm = ({ data, onChange, removeBackground, setRemoveBackground }) => {

//   const handleChange = (field, value) => {
//     onChange({ ...data, [field]: value })
//   }

//   const fields = [
//     { key: "full_name", label: "Full Name", icon: User, type: "text", required: true },
//     { key: "email", label: "Email Address", icon: Mail, type: "email", required: true },
//     { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
//     { key: "location", label: "Location", icon: MapPin, type: "text" },
//     { key: "profession", label: "Current Role / Profession", icon: BriefcaseBusiness, type: "text" },
//     { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
//     { key: "website", label: "Portfolio / Website", icon: Globe, type: "url" }
//   ]

//   return (
//     <section className="bg-white border border-slate-200 rounded-xl p-6 sm:p-8 shadow-sm">

//       {/* Header */}
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-slate-900">
//           Personal Information
//         </h3>
//         <p className="text-sm text-slate-500 mt-1">
//           This information appears at the top of your resume
//         </p>
//       </div>

//       {/* Profile Image */}
//       <div className="flex items-center gap-5 mb-8">
//         <label className="cursor-pointer">
//           {data.image ? (
//             <img
//               src={typeof data.image === 'string'
//                 ? data.image
//                 : URL.createObjectURL(data.image)}
//               alt="Profile"
//               className="
//                 w-20 h-20 rounded-full object-cover
//                 ring-2 ring-slate-200
//                 hover:opacity-90 transition
//               "
//             />
//           ) : (
//             <div className="
//               w-20 h-20 flex items-center justify-center
//               rounded-full border border-dashed
//               text-slate-500 hover:text-slate-700
//               hover:border-slate-400 transition
//             ">
//               <User className="size-8" />
//             </div>
//           )}

//           <input
//             type="file"
//             accept="image/jpeg, image/png"
//             className="hidden"
//             onChange={(e) => handleChange("image", e.target.files[0])}
//           />
//         </label>

//         {/* Background Toggle */}
//         {typeof data.image === 'object' && (
//           <div className="flex flex-col gap-1 text-sm">
//             <span className="font-medium text-slate-700">
//               Remove Background
//             </span>

//             <label className="relative inline-flex items-center cursor-pointer gap-3">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={removeBackground}
//                 onChange={() => setRemoveBackground(prev => !prev)}
//               />
//               <div className="
//                 w-10 h-5 bg-slate-300 rounded-full
//                 peer-checked:bg-blue-600
//                 transition-colors
//               " />
//               <span className="
//                 absolute left-1 top-1 w-3 h-3
//                 bg-white rounded-full
//                 transition-transform
//                 peer-checked:translate-x-5
//               " />
//             </label>
//           </div>
//         )}
//       </div>

//       {/* Form Fields */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//         {fields.map(field => {
//           const Icon = field.icon
//           return (
//             <div key={field.key} className="space-y-1">
//               <label className="flex items-center gap-2 text-sm font-medium text-slate-600">
//                 <Icon className="size-4 text-slate-400" />
//                 {field.label}
//                 {field.required && (
//                   <span className="text-red-500">*</span>
//                 )}
//               </label>

//               <input
//                 type={field.type}
//                 value={data[field.key] || ""}
//                 onChange={(e) => handleChange(field.key, e.target.value)}
//                 placeholder={`Enter ${field.label.toLowerCase()}`}
//                 required={field.required}
//                 className="
//                   w-full px-3 py-2.5 text-sm
//                   border border-slate-300 rounded-lg
//                   bg-white
//                   focus:outline-none
//                   focus:ring-2 focus:ring-blue-500/30
//                   focus:border-blue-600
//                   transition
//                 "
//               />
//             </div>
//           )
//         })}
//       </div>

//     </section>
//   )
// }

// export default PersonalInfoForm


import {
  BriefcaseBusiness,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User
} from 'lucide-react'
import React from 'react'

const PersonalInfoForm = ({
  data,
  onChange,
  removeBackground,
  setRemoveBackground
}) => {

  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value })
  }

  const fields = [
    { key: "full_name", label: "Full Name", icon: User, type: "text", required: true },
    { key: "email", label: "Email Address", icon: Mail, type: "email", required: true },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
    { key: "location", label: "Location", icon: MapPin, type: "text" },
    { key: "profession", label: "Current Role", icon: BriefcaseBusiness, type: "text" },
    { key: "linkedin", label: "LinkedIn URL", icon: Linkedin, type: "url" },
    { key: "website", label: "Portfolio / Website", icon: Globe, type: "url" }
  ]

  return (
    <section className="bg-white rounded-3xl border border-gray-200 shadow-sm px-8 py-10 max-w-4xl mx-auto">

      {/* Header */}
      <header className="mb-10">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900">
          Personal Information
        </h2>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-2xl">
          Provide accurate details to create a polished, ATS-optimized resume
          that recruiters trust.
        </p>
      </header>

      {/* Profile Section */}
      <div className="flex items-center gap-6 mb-10">
        <label className="relative cursor-pointer group">
          {data.image ? (
            <img
              src={
                typeof data.image === 'string'
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="profile"
              className="
                w-24 h-24 rounded-full object-cover
                ring-2 ring-gray-300
                group-hover:ring-blue-500
                transition
              "
            />
          ) : (
            <div
              className="
                w-24 h-24 rounded-full
                border border-dashed border-gray-300
                flex flex-col items-center justify-center
                text-gray-500
                group-hover:border-blue-500
                group-hover:text-blue-600
                transition
              "
            >
              <User className="size-7" />
              <span className="text-xs mt-1 font-medium">
                Upload Photo
              </span>
            </div>
          )}

          <input
            type="file"
            accept="image/jpeg,image/png"
            className="hidden"
            onChange={(e) => handleChange("image", e.target.files[0])}
          />
        </label>

        {typeof data.image === "object" && (
          <div className="flex flex-col gap-2">
            <span className="text-sm font-medium text-gray-700">
              Image Processing
            </span>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={removeBackground}
                onChange={() => setRemoveBackground(p => !p)}
              />
              <div className="w-11 h-6 rounded-full bg-gray-300 peer-checked:bg-green-600 transition"></div>
              <span className="w-4 h-4 bg-white rounded-full absolute ml-1 transition peer-checked:translate-x-5"></span>
              <span className="text-sm text-gray-600">
                Remove background automatically
              </span>
            </label>
          </div>
        )}
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {fields.map((field) => {
          const Icon = field.icon
          return (
            <div key={field.key} className="space-y-1">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-800">
                <Icon className="size-4 text-gray-500" />
                {field.label}
                {field.required && (
                  <span className="text-red-500">*</span>
                )}
              </label>

              <input
                type={field.type}
                value={data[field.key] || ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.label}
                required={field.required}
                className="
                  w-full rounded-xl border border-gray-300
                  px-4 py-3 text-sm
                  text-gray-900 placeholder-gray-400
                  focus:outline-none focus:ring-2 focus:ring-blue-600
                  focus:border-blue-600
                  transition
                "
              />
            </div>
          )
        })}
      </div>

    </section>
  )
}

export default PersonalInfoForm






// its good premium

// import {
//   BriefcaseBusiness,
//   Globe,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   User
// } from "lucide-react"
// import React from "react"

// const PersonalInfoForm = ({
//   data,
//   onChange,
//   removeBackground,
//   setRemoveBackground
// }) => {

//   const handleChange = (field, value) => {
//     onChange({ ...data, [field]: value })
//   }

//   const fields = [
//     { key: "full_name", label: "Full Name", icon: User, type: "text", required: true },
//     { key: "email", label: "Email Address", icon: Mail, type: "email", required: true },
//     { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
//     { key: "location", label: "Location", icon: MapPin, type: "text" },
//     { key: "profession", label: "Current Position", icon: BriefcaseBusiness, type: "text" },
//     { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
//     { key: "website", label: "Portfolio Website", icon: Globe, type: "url" }
//   ]

//   return (
//     <section
//       className="
//         max-w-5xl mx-auto
//         rounded-[28px]
//         border border-gray-200
//         bg-white/70 backdrop-blur-xl
//         shadow-[0_20px_60px_rgba(0,0,0,0.08)]
//         px-10 py-12
//       "
//     >

//       {/* Header */}
//       <div className="mb-12">
//         <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
//           Personal Details
//         </h2>
//         <p className="mt-3 text-gray-500 max-w-2xl leading-relaxed">
//           Enter your professional information exactly as recruiters expect.
//           This section is critical for ATS screening.
//         </p>
//       </div>

//       {/* Profile Upload */}
//       <div className="flex items-center gap-8 mb-14">
//         <label className="group cursor-pointer relative">
//           {data.image ? (
//             <img
//               src={
//                 typeof data.image === "string"
//                   ? data.image
//                   : URL.createObjectURL(data.image)
//               }
//               className="
//                 w-28 h-28 rounded-full object-cover
//                 ring-2 ring-gray-300
//                 group-hover:ring-blue-600
//                 transition
//               "
//             />
//           ) : (
//             <div
//               className="
//                 w-28 h-28 rounded-full
//                 border border-dashed border-gray-300
//                 flex flex-col items-center justify-center
//                 text-gray-500
//                 group-hover:border-blue-600
//                 group-hover:text-blue-600
//                 transition
//               "
//             >
//               <User className="size-8" />
//               <span className="text-xs font-medium mt-1">
//                 Upload Photo
//               </span>
//             </div>
//           )}
//           <input
//             type="file"
//             accept="image/jpeg,image/png"
//             className="hidden"
//             onChange={(e) => handleChange("image", e.target.files[0])}
//           />
//         </label>

//         {typeof data.image === "object" && (
//           <div className="space-y-2">
//             <p className="text-sm font-medium text-gray-700">
//               Image Enhancements
//             </p>

//             <label className="flex items-center gap-4 cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="sr-only peer"
//                 checked={removeBackground}
//                 onChange={() => setRemoveBackground(p => !p)}
//               />
//               <div className="relative w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition">
//                 <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-6"></span>
//               </div>
//               <span className="text-sm text-gray-600">
//                 Auto remove background
//               </span>
//             </label>
//           </div>
//         )}
//       </div>

//       {/* Inputs */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//         {fields.map(field => {
//           const Icon = field.icon
//           return (
//             <div key={field.key} className="relative">
//               <input
//                 type={field.type}
//                 value={data[field.key] || ""}
//                 onChange={(e) => handleChange(field.key, e.target.value)}
//                 required={field.required}
//                 placeholder=" "
//                 className="
//                   peer w-full
//                   rounded-xl border border-gray-300
//                   px-4 pt-5 pb-2
//                   text-sm text-gray-900
//                   focus:outline-none focus:ring-2 focus:ring-blue-600
//                   focus:border-blue-600
//                   transition
//                 "
//               />
//               <label
//                 className="
//                   absolute left-4 top-3
//                   text-sm text-gray-500
//                   peer-placeholder-shown:top-4
//                   peer-placeholder-shown:text-gray-400
//                   peer-placeholder-shown:text-sm
//                   peer-focus:top-2
//                   peer-focus:text-xs
//                   peer-focus:text-blue-600
//                   transition-all
//                 "
//               >
//                 {field.label} {field.required && "*"}
//               </label>
//               <Icon className="absolute right-4 top-4 size-4 text-gray-400" />
//             </div>
//           )
//         })}
//       </div>

//     </section>
//   )
// }

// export default PersonalInfoForm
