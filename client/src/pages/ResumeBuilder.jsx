// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import { dummyResumeData } from '../assets/assets'
// import { ArrowLeftIcon, Briefcase, ChevronLeft, ChevronRight, DownloadIcon, EyeIcon, EyeOffIcon, FileText, FolderIcon, GraduationCap, Share2Icon, Sparkles, User } from 'lucide-react'
// import PersonalInfoForm from '../components/PersonalInfoForm'
// import ResumePreview from '../components/ResumePreview'
// import TemplateSelector from '../components/TemplateSelector'
// import ColorPicker from '../components/ColorPicker'
// import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm'
// import ExperienceForm from '../components/ExperienceForm'
// import EducationForm from '../components/EducationForm'
// import ProjectForm from '../components/ProjectForm'
// import SkillsForm from '../components/SkillsForm'
// import { useSelector } from 'react-redux'
// import api from '../configs/api'
// import toast from 'react-hot-toast'

// const ResumeBuilder = () => {

//   const { resumeId } = useParams()
//   const {token} = useSelector(state => state.auth)

//   const [resumeData, setResumeData] = useState({
//     _id: '',
//     title: '',
//     personal_info: {},
//     professional_summary: "",
//     experience: [],
//     education: [],
//     project: [],
//     skills: [],
//     template: "classic",
//     accent_color: "#3B82F6",
//     public: false,
//   })

//   const loadExistingResume = async () => {
//    try {
//     const {data} = await api.get('/api/resumes/get/' + resumeId, {headers: { Authorization: token }})
//     if(data.resume){
//       setResumeData(data.resume)
//       document.title = data.resume.title;
//     }
//    } catch (error) {
//     console.log(error.message)
//    }
//   }

//   const [activeSectionIndex, setActiveSectionIndex] = useState(0)
//   const [removeBackground, setRemoveBackground] = useState(false);

//   const sections = [
//     { id: "personal", name: "Personal Info", icon: User },
//     { id: "summary", name: "Summary", icon: FileText },
//     { id: "experience", name: "Experience", icon: Briefcase },
//     { id: "education", name: "Education", icon: GraduationCap },
//     { id: "projects", name: "Projects", icon: FolderIcon },
//     { id: "skills", name: "Skills", icon: Sparkles },
//   ]

//   const activeSection = sections[activeSectionIndex]

//   useEffect(()=>{
//     loadExistingResume()
//   },[])

//   const changeResumeVisibility = async () => {
//     try {
//        const formData = new FormData()
//        formData.append("resumeId", resumeId)
//        formData.append("resumeData", JSON.stringify({public: !resumeData.public}))

//        const {data} = await api.put('/api/resumes/update', formData, {headers: { Authorization: token }})

//        setResumeData({...resumeData, public: !resumeData.public})
//        toast.success(data.message)
//     } catch (error) {
//       console.error("Error saving resume:", error)
//     }
//   }

//   const handleShare = () =>{
//     const frontendUrl = window.location.href.split('/app/')[0];
//     const resumeUrl = frontendUrl + '/view/' + resumeId;

//     if(navigator.share){
//       navigator.share({url: resumeUrl, text: "My Resume", })
//     }else{
//       alert('Share not supported on this browser.')
//     }
//   }

//   const downloadResume = ()=>{
//     window.print();
//   }


// const saveResume = async () => {
//   try {
//     let updatedResumeData = structuredClone(resumeData)

//     // remove image from updatedResumeData
//     if(typeof resumeData.personal_info.image === 'object'){
//       delete updatedResumeData.personal_info.image
//     }

//     const formData = new FormData();
//     formData.append("resumeId", resumeId)
//     formData.append('resumeData', JSON.stringify(updatedResumeData))
//     removeBackground && formData.append("removeBackground", "yes");
//     typeof resumeData.personal_info.image === 'object' && formData.append("image", resumeData.personal_info.image)

//     const { data } = await api.put('/api/resumes/update', formData, {headers: { Authorization: token }})

//     setResumeData(data.resume)
//     toast.success(data.message)
//   } catch (error) {
//     console.error("Error saving resume:", error)
//   }
// }

//   return (
//     <div>

//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <Link to={'/app'} className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all'>
//           <ArrowLeftIcon className="size-4"/> Back to Dashboard
//         </Link>
//       </div>

