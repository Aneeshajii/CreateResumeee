// import { Plus, Trash2 } from 'lucide-react';
// import React from 'react'

// const ProjectForm = ({ data, onChange }) => {

// const addProject = () =>{
//     const newProject = {
//         name: "",
//         type: "",
//         description: "",
//     };
//     onChange([...data, newProject])
// }

// const removeProject = (index)=>{
//     const updated = data.filter((_, i)=> i !== index);
//     onChange(updated)
// }

// const updateProject = (index, field, value)=>{
//     const updated = [...data];
//     updated[index] = {...updated[index], [field]: value}
//     onChange(updated)
// }

//   return (
//     <div>
//       <div className='flex items-center justify-between'>
//         <div>
//             <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'> Projects </h3>
//             <p className='text-sm text-gray-500'>Add your projects</p>
//         </div>
//         <button onClick={addProject} className='flex items-center gap-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors'>
//             <Plus className="size-4"/>
//             Add Project
//         </button>
//       </div>

      
//         <div className='space-y-4 mt-6'>
//             {data.map((project, index)=>(
//                 <div key={index} className="p-4 border border-gray-200 rounded-lg space-y-3">
//                     <div className='flex justify-between items-start'>
//                         <h4>Project #{index + 1}</h4>
//                         <button onClick={()=> removeProject(index)} className='text-red-500 hover:text-red-700 transition-colors'>
//                             <Trash2 className="size-4"/>
//                         </button>
//                     </div>

//                     <div className='grid gap-3'>

//                         <input value={project.name || ""} onChange={(e)=>updateProject(index, "name", e.target.value)} type="text" placeholder="Project Name" className="px-3 py-2 text-sm rounded-lg"/>

//                         <input value={project.type || ""} onChange={(e)=>updateProject(index, "type", e.target.value)} type="text" placeholder="Project Type" className="px-3 py-2 text-sm rounded-lg"/>

//                         <textarea rows={4} value={project.description || ""} onChange={(e)=>updateProject(index, "description", e.target.value)} placeholder="Describe your project..." className="w-full px-3 py-2 text-sm rounded-lg resize-none"/>
            
//                     </div>


//                 </div>
//             ))}
//         </div>
     
//     </div>
//   )
// }

// export default ProjectForm


import { Plus, Trash2 } from "lucide-react"
import React from "react"

const ProjectForm = ({ data, onChange }) => {

  const addProject = () => {
    onChange([
      ...data,
      { name: "", type: "", description: "" }
    ])
  }

  const removeProject = (index) => {
    onChange(data.filter((_, i) => i !== index))
  }

  const updateProject = (index, field, value) => {
    const updated = [...data]
    updated[index] = { ...updated[index], [field]: value }
    onChange(updated)
  }

  return (
    <section
      className="
        rounded-2xl border border-gray-200
        bg-white shadow-sm
        px-8 py-7
        max-w-5xl
      "
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
            Projects
          </h3>
          <p className="mt-1 text-sm text-gray-500 max-w-xl">
            Showcase real-world projects that demonstrate your skills and impact.
          </p>
        </div>

        <button
          onClick={addProject}
          className="
            inline-flex items-center gap-2
            rounded-full border border-gray-300
            px-5 py-2
            text-sm font-medium
            text-gray-700 bg-white
            hover:bg-gray-50
            hover:border-blue-600
            hover:text-blue-600
            transition
          "
        >
          <Plus className="size-4" />
          Add Project
        </button>
      </div>

      {/* Projects */}
      <div className="space-y-6">
        {data.map((project, index) => (
          <div
            key={index}
            className="
              rounded-xl border border-gray-200
              bg-gray-50/50
              p-6
              space-y-5
              transition
              hover:shadow-sm
            "
          >
            {/* Card Header */}
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-gray-800">
                Project {index + 1}
              </h4>

              <button
                onClick={() => removeProject(index)}
                className="
                  text-gray-400
                  hover:text-red-600
                  transition
                "
                title="Remove project"
              >
                <Trash2 className="size-4" />
              </button>
            </div>

            {/* Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                value={project.name || ""}
                onChange={(e) =>
                  updateProject(index, "name", e.target.value)
                }
                placeholder="Project Name"
                className="
                  w-full rounded-lg
                  border border-gray-300
                  bg-white
                  px-4 py-2.5
                  text-sm text-gray-900
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-600
                  focus:border-blue-600
                  transition
                "
              />

              <input
                type="text"
                value={project.type || ""}
                onChange={(e) =>
                  updateProject(index, "type", e.target.value)
                }
                placeholder="Project Type(Web App, Mobile App, API, etc.)"
                className="
                  w-full rounded-lg
                  border border-gray-300
                  bg-white
                  px-4 py-2.5
                  text-sm text-gray-900
                  focus:outline-none
                  focus:ring-2 focus:ring-blue-600
                  focus:border-blue-600
                  transition
                "
              />
            </div>

            <textarea
              rows={4}
              value={project.description || ""}
              onChange={(e) =>
                updateProject(index, "description", e.target.value)
              }
              placeholder="Briefly describe the project, technologies used, and your contribution…"
              className="
                w-full resize-none
                rounded-xl
                border border-gray-300
                bg-white
                px-4 py-3
                text-sm text-gray-900
                leading-relaxed
                focus:outline-none
                focus:ring-2 focus:ring-blue-600
                focus:border-blue-600
                transition
              "
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectForm
