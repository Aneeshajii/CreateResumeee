// import { Loader2, Sparkles } from 'lucide-react'
// import React, { useState } from 'react'
// import { useSelector } from 'react-redux'
// import api from '../configs/api'
// import toast from 'react-hot-toast'

// const ProfessionalSummaryForm = ({data, onChange, setResumeData}) => {

//   const { token } = useSelector(state => state.auth)
//   const [isGenerating, setIsGenerating] = useState(false)

//   const generateSummary = async () => {
//     try {
//       setIsGenerating(true)
//       const prompt = `enhance my professional summary "${data}"`;
//       const response = await api.post('/api/ai/enhance-pro-sum', {userContent: prompt}, {headers: { Authorization: token }})
//       setResumeData(prev => ({...prev, professional_summary: response.data.enhancedContent}))
//     } catch (error) {
//       toast.error(error?.response?.data?.message || error.message)
//     }
//     finally{
//       setIsGenerating(false)
//     }
//   }

//   return (
//     <div className='space-y-4'>
//       <div className='flex items-center justify-between'>
//         <div>
//             <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'> Professional Summary </h3>
//             <p className='text-sm text-gray-500'>Add summary for your resume here</p>
//         </div>
//         <button disabled={isGenerating} onClick={generateSummary} className='flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50'>
//           {isGenerating ? (<Loader2 className="size-4 animate-spin"/>) : ( <Sparkles className="size-4"/>)}
//            {isGenerating ? "Enhancing..." : "AI Enhance"}
            
//         </button>
//       </div>

//       <div className="mt-6">
//         <textarea value={data || ""} onChange={(e)=> onChange(e.target.value)} rows={7} className='w-full p-3 px-4 mt-2 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none' placeholder='Write a compelling professional summary that highlights your key strengths and career objectives...' />
//         <p className='text-xs text-gray-500 max-w-4/5 mx-auto text-center'>Tip: Keep it concise (3-4 sentences) and focus on your most relevant achievements and skills.</p>
//       </div>
//     </div>
//   )
// }

// export default ProfessionalSummaryForm





import { Loader2, Sparkles } from "lucide-react"
import React, { useState } from "react"
import { useSelector } from "react-redux"
import api from "../configs/api"
import toast from "react-hot-toast"

const ProfessionalSummaryForm = ({ data, onChange, setResumeData }) => {
  const { token } = useSelector((state) => state.auth)
  const [isGenerating, setIsGenerating] = useState(false)

  const generateSummary = async () => {
    try {
      setIsGenerating(true)
      const prompt = `Enhance and professionally rewrite this resume summary:\n"${data}"`
      const response = await api.post(
        "/api/ai/enhance-pro-sum",
        { userContent: prompt },
        { headers: { Authorization: token } }
      )

      setResumeData((prev) => ({
        ...prev,
        professional_summary: response.data.enhancedContent
      }))
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    } finally {
      setIsGenerating(false)
    }
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
            Professional Summary
          </h3>
          <p className="mt-1 text-sm text-gray-500 max-w-xl">
            A concise overview of your experience, strengths, and career focus.
            This section is highly visible to recruiters.
          </p>
        </div>

        <button
          disabled={isGenerating}
          onClick={generateSummary}
          className="
            inline-flex items-center gap-2
            rounded-full border border-gray-300
            px-5 py-2
            text-sm font-medium
            text-gray-700
            bg-white
            hover:bg-gray-50
            hover:border-blue-600
            hover:text-blue-600
            transition
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          {isGenerating ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            <Sparkles className="size-4" />
          )}
          {isGenerating ? "Enhancing…" : "AI Enhance"}
        </button>
      </div>

      {/* Textarea */}
      <div className="relative">
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={6}
          placeholder="Example: Results-driven software developer with 3+ years of experience building scalable web applications…"
          className="
            w-full resize-none
            rounded-xl border border-gray-300
            bg-white
            px-5 py-4
            text-sm text-gray-900
            leading-relaxed
            focus:outline-none
            focus:ring-2 focus:ring-blue-600
            focus:border-blue-600
            transition
          "
        />

        <div className="mt-3 flex justify-between text-xs text-gray-500">
          <span>Recommended: 3–4 impactful sentences</span>
          <span>{data?.length || 0} characters</span>
        </div>
      </div>
    </section>
  )
}

export default ProfessionalSummaryForm