//       <div className='max-w-7xl mx-auto px-4 pb-8'>
//         <div className='grid lg:grid-cols-12 gap-8'>
//           {/* Left Panel - Form */}
//           <div className='relative lg:col-span-5 rounded-lg overflow-hidden'>
//             <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1'>
//               {/* progress bar using activeSectionIndex */}
//               <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200"/>
//               <hr className="absolute top-0 left-0  h-1 bg-gradient-to-r from-green-500 to-green-600 border-none transition-all duration-2000" style={{width: `${activeSectionIndex * 100 / (sections.length - 1)}%`}}/>

//               {/* Section Navigation */}
//               <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">

//                 <div className='flex items-center gap-2'>
//                   <TemplateSelector selectedTemplate={resumeData.template} onChange={(template)=> setResumeData(prev => ({...prev, template}))}/>
//                   <ColorPicker selectedColor={resumeData.accent_color} onChange={(color)=>setResumeData(prev => ({...prev, accent_color: color}))}/>
//                 </div>

//                 <div className='flex items-center'>
//                   {activeSectionIndex !== 0 && (
//                     <button onClick={()=> setActiveSectionIndex((prevIndex)=> Math.max(prevIndex - 1, 0))} className='flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all' disabled={activeSectionIndex === 0}>
//                       <ChevronLeft className="size-4"/> Previous
//                     </button>
//                   )}
//                   <button onClick={()=> setActiveSectionIndex((prevIndex)=> Math.min(prevIndex + 1, sections.length - 1))} className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${activeSectionIndex === sections.length - 1 && 'opacity-50'}`} disabled={activeSectionIndex === sections.length - 1}>
//                       Next <ChevronRight className="size-4"/>
//                     </button>
//                 </div>
//               </div>

//               {/* Form Content */}
//               <div className='space-y-6'>
//                   {activeSection.id === 'personal' && (
//                     <PersonalInfoForm data={resumeData.personal_info} onChange={(data)=>setResumeData(prev => ({...prev, personal_info: data }))} removeBackground={removeBackground} setRemoveBackground={setRemoveBackground} />
//                   )}
//                   {activeSection.id === 'summary' && (
//                     <ProfessionalSummaryForm data={resumeData.professional_summary} onChange={(data)=> setResumeData(prev=> ({...prev, professional_summary: data}))} setResumeData={setResumeData}/>
//                   )}
//                   {activeSection.id === 'experience' && (
//                     <ExperienceForm data={resumeData.experience} onChange={(data)=> setResumeData(prev=> ({...prev, experience: data}))}/>
//                   )}
//                   {activeSection.id === 'education' && (
//                     <EducationForm data={resumeData.education} onChange={(data)=> setResumeData(prev=> ({...prev, education: data}))}/>
//                   )}
//                   {activeSection.id === 'projects' && (
//                     <ProjectForm data={resumeData.project} onChange={(data)=> setResumeData(prev=> ({...prev, project: data}))}/>
//                   )}
//                   {activeSection.id === 'skills' && (
//                     <SkillsForm data={resumeData.skills} onChange={(data)=> setResumeData(prev=> ({...prev, skills: data}))}/>
//                   )}
                  
//               </div>
//               <button onClick={()=> {toast.promise(saveResume, {loading: 'Saving...'})}} className='bg-gradient-to-br from-green-100 to-green-200 ring-green-300 text-green-600 ring hover:ring-green-400 transition-all rounded-md px-6 py-2 mt-6 text-sm'>
//                 Save Changes
//               </button>
//             </div>
//           </div>

//           {/* Right Panel - Preview */}
//           <div className='lg:col-span-7 max-lg:mt-6'>
//               <div className='relative w-full'>
//                 <div className='absolute bottom-3 left-0 right-0 flex items-center justify-end gap-2'>
//                     {resumeData.public && (
//                       <button onClick={handleShare} className='flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-lg ring-blue-300 hover:ring transition-colors'>
//                         <Share2Icon className='size-4'/> Share
//                       </button>
//                     )}
//                     <button onClick={changeResumeVisibility} className='flex items-center p-2 px-4 gap-2 text-xs bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 ring-purple-300 rounded-lg hover:ring transition-colors'>
//                       {resumeData.public ? <EyeIcon className="size-4"/> : <EyeOffIcon className="size-4"/>}
//                       {resumeData.public ? 'Public' : 'Private'}
//                     </button>
//                     <button onClick={downloadResume} className='flex items-center gap-2 px-6 py-2 text-xs bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-lg ring-green-300 hover:ring transition-colors'>
//                       <DownloadIcon className='size-4'/> Download
//                     </button>
//                 </div>
//               </div>

