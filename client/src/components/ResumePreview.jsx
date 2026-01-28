// import React from 'react'
// import ClassicTemplate from './templates/ClassicTemplate'
// import ModernTemplate from './templates/ModernTemplate'
// import MinimalTemplate from './templates/MinimalTemplate'
// import MinimalImageTemplate from './templates/MinimalImageTemplate'

// const ResumePreview = ({data, template, accentColor, classes = ""}) => {

//     const renderTemplate = ()=>{
//         switch (template) {
//             case "modern":
//                 return <ModernTemplate data={data} accentColor={accentColor}/>;
//             case "minimal":
//                 return <MinimalTemplate data={data} accentColor={accentColor}/>;
//             case "minimal-image":
//                 return <MinimalImageTemplate data={data} accentColor={accentColor}/>;

//             default:
//                 return <ClassicTemplate data={data} accentColor={accentColor}/>;
//         }
//     }

//   return (
//     <div className='w-full bg-gray-100'>
//       <div id="resume-preview" className={"border border-gray-200 print:shadow-none print:border-none " + classes}>
//         {renderTemplate()}
//       </div>

//       <style jsx>
//         {`
//         @page {
//           size: letter;
//           margin: 0;
//         }
//         @media print {
//           html, body {
//             width: 8.5in;
//             height: 11in;
//             overflow: hidden; 
//           }
//           body * {
//             visibility: hidden;
//           }
//           #resume-preview, #resume-preview * {
//             visibility: visible;
//           }
//           #resume-preview {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 100%;
//             height: auto;
//             margin: 0;
//             padding: 0;
//             box-shadow: none !important;
//             border: none !important;
//           }
//         }
//         `}
//       </style>
//     </div>
//   )
// }

// export default ResumePreview




// import React from "react"
// import ProfessionalTemplate from "../assets/templates/ProfessionalTemplate"
// import ClassicTemplate from "./templates/ClassicTemplate"
// import ModernTemplate from "./templates/ModernTemplate"
// import MinimalTemplate from "./templates/MinimalTemplate"
// // import MinimalImageTemplate from "./templates/MinimalImageTemplate"
// import ModernATSITTemplate from "../assets/templates/ModernATSITTemplate"
// const ResumePreview = ({ data, template, accentColor, classes = "" }) => {
// const renderTemplate = () => {
//   switch (template) {
//      case "Modern-ATS":
//       return <ModernATSITTemplate data={data} accentColor={accentColor} />
//     case "professional":
//       return <ProfessionalTemplate data={data} accentColor={accentColor} />

//     case "modern":
//       return <ModernTemplate data={data} accentColor={accentColor} />

//     case "minimal":
//       return <MinimalTemplate data={data} accentColor={accentColor} />

//     // case "Simple":
//     //   return <MinimalImageTemplate data={data} accentColor={accentColor} />

//     default:
//       return <ClassicTemplate data={data} accentColor={accentColor} />
//   }
// }


//   return (
//     <section className="w-full bg-slate-100 py-10 flex justify-center">
//       {/* Paper container */}
//       <div
//         id="resume-preview"
//         className={`
//           bg-white
//           border border-slate-200
//           shadow-xl
//           rounded-md
//           overflow-hidden
//           w-full
//           max-w-[8.5in]
//           print:shadow-none
//           print:border-none
//           print:rounded-none
//           ${classes}
//         `}
//       >
//         {renderTemplate()}
//       </div>

//       {/* Print Styles */}
//       <style jsx>{`
//         @page {
//           size: letter;
//           margin: 0;
//         }

//         @media print {
//           html,
//           body {
//             width: 8.5in;
//             height: 11in;
//             background: white;
//             overflow: hidden;
//           }

//           body * {
//             visibility: hidden;
//           }

//           #resume-preview,
//           #resume-preview * {
//             visibility: visible;
//           }

//           #resume-preview {
//             position: absolute;
//             left: 0;
//             top: 0;
//             width: 8.5in;
//             min-height: 11in;
//             margin: 0;
//             padding: 0;
//             box-shadow: none !important;
//             border: none !important;
//             border-radius: 0 !important;
//           }
//         }
//       `}</style>
//     </section>
//   )
// }

// export default ResumePreview






import React from "react"
import ProfessionalTemplate from "../assets/templates/ProfessionalTemplate"
import ClassicTemplate from "./templates/ClassicTemplate"
import ModernTemplate from "./templates/ModernTemplate"
import MinimalTemplate from "./templates/MinimalTemplate"
import ModernATSITTemplate from "../assets/templates/ModernATSITTemplate"

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {
  const renderTemplate = () => {
    switch (template) {
      case "Modern-ATS":
        return <ModernATSITTemplate data={data} accentColor={accentColor} />

      case "professional":
        return <ProfessionalTemplate data={data} accentColor={accentColor} />

      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />

      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />

      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />
    }
  }

  return (
    <section className="w-full bg-slate-100 py-10 flex justify-center">
      <div
        id="resume-preview"
        className={`
          bg-white
          border border-slate-200
          shadow-xl
          rounded-md
          overflow-hidden
          w-full
          max-w-[8.5in]
          print:shadow-none
          print:border-none
          print:rounded-none
          ${classes}
        `}
      >
        {renderTemplate()}
      </div>

      {/* Print Styles (React-safe) */}
      <style>{`
        @page {
          size: letter;
          margin: 0;
        }

        @media print {
          html,
          body {
            width: 8.5in;
            height: 11in;
            background: white;
            overflow: hidden;
          }

          body * {
            visibility: hidden;
          }

          #resume-preview,
          #resume-preview * {
            visibility: visible;
          }

          #resume-preview {
            position: absolute;
            left: 0;
            top: 0;
            width: 8.5in;
            min-height: 11in;
            margin: 0;
            padding: 0;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
          }
        }
      `}</style>
    </section>
  )
}

export default ResumePreview
