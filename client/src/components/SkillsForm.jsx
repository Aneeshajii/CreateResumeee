// import { Plus, Sparkles, X } from 'lucide-react'
// import React, { useState } from 'react'

// const SkillsForm = ({ data, onChange }) => {
//     const [newSkill, setNewSkill] = useState("")

//      const addSkill = () => {
//         if(newSkill.trim() && !data.includes(newSkill.trim())){
//             onChange([...data, newSkill.trim()])
//             setNewSkill("")
//         }
//      }

//       const removeSkill = (indexToRemove)=>{
//         onChange(data.filter((_, index)=> index !== indexToRemove))
//       }

//       const handleKeyPress = (e)=>{
//         if(e.key === "Enter"){
//             e.preventDefault();
//             addSkill();
//         }
//       }
//   return (
//     <div className='space-y-4'>
//       <div>
//         <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'> Skills </h3>
//         <p className='text-sm text-gray-500'> Add your technical and soft skills </p>
//       </div>

//       <div className="flex gap-2">
//             <input type="text" placeholder="Enter a skill (e.g., JavaScript, Project Management)" className='flex-1 px-3 py-2 text-sm'
//             onChange={(e)=>setNewSkill(e.target.value)}
//             value={newSkill}
//             onKeyDown={handleKeyPress}
//             />
//             <button onClick={addSkill} disabled={!newSkill.trim} className='flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed'>
//                 <Plus className="size-4"/> Add
//             </button>
//       </div>

//       {data.length > 0 ? (
//         <div className='flex flex-wrap gap-2'>
//             {data.map((skill, index)=>(
//                 <span key={index} className='flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
//                     {skill}
//                     <button onClick={()=> removeSkill(index)} className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors">
//                         <X className="w-3 h-3" />
//                     </button>
//                 </span>
//             ))}
//         </div>
//       )
//     :
//     (
//         <div className='text-center py-6 text-gray-500'>
//             <Sparkles className="w-10 h-10 mx-auto mb-2 text-gray-300"/>
//             <p>No skills added yet.</p>
//             <p className="text-sm">Add your technical and soft skills above.</p>
//         </div>
//     )}

//     <div className='bg-blue-50 p-3 rounded-lg'>
//         <p className='text-sm text-blue-800'><strong>Tip:</strong> Add 8-12 relevant skills. Include both technical skills (programming languages, tools) and soft skills (leadership, communication).</p>
//     </div>
//     </div>
//   )
// }

// export default SkillsForm


import { Plus, Sparkles, X } from "lucide-react"
import React, { useState } from "react"

const SkillsForm = ({ data = [], onChange }) => {
  const [newSkill, setNewSkill] = useState("")

  const addSkill = () => {
    const skill = newSkill.trim()
    if (skill && !data.includes(skill)) {
      onChange([...data, skill])
      setNewSkill("")
    }
  }

  const removeSkill = (indexToRemove) => {
    onChange(data.filter((_, index) => index !== indexToRemove))
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addSkill()
    }
  }

  return (
    <section className="space-y-6">
      {/* Header */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Skills
        </h3>
        <p className="text-sm text-gray-500">
          Highlight your technical and soft skills
        </p>
      </div>

      {/* Input */}
      <div className="flex gap-3">
        <input
          type="text"
          placeholder="e.g. JavaScript, React, Team Leadership"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
        />

        <button
          onClick={addSkill}
          disabled={!newSkill.trim()}
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-800 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {/* Skills List */}
      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((skill, index) => (
            <span
              key={index}
              className="group inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-800 border border-blue-100 shadow-sm hover:bg-blue-100 transition"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="rounded-full p-1 text-blue-600 hover:bg-blue-200 transition"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-xl border border-dashed border-gray-300 bg-gray-50 py-8 text-center">
          <Sparkles className="mx-auto mb-3 h-10 w-10 text-gray-300" />
          <p className="text-sm font-medium text-gray-600">
            No skills added yet
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Start adding your key skills above
          </p>
        </div>
      )}

      {/* Tip */}
      <div className="rounded-xl bg-blue-50 border border-blue-100 p-4">
        <p className="text-sm text-blue-900">
          <strong>Pro tip:</strong> Add 8–12 relevant skills. Balance technical
          tools with soft skills like leadership and communication.
        </p>
      </div>
    </section>
  )
}

export default SkillsForm