//               <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color}/>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   )
// }

// export default ResumeBuilder











// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import {
//   ArrowLeftIcon,
//   Briefcase,
//   ChevronLeft,
//   ChevronRight,
//   DownloadIcon,
//   EyeIcon,
//   EyeOffIcon,
//   FileText,
//   FolderIcon,
//   GraduationCap,
//   Share2Icon,
//   Sparkles,
//   User,
// } from 'lucide-react'

// import PersonalInfoForm from '../components/PersonalInfoForm'
// import ResumePreview from '../components/ResumePreview'
// import TemplateSelector from '../components/TemplateSelector'
// import ColorPicker from '../components/ColorPicker'
// import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm'
// import ExperienceForm from '../components/ExperienceForm'
// import EducationForm from '../components/EducationForm'
// import ProjectForm from '../components/ProjectForm'
// import SkillsForm from '../components/SkillsForm'

// import { useSelector } from 'react-redux'
// import api from '../configs/api'
// import toast from 'react-hot-toast'

// const ResumeBuilder = () => {
//   const { resumeId } = useParams()
//   const { token } = useSelector(state => state.auth)

//   const [resumeData, setResumeData] = useState({
//     _id: '',
//     title: '',
//     personal_info: {},
//     professional_summary: '',
//     experience: [],
//     education: [],
//     project: [],
//     skills: [],
//     template: 'classic',
//     accent_color: '#3B82F6',
//     public: false,
//   })

//   const [activeSectionIndex, setActiveSectionIndex] = useState(0)
//   const [removeBackground, setRemoveBackground] = useState(false)

//   const sections = [
//     { id: 'personal', name: 'Personal Info', icon: User },
//     { id: 'summary', name: 'Summary', icon: FileText },
//     { id: 'experience', name: 'Experience', icon: Briefcase },
//     { id: 'education', name: 'Education', icon: GraduationCap },
//     { id: 'projects', name: 'Projects', icon: FolderIcon },
//     { id: 'skills', name: 'Skills', icon: Sparkles },
//   ]

//   const activeSection = sections[activeSectionIndex]

//   const loadExistingResume = async () => {
//     try {
//       const { data } = await api.get(`/api/resumes/get/${resumeId}`, {
//         headers: { Authorization: token },
//       })
//       if (data.resume) {
//         setResumeData(data.resume)
//         document.title = data.resume.title
//       }
//     } catch (error) {
//       console.error(error.message)
//     }
//   }

//   useEffect(() => {
//     loadExistingResume()
//   }, [])

//   const saveResume = async () => {
//     try {
//       let updatedResumeData = structuredClone(resumeData)

//       if (typeof resumeData.personal_info.image === 'object') {
//         delete updatedResumeData.personal_info.image
//       }

//       const formData = new FormData()
//       formData.append('resumeId', resumeId)
//       formData.append('resumeData', JSON.stringify(updatedResumeData))

//       removeBackground && formData.append('removeBackground', 'yes')
//       typeof resumeData.personal_info.image === 'object' &&
//         formData.append('image', resumeData.personal_info.image)

//       const { data } = await api.put('/api/resumes/update', formData, {
//         headers: { Authorization: token },
//       })

//       setResumeData(data.resume)
//       toast.success(data.message)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const changeResumeVisibility = async () => {
//     try {
//       const formData = new FormData()
//       formData.append('resumeId', resumeId)
//       formData.append(
//         'resumeData',
//         JSON.stringify({ public: !resumeData.public })
//       )

//       const { data } = await api.put('/api/resumes/update', formData, {
//         headers: { Authorization: token },
//       })

//       setResumeData(prev => ({ ...prev, public: !prev.public }))
//       toast.success(data.message)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const handleShare = () => {
//     const frontendUrl = window.location.href.split('/app/')[0]
//     const resumeUrl = `${frontendUrl}/view/${resumeId}`

//     navigator.share
//       ? navigator.share({ url: resumeUrl, text: 'My Resume' })
//       : alert('Share not supported')
//   }

//   const downloadResume = () => window.print()

