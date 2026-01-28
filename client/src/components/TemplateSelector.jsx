// import { Check, Layout } from 'lucide-react'
// import React, { useState } from 'react'

// const TemplateSelector = ({ selectedTemplate, onChange }) => {
//     const [isOpen, setIsOpen] = useState(false)

//     const templates = [
//         {
//             id: "classic",
//             name: "Classic",
//             preview: "A clean, traditional resume format with clear sections and professional typography"
//         },
//         {
//             id: "modern",
//             name: "Modern",
//             preview: "Sleek design with strategic use of color and modern font choices"
//         },
//         {
//             id: "minimal-image",
//             name: "Minimal Image",
//             preview: "Minimal design with a single image and clean typography"
//         },
//             {
//             id: "minimal",
//             name: "Minimal",
//             preview: "Ultra-clean design that puts your content front and center"
//         },
//     ]
//   return (
//     <div className='relative'>
//       <button onClick={()=> setIsOpen(!isOpen)} className='flex items-center gap-1 text-sm text-blue-600 bg-gradient-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg'>
//         <Layout size={14} /> <span className='max-sm:hidden'>Template</span>
//       </button>
//       {isOpen && (
//         <div className='absolute top-full w-xs p-3 mt-2 space-y-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm'>
//             {templates.map((template)=>(
//                 <div key={template.id} onClick={()=> {onChange(template.id); setIsOpen(false)}} className={`relative p-3 border rounded-md cursor-pointer transition-all ${selectedTemplate === template.id ?
//                     "border-blue-400 bg-blue-100"
//                     : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"
//                 }`}>
//                     {selectedTemplate === template.id && (
//                         <div className="absolute top-2 right-2">
//                             <div className='size-5 bg-blue-400 rounded-full flex items-center justify-center'>
//                                 <Check className="w-3 h-3 text-white" />
//                             </div>
//                         </div>
//                     )}

//                     <div className="space-y-1">
//                         <h4 className='font-medium text-gray-800'>{template.name}</h4>
//                         <div className='mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic'>{template.preview}</div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default TemplateSelector





import { Check, Layout } from "lucide-react"
import React, { useState } from "react"

const TemplateSelector = ({ selectedTemplate, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
const templates = [
  {
    id: "professional",
    name: "Professional (ATS)",
    preview: "ATS-friendly, single-column layout preferred by recruiters and hiring systems.",
  },
  {
    id: "classic",
    name: "Classic",
    preview: "A clean, traditional resume format with clear sections and professional typography",
  },
  {
    id: "modern",
    name: "Modern",
    preview: "Sleek design with strategic use of color and modern font choices",
  },
//   {
//     id: "minimal-image",
//     name: "Minimal Image",
//     preview: "Minimal design with a single image and clean typography",
//   },
  {
    id: "minimal",
    name: "Minimal",
    preview: "Ultra-clean design that puts your content front and center",
  },
  {
    id:"modern-ATS",
    name: "modern-ATS",
    preview: "ATS friendly modern IT company Resume Templates",
  },
]


  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex items-center gap-2
          text-sm font-medium
          text-slate-700
          bg-white
          border border-slate-300
          px-3 py-2
          rounded-lg
          shadow-sm
          hover:bg-slate-50
          hover:border-slate-400
          transition-all
        "
      >
        <Layout size={15} />
        <span className="hidden sm:inline">Templates</span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="
            absolute left-0 top-full mt-2
            w-72
            p-3
            space-y-2
            z-20
            bg-white
            rounded-xl
            border border-slate-200
            shadow-lg
          "
        >
          {templates.map((template) => {
            const isActive = selectedTemplate === template.id

            return (
              <div
                key={template.id}
                onClick={() => {
                  onChange(template.id)
                  setIsOpen(false)
                }}
                className={`
                  relative
                  p-3
                  rounded-lg
                  border
                  cursor-pointer
                  transition-all
                  ${
                    isActive
                      ? "border-slate-900 bg-slate-50"
                      : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                  }
                `}
              >
                {/* Selected indicator */}
                {isActive && (
                  <div className="absolute top-3 right-3">
                    <div className="size-5 bg-slate-900 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                )}

                <h4 className="text-sm font-semibold text-slate-900">
                  {template.name}
                </h4>

                <p className="mt-1 text-xs text-slate-500 leading-relaxed">
                  {template.preview}
                </p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default TemplateSelector






























































































































































// import { Check, Layout } from "lucide-react"
// import React, { useState } from "react"

// const TemplateSelector = ({ selectedTemplate, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false)

//   const templates = [
//     {
//       id: "classic",
//       name: "Classic",
//       preview: "Traditional, recruiter-friendly layout with clear structure and timeless typography."
//     },
//     {
//       id: "modern",
//       name: "Modern",
//       preview: "Clean contemporary layout with subtle color accents and strong visual balance."
//     },
//     {
//       id: "minimal-image",
//       name: "Minimal Image",
//       preview: "Minimal design with a profile image and elegant spacing."
//     },
//     {
//       id: "minimal",
//       name: "Minimal",
//       preview: "Ultra-clean, content-focused layout optimized for ATS screening."
//     }
//   ]

//   return (
//     <div className="relative">
//       {/* Trigger Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="
//           flex items-center gap-2
//           text-sm font-medium
//           text-slate-700
//           bg-white
//           border border-slate-300
//           px-4 py-2
//           rounded-lg
//           shadow-sm
//           hover:bg-slate-50
//           hover:border-slate-400
//           transition-all
//         "
//       >
//         <Layout size={16} />
//         <span className="hidden sm:inline">Templates</span>
//       </button>

//       {/* Dropdown */}
//       {isOpen && (
//         <div
//           className="
//             absolute right-0 top-full mt-3
//             w-[340px]
//             z-20
//             bg-white
//             border border-slate-200
//             rounded-xl
//             shadow-xl
//             p-3
//             space-y-2
//           "
//         >
//           {templates.map((template) => {
//             const isActive = selectedTemplate === template.id

//             return (
//               <div
//                 key={template.id}
//                 onClick={() => {
//                   onChange(template.id)
//                   setIsOpen(false)
//                 }}
//                 className={`
//                   relative
//                   p-4
//                   rounded-lg
//                   border
//                   cursor-pointer
//                   transition-all
//                   ${
//                     isActive
//                       ? "border-slate-900 bg-slate-50"
//                       : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
//                   }
//                 `}
//               >
//                 {/* Selected badge */}
//                 {isActive && (
//                   <div className="absolute top-3 right-3">
//                     <div className="size-5 bg-slate-900 rounded-full flex items-center justify-center">
//                       <Check className="w-3 h-3 text-white" />
//                     </div>
//                   </div>
//                 )}

//                 <h4 className="text-sm font-semibold text-slate-900">
//                   {template.name}
//                 </h4>

//                 <p className="mt-1 text-xs text-slate-500 leading-relaxed">
//                   {template.preview}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
//       )}
//     </div>
//   )
// }

// export default TemplateSelector


// import { Check, Layout } from "lucide-react"
// import React, { useState } from "react"

// const TemplateSelector = ({ selectedTemplate, onChange }) => {
//   const [isOpen, setIsOpen] = useState(false)

//   const templates = [
//     {
//       id: "classic",
//       name: "Classic",
//       preview: "Traditional, recruiter-friendly layout with clear structure and timeless typography."
//     },
//     {
//       id: "modern",
//       name: "Modern",
//       preview: "Clean contemporary layout with subtle color accents and strong visual balance."
//     },
//     {
//       id: "minimal-image",
//       name: "Minimal Image",
//       preview: "Minimal design with a profile image and elegant spacing."
//     },
//     {
//       id: "minimal",
//       name: "Minimal",
//       preview: "Ultra-clean, content-focused layout optimized for ATS screening."
//     }
//   ]

//   return (
//     <div className="relative">
//       {/* Trigger Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="
//           flex items-center gap-2
//           text-sm font-medium
//           text-slate-700
//           bg-white
//           border border-slate-300
//           px-4 py-2
//           rounded-lg
//           shadow-sm
//           hover:bg-slate-50
//           hover:border-slate-400
//           transition-all
//         "
//       >
//         <Layout size={16} />
//         <span className="hidden sm:inline">Templates</span>
//       </button>

//       {/* Dropdown */}
//       {isOpen && (
//         <div
//           className="
//             absolute right-0 top-full mt-3
//             w-[340px]
//             z-20
//             bg-white
//             border border-slate-200
//             rounded-xl
//             shadow-xl
//             p-3
//             space-y-2
//           "
//         >
//           {templates.map((template) => {
//             const isActive = selectedTemplate === template.id

//             return (
//               <div
//                 key={template.id}
//                 onClick={() => {
//                   onChange(template.id)
//                   setIsOpen(false)
//                 }}
//                 className={`
//                   relative
//                   p-4
//                   rounded-lg
//                   border
//                   cursor-pointer
//                   transition-all
//                   ${
//                     isActive
//                       ? "border-slate-900 bg-slate-50"
//                       : "border-slate-200 hover:border-slate-400 hover:bg-slate-50"
//                   }
//                 `}
//               >
//                 {/* Selected badge */}
//                 {isActive && (
//                   <div className="absolute top-3 right-3">
//                     <div className="size-5 bg-slate-900 rounded-full flex items-center justify-center">
//                       <Check className="w-3 h-3 text-white" />
//                     </div>
//                   </div>
//                 )}

//                 <h4 className="text-sm font-semibold text-slate-900">
//                   {template.name}
//                 </h4>

//                 <p className="mt-1 text-xs text-slate-500 leading-relaxed">
//                   {template.preview}
//                 </p>
//               </div>
//             )
//           })}
//         </div>
//       )}
//     </div>
//   )
// }

// export default TemplateSelector