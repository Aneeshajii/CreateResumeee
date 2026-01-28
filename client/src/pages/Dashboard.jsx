import {
  FilePenLineIcon,
  LoaderCircleIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloud,
  UploadCloudIcon,
  XIcon
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import api from '../configs/api'
import toast from 'react-hot-toast'
import pdfToText from 'react-pdftotext'

const Dashboard = () => {

  const { token } = useSelector(state => state.auth)

  const colors = ["#2563eb", "#0f766e", "#334155", "#1e40af", "#0369a1"]

  const [allResumes, setAllResumes] = useState([])
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [resume, setResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get('/api/users/resumes', {
        headers: { Authorization: token }
      })
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    loadAllResumes()
  }, [])

  const createResume = async (e) => {
    e.preventDefault()
    try {
      const { data } = await api.post(
        '/api/resumes/create',
        { title },
        { headers: { Authorization: token } }
      )
      navigate(`/app/builder/${data.resume._id}`)
      setShowCreateResume(false)
      setTitle('')
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  const uploadResume = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const resumeText = await pdfToText(resume)
      const { data } = await api.post(
        '/api/ai/upload-resume',
        { title, resumeText },
        { headers: { Authorization: token } }
      )
      navigate(`/app/builder/${data.resumeId}`)
      setShowUploadResume(false)
      setTitle('')
      setResume(null)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  }

  const deleteResume = async (id) => {
    if (!window.confirm('Delete this resume?')) return
    try {
      await api.delete(`/api/resumes/delete/${id}`, {
        headers: { Authorization: token }
      })
      setAllResumes(allResumes.filter(r => r._id !== id))
      toast.success('Resume deleted')
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <h1 className="text-3xl font-bold text-slate-900 mb-8">
          Create Resume
        </h1>

        {/* CREATE / UPLOAD */}
        <div className="flex gap-4 mb-10">
          <button
            onClick={() => setShowCreateResume(true)}
            className="w-full sm:max-w-40 h-48 rounded-xl border border-dashed border-slate-300
            flex flex-col items-center justify-center gap-3 bg-white
            hover:border-blue-600 hover:shadow-md transition"
          >
            <PlusIcon className="size-10 p-2 rounded-full bg-blue-600 text-white" />
            <p className="text-sm text-slate-700">Create Resume</p>
          </button>

          <button
            onClick={() => setShowUploadResume(true)}
            className="w-full sm:max-w-40 h-48 rounded-xl border border-dashed border-slate-300
            flex flex-col items-center justify-center gap-3 bg-white
            hover:border-blue-600 hover:shadow-md transition"
          >
            <UploadCloudIcon className="size-10 p-2 rounded-full bg-slate-800 text-white" />
            <p className="text-sm text-slate-700">Upload Resume</p>
          </button>
        </div>

        {/* RESUME CARDS */}
        <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
          {allResumes.map((resume, index) => {
            const color = colors[index % colors.length]
            return (
              <div
                key={resume._id}
                onClick={() => navigate(`/app/builder/${resume._id}`)}
                className="relative w-full sm:max-w-40 h-48 rounded-xl border
                bg-white hover:shadow-lg cursor-pointer transition group"
              >
                <div className="h-full flex flex-col items-center justify-center gap-2 px-3">
                  <FilePenLineIcon className="size-7" style={{ color }} />
                  <p className="text-sm font-medium text-center text-slate-800">
                    {resume.title}
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Updated {new Date(resume.updatedAt).toLocaleDateString()}
                  </p>
                </div>

                <div
                  onClick={e => e.stopPropagation()}
                  className="absolute top-2 right-2 hidden group-hover:flex gap-1"
                >
                  <PencilIcon
                    onClick={() => {
                      setEditResumeId(resume._id)
                      setTitle(resume.title)
                    }}
                    className="size-7 p-1.5 rounded hover:bg-slate-100"
                  />
                  <TrashIcon
                    onClick={() => deleteResume(resume._id)}
                    className="size-7 p-1.5 rounded hover:bg-slate-100"
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* CREATE MODAL */}
        {showCreateResume && (
          <Modal title="Create Resume" onClose={() => setShowCreateResume(false)}>
            <form onSubmit={createResume}>
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Resume title"
                className="w-full px-4 py-2 border rounded-md mb-4"
                required
              />
              <button className="w-full py-2 bg-blue-600 text-white rounded-md">
                Create
              </button>
            </form>
          </Modal>
        )}

        {/* UPLOAD MODAL */}
        {showUploadResume && (
          <Modal title="Upload Resume" onClose={() => setShowUploadResume(false)}>
            <form onSubmit={uploadResume}>
              <input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Resume title"
                className="w-full px-4 py-2 border rounded-md mb-4"
                required
              />
              <input
                type="file"
                accept=".pdf"
                onChange={e => setResume(e.target.files[0])}
                className="mb-4"
                required
              />
              <button className="w-full py-2 bg-blue-600 text-white rounded-md flex justify-center">
                {isLoading ? <LoaderCircleIcon className="animate-spin size-4" /> : 'Upload'}
              </button>
            </form>
          </Modal>
        )}

      </div>
    </div>
  )
}

const Modal = ({ title, children, onClose }) => (
  <div className="fixed inset-0 bg-black/60 backdrop-blur flex items-center justify-center z-50">
    <div className="bg-white rounded-xl w-full max-w-sm p-6 relative">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      {children}
      <XIcon
        onClick={onClose}
        className="absolute top-4 right-4 cursor-pointer text-slate-500"
      />
    </div>
  </div>
)

export default Dashboard