//   return (
//     <div>
//       {/* Back */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <Link
//           to="/app"
//           className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition"
//         >
//           <ArrowLeftIcon className="size-4" /> Back to Dashboard
//         </Link>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 pb-8">
//         <div className="grid lg:grid-cols-12 gap-8">
//           {/* LEFT PANEL */}
//           <div className="lg:col-span-5">
//             <div className="bg-white rounded-lg shadow-sm border p-6 relative">
//               {/* Progress */}
//               <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full" />
//               <div
//                 className="absolute top-0 left-0 h-1 bg-green-500 transition-all"
//                 style={{
//                   width: `${(activeSectionIndex * 100) /
//                     (sections.length - 1)}%`,
//                 }}
//               />

//               {/* Header */}
//               <div className="flex justify-between items-center border-b py-2 mb-6">
//                 <div className="flex gap-2">
//                   <TemplateSelector
//                     selectedTemplate={resumeData.template}
//                     onChange={template =>
//                       setResumeData(prev => ({ ...prev, template }))
//                     }
//                   />
//                   <ColorPicker
//                     selectedColor={resumeData.accent_color}
//                     onChange={color =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         accent_color: color,
//                       }))
//                     }
//                   />
//                 </div>

//                 {/* Navigation */}
//                 <div className="flex items-center gap-2">
//                   <button
//                     disabled={activeSectionIndex === 0}
//                     onClick={() =>
//                       setActiveSectionIndex(i => Math.max(i - 1, 0))
//                     }
//                     className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-40"
//                   >
//                     <ChevronLeft className="size-4" />
//                     Previous
//                   </button>

//                   <button
//                     disabled={activeSectionIndex === sections.length - 1}
//                     onClick={() =>
//                       setActiveSectionIndex(i =>
//                         Math.min(i + 1, sections.length - 1)
//                       )
//                     }
//                     className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg disabled:opacity-40"
//                   >
//                     Next
//                     <ChevronRight className="size-4" />
//                   </button>
//                 </div>
//               </div>

//               {/* Forms */}
//               <div className="space-y-6">
//                 {activeSection.id === 'personal' && (
//                   <PersonalInfoForm
//                     data={resumeData.personal_info}
//                     onChange={data =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         personal_info: data,
//                       }))
//                     }
//                     removeBackground={removeBackground}
//                     setRemoveBackground={setRemoveBackground}
//                   />
//                 )}

//                 {activeSection.id === 'summary' && (
//                   <ProfessionalSummaryForm
//                     data={resumeData.professional_summary}
//                     onChange={data =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         professional_summary: data,
//                       }))
//                     }
//                     setResumeData={setResumeData}
//                   />
//                 )}

//                 {activeSection.id === 'experience' && (
//                   <ExperienceForm
//                     data={resumeData.experience}
//                     onChange={data =>
//                       setResumeData(prev => ({ ...prev, experience: data }))
//                     }
//                   />
//                 )}

//                 {activeSection.id === 'education' && (
//                   <EducationForm
//                     data={resumeData.education}
//                     onChange={data =>
//                       setResumeData(prev => ({ ...prev, education: data }))
//                     }
//                   />
//                 )}

//                 {activeSection.id === 'projects' && (
//                   <ProjectForm
//                     data={resumeData.project}
//                     onChange={data =>
//                       setResumeData(prev => ({ ...prev, project: data }))
//                     }
//                   />
//                 )}

//                 {activeSection.id === 'skills' && (
//                   <SkillsForm
//                     data={resumeData.skills}
//                     onChange={data =>
//                       setResumeData(prev => ({ ...prev, skills: data }))
//                     }
//                   />
//                 )}
//               </div>

//               <button
//                 onClick={() => toast.promise(saveResume, { loading: 'Saving...' })}
//                 className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
//               >
//                 Save Changes
//               </button>
//             </div>
//           </div>

//           {/* RIGHT PANEL */}
//           <div className="lg:col-span-7">
//             <div className="flex justify-end gap-2 mb-3">
//               {resumeData.public && (
//                 <button
//                   onClick={handleShare}
//                   className="px-4 py-2 text-xs bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200"
//                 >
//                   <Share2Icon className="size-4 inline mr-1" /> Share
//                 </button>
//               )}

//               <button
//                 onClick={changeResumeVisibility}
//                 className="px-4 py-2 text-xs bg-purple-100 text-purple-600 rounded-lg hover:bg-purple-200"
//               >
//                 {resumeData.public ? (
//                   <EyeIcon className="size-4 inline mr-1" />
//                 ) : (
//                   <EyeOffIcon className="size-4 inline mr-1" />
//                 )}
//                 {resumeData.public ? 'Public' : 'Private'}
//               </button>

//               {/* PREMIUM DOWNLOAD */}
//               <button
//                 onClick={downloadResume}
//                 className="group flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow hover:shadow-md active:scale-95 transition-all"
//               >
//                 <DownloadIcon className="size-4 group-hover:translate-y-0.5 transition-transform" />
//                 Download PDF
//               </button>
//             </div>

//             <ResumePreview
//               data={resumeData}
//               template={resumeData.template}
//               accentColor={resumeData.accent_color}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ResumeBuilder




// import React, { useEffect, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import {
//   ArrowLeftIcon,
//   Briefcase,
//   ChevronLeft,
//   ChevronRight,
//   DownloadIcon,
//   EyeIcon,
//   EyeOffIcon,
//   FileText,
//   FolderIcon,
//   GraduationCap,
//   Share2Icon,
//   Sparkles,
//   User,
// } from 'lucide-react'

// import PersonalInfoForm from '../components/PersonalInfoForm'
// import ResumePreview from '../components/ResumePreview'
// import TemplateSelector from '../components/TemplateSelector'
// import ColorPicker from '../components/ColorPicker'
// import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm'
// import ExperienceForm from '../components/ExperienceForm'
// import EducationForm from '../components/EducationForm'
// import ProjectForm from '../components/ProjectForm'
// import SkillsForm from '../components/SkillsForm'

// import { useSelector } from 'react-redux'
// import api from '../configs/api'
// import toast from 'react-hot-toast'

// const ResumeBuilder = () => {
//   const { resumeId } = useParams()
//   const { token } = useSelector(state => state.auth)

//   const [resumeData, setResumeData] = useState({
//     _id: '',
//     title: '',
//     personal_info: {},
//     professional_summary: '',
//     experience: [],
//     education: [],
//     project: [],
//     skills: [],
//     template: 'classic',
//     accent_color: '#3B82F6',
//     public: false,
//   })

//   const [activeSectionIndex, setActiveSectionIndex] = useState(0)
//   const [removeBackground, setRemoveBackground] = useState(false)

//   const sections = [
//     { id: 'personal', name: 'Personal Info', icon: User },
//     { id: 'summary', name: 'Summary', icon: FileText },
//     { id: 'experience', name: 'Experience', icon: Briefcase },
//     { id: 'education', name: 'Education', icon: GraduationCap },
//     { id: 'projects', name: 'Projects', icon: FolderIcon },
//     { id: 'skills', name: 'Skills', icon: Sparkles },
//   ]

//   const activeSection = sections[activeSectionIndex]

//   const loadExistingResume = async () => {
//     try {
//       const { data } = await api.get(`/api/resumes/get/${resumeId}`, {
//         headers: { Authorization: token },
//       })
//       if (data.resume) {
//         setResumeData(data.resume)
//         document.title = data.resume.title
//       }
//     } catch (error) {
//       console.error(error.message)
//     }
//   }

//   useEffect(() => {
//     loadExistingResume()
//   }, [])

//   const saveResume = async () => {
//     try {
//       let updatedResumeData = structuredClone(resumeData)

//       if (typeof resumeData.personal_info.image === 'object') {
//         delete updatedResumeData.personal_info.image
//       }

//       const formData = new FormData()
//       formData.append('resumeId', resumeId)
//       formData.append('resumeData', JSON.stringify(updatedResumeData))

//       removeBackground && formData.append('removeBackground', 'yes')
//       typeof resumeData.personal_info.image === 'object' &&
//         formData.append('image', resumeData.personal_info.image)

//       const { data } = await api.put('/api/resumes/update', formData, {
//         headers: { Authorization: token },
//       })

//       setResumeData(data.resume)
//       toast.success(data.message)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const downloadResume = () => window.print()

//   return (
//     <div>
//       {/* Back */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <Link
//           to="/app"
//           className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition"
//         >
//           <ArrowLeftIcon className="size-4" />
//           Back to Dashboard
//         </Link>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 pb-8">
//         <div className="grid lg:grid-cols-12 gap-8">

//           {/* LEFT PANEL */}
//           <div className="lg:col-span-5">
//             <div className="bg-white rounded-xl shadow-sm border p-6">

//               {/* Top tools */}
//               <div className="flex justify-between items-center border-b pb-4 mb-6">
//                 <div className="flex gap-2">
//                   <TemplateSelector
//                     selectedTemplate={resumeData.template}
//                     onChange={template =>
//                       setResumeData(prev => ({ ...prev, template }))
//                     }
//                   />
//                   <ColorPicker
//                     selectedColor={resumeData.accent_color}
//                     onChange={color =>
//                       setResumeData(prev => ({ ...prev, accent_color: color }))
//                     }
//                   />
//                 </div>

//                 <span className="text-sm text-gray-500">
//                   Step {activeSectionIndex + 1} of {sections.length}
//                 </span>
//               </div>

//               {/* Forms */}
//               <div className="space-y-6">
//                 {activeSection.id === 'personal' && (
//                   <PersonalInfoForm
//                     data={resumeData.personal_info}
//                     onChange={data =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         personal_info: data,
//                       }))
//                     }
//                     removeBackground={removeBackground}
//                     setRemoveBackground={setRemoveBackground}
//                   />
//                 )}

//                 {activeSection.id === 'summary' && (
//                   <ProfessionalSummaryForm
//                     data={resumeData.professional_summary}
//                     onChange={data =>
//                       setResumeData(prev => ({
//                         ...prev,
//                         professional_summary: data,
//                       }))
//                     }
//                   />
//                 )}

//                 {activeSection.id === 'experience' && (
//                   <ExperienceForm
//                     data={resumeData.experience}
//                     onChange={data =>
//                       setResumeData(prev => ({ ...prev, experience: data }))
//                     }
//                   />
//                 )}

//                 {activeSection.id === 'education' && (
//                   <EducationForm
//                     data={resumeData.education}
//                     onChange={data =>
//                       setResumeData(prev => ({ ...prev, education: data }))
//                     }
//                   />
//                 )}

//                 {activeSection.id === 'projects' && (
//                   <ProjectForm
//                     data={resumeData.project}
//                     onChange={data =>
//                       setResumeData(prev => ({ ...prev, project: data }))
//                     }
//                   />
//                 )}

//                 {activeSection.id === 'skills' && (
//                   <SkillsForm
//                     data={resumeData.skills}
//                     onChange={data =>
//                       setResumeData(prev => ({ ...prev, skills: data }))
//                     }
//                   />
//                 )}
//               </div>

//               {/* ACTION BAR */}
//               <div className="mt-8 flex items-center justify-between gap-3 border-t pt-5">

//                 {/* Previous */}
//                 <button
//                   disabled={activeSectionIndex === 0}
//                   onClick={() =>
//                     setActiveSectionIndex(i => Math.max(i - 1, 0))
//                   }
//                   className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg border text-gray-600 hover:bg-gray-50 disabled:opacity-40"
//                 >
//                   <ChevronLeft className="size-4" />
//                   Previous Step
//                 </button>

//                 {/* Save */}
//                 <button
//                   onClick={() =>
//                     toast.promise(saveResume, { loading: 'Saving changes...' })
//                   }
//                   className="px-6 py-2.5 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 shadow-sm transition"
//                 >
//                   Save Changes
//                 </button>

//                 {/* Next */}
//                 <button
//                   disabled={activeSectionIndex === sections.length - 1}
//                   onClick={() =>
//                     setActiveSectionIndex(i =>
//                       Math.min(i + 1, sections.length - 1)
//                     )
//                   }
//                   className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40"
//                 >
//                   Next Step
//                   <ChevronRight className="size-4" />
//                 </button>

//               </div>
//             </div>
//           </div>

//           {/* RIGHT PANEL */}
//           <div className="lg:col-span-7">
//             <div className="flex justify-end mb-4">
//               <button
//                 onClick={downloadResume}
//                 className="group flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-br from-green-500 to-green-600 text-white font-medium hover:from-green-600 hover:to-green-700 shadow transition-all"
//               >
//                 <DownloadIcon className="size-4 group-hover:translate-y-0.5 transition-transform" />
//                 Download PDF
//               </button>
//             </div>

//             <ResumePreview
//               data={resumeData}
//               template={resumeData.template}
//               accentColor={resumeData.accent_color}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ResumeBuilder


import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeftIcon,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  DownloadIcon,
  EyeIcon,
  EyeOffIcon,
  FileText,
  FolderIcon,
  GraduationCap,
  Share2Icon,
  Sparkles,
  User,
} from 'lucide-react'

import PersonalInfoForm from '../components/PersonalInfoForm'
import ResumePreview from '../components/ResumePreview'
import TemplateSelector from '../components/TemplateSelector'
import ColorPicker from '../components/ColorPicker'
import ProfessionalSummaryForm from '../components/ProfessionalSummaryForm'
import ExperienceForm from '../components/ExperienceForm'
import EducationForm from '../components/EducationForm'
import ProjectForm from '../components/ProjectForm'
import SkillsForm from '../components/SkillsForm'

import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'

const ResumeBuilder = () => {
  const { resumeId } = useParams()
  const { token } = useSelector(state => state.auth)

  const [resumeData, setResumeData] = useState({
    _id: '',
    title: '',
    personal_info: {},
    professional_summary: '',
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: 'classic',
    accent_color: '#3B82F6',
    public: false,
  })

  const [activeSectionIndex, setActiveSectionIndex] = useState(0)
  const [removeBackground, setRemoveBackground] = useState(false)

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: User },
    { id: 'summary', name: 'Summary', icon: FileText },
    { id: 'experience', name: 'Experience', icon: Briefcase },
    { id: 'education', name: 'Education', icon: GraduationCap },
    { id: 'projects', name: 'Projects', icon: FolderIcon },
    { id: 'skills', name: 'Skills', icon: Sparkles },
  ]

  const activeSection = sections[activeSectionIndex]

  const loadExistingResume = async () => {
    try {
      const { data } = await api.get(`/api/resumes/get/${resumeId}`, {
        headers: { Authorization: token },
      })
      if (data.resume) {
        setResumeData(data.resume)
        document.title = data.resume.title
      }
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    loadExistingResume()
  }, [])

  const saveResume = async () => {
    try {
      let updatedResumeData = structuredClone(resumeData)

      if (typeof resumeData.personal_info.image === 'object') {
        delete updatedResumeData.personal_info.image
      }

      const formData = new FormData()
      formData.append('resumeId', resumeId)
      formData.append('resumeData', JSON.stringify(updatedResumeData))

      removeBackground && formData.append('removeBackground', 'yes')
      typeof resumeData.personal_info.image === 'object' &&
        formData.append('image', resumeData.personal_info.image)

      const { data } = await api.put('/api/resumes/update', formData, {
        headers: { Authorization: token },
      })

      setResumeData(data.resume)
      toast.success(data.message)
    } catch (error) {
      console.error(error)
    }
  }

  const changeResumeVisibility = async () => {
    try {
      const formData = new FormData()
      formData.append('resumeId', resumeId)
      formData.append(
        'resumeData',
        JSON.stringify({ public: !resumeData.public })
      )

      const { data } = await api.put('/api/resumes/update', formData, {
        headers: { Authorization: token },
      })

      setResumeData(prev => ({ ...prev, public: !prev.public }))
      toast.success(data.message)
    } catch (error) {
      console.error(error)
    }
  }

  const handleShare = () => {
    const frontendUrl = window.location.href.split('/app/')[0]
    const resumeUrl = `${frontendUrl}/view/${resumeId}`
    navigator.share
      ? navigator.share({ url: resumeUrl, text: 'My Resume' })
      : alert('Share not supported')
  }

  const downloadResume = () => window.print()

  return (
    <div>
      {/* BACK */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <Link
          to="/app"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-700 transition"
        >
          <ArrowLeftIcon className="size-4" />
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* LEFT PANEL */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-lg shadow-sm border p-6 relative">
              {/* PROGRESS */}
              <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full" />
              <div
                className="absolute top-0 left-0 h-1 bg-blue-600 transition-all"
                style={{
                  width: `${(activeSectionIndex * 100) /
                    (sections.length - 1)}%`,
                }}
              />

              {/* HEADER */}
              <div className="flex justify-between items-center border-b py-2 mb-6">
                <div className="flex gap-2">
                  <TemplateSelector
                    selectedTemplate={resumeData.template}
                    onChange={template =>
                      setResumeData(prev => ({ ...prev, template }))
                    }
                  />
                  <ColorPicker
                    selectedColor={resumeData.accent_color}
                    onChange={color =>
                      setResumeData(prev => ({
                        ...prev,
                        accent_color: color,
                      }))
                    }
                  />
                </div>
              </div>

              {/* FORM CONTENT */}
              <div className="space-y-6">
                {activeSection.id === 'personal' && (
                  <PersonalInfoForm
                    data={resumeData.personal_info}
                    onChange={data =>
                      setResumeData(prev => ({
                        ...prev,
                        personal_info: data,
                      }))
                    }
                    removeBackground={removeBackground}
                    setRemoveBackground={setRemoveBackground}
                  />
                )}

                {activeSection.id === 'summary' && (
                  <ProfessionalSummaryForm
                    data={resumeData.professional_summary}
                    onChange={data =>
                      setResumeData(prev => ({
                        ...prev,
                        professional_summary: data,
                      }))
                    }
                    setResumeData={setResumeData}
                  />
                )}

                {activeSection.id === 'experience' && (
                  <ExperienceForm
                    data={resumeData.experience}
                    onChange={data =>
                      setResumeData(prev => ({ ...prev, experience: data }))
                    }
                  />
                )}

                {activeSection.id === 'education' && (
                  <EducationForm
                    data={resumeData.education}
                    onChange={data =>
                      setResumeData(prev => ({ ...prev, education: data }))
                    }
                  />
                )}

                {activeSection.id === 'projects' && (
                  <ProjectForm
                    data={resumeData.project}
                    onChange={data =>
                      setResumeData(prev => ({ ...prev, project: data }))
                    }
                  />
                )}

                {activeSection.id === 'skills' && (
                  <SkillsForm
                    data={resumeData.skills}
                    onChange={data =>
                      setResumeData(prev => ({ ...prev, skills: data }))
                    }
                  />
                )}
              </div>

              {/* ACTION BAR */}
              <div className="mt-8 flex items-center justify-between gap-3 border-t pt-4">
                <button
                  disabled={activeSectionIndex === 0}
                  onClick={() =>
                    setActiveSectionIndex(i => Math.max(i - 1, 0))
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md border 
                             text-gray-600 hover:bg-gray-50 disabled:opacity-40 transition"
                >
                  <ChevronLeft className="size-3.5" />
                  Previous
                </button>

                <button
                  onClick={() =>
                    toast.promise(saveResume, {
                      loading: 'Saving changes...',
                    })
                  }
                  className="px-4 py-1.5 text-xs font-medium rounded-md 
                             bg-blue-600 text-white hover:bg-blue-700 
                             shadow-sm transition"
                >
                  Save Changes
                </button>

                <button
                  disabled={activeSectionIndex === sections.length - 1}
                  onClick={() =>
                    setActiveSectionIndex(i =>
                      Math.min(i + 1, sections.length - 1)
                    )
                  }
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs rounded-md 
                             bg-slate-800 text-white hover:bg-slate-900 
                             disabled:opacity-40 transition"
                >
                  Next
                  <ChevronRight className="size-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="lg:col-span-7">
            <div className="flex justify-end gap-2 mb-3">
              {resumeData.public && (
                <button
                  onClick={handleShare}
                  className="px-3 py-1.5 text-xs rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition"
                >
                  <Share2Icon className="size-3.5 inline mr-1" />
                  Share
                </button>
              )}

              <button
                onClick={changeResumeVisibility}
                className="px-3 py-1.5 text-xs rounded-md bg-purple-100 text-purple-600 hover:bg-purple-200 transition"
              >
                {resumeData.public ? (
                  <EyeIcon className="size-3.5 inline mr-1" />
                ) : (
                  <EyeOffIcon className="size-3.5 inline mr-1" />
                )}
                {resumeData.public ? 'Public' : 'Private'}
              </button>

              <button
                onClick={downloadResume}
                className="group flex items-center gap-1.5 px-4 py-1.5 text-xs font-medium rounded-md
                           bg-green-600 text-white hover:bg-green-700
                           shadow-sm hover:shadow transition-all"
              >
                <DownloadIcon className="size-3.5 group-hover:translate-y-0.5 transition-transform" />
                Download PDF
              </button>
            </div>

            <ResumePreview
              data={resumeData}
              template={resumeData.template}
              accentColor={resumeData.accent_color}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder
