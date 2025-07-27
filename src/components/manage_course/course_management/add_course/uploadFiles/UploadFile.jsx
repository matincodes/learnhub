'use client'
import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useAdmin } from '@/context/admin-context'

function UploadFile() {
  const { courseState, dispatchCourseAction } = useAdmin()
  const { course_thumbnail } = courseState
  const fileInputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)

  const handleFileChange = e => {
    if (e.target.files && e.target.files.length > 0) {
      dispatchCourseAction({
        type: 'COURSE_THUMBNAIL',
        payload: e.target.files[0],
      })
    }
  }

  const handleUploadClick = e => {
    e.stopPropagation()
    fileInputRef.current?.click()
  }

  const handleDrop = e => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      dispatchCourseAction({
        type: 'COURSE_THUMBNAIL',
        payload: e.dataTransfer.files[0],
      })
    }
  }

  const handleDragOver = e => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  return (
    <div className="w-[356px] rounded-[10px]">
      <h1 className="text-[16px] font-[400]">Course Thumbnail</h1>
      <div
        className={`dotted flex h-[332px] w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed ${
          isDragging ? 'border-yellow-400 bg-yellow-50' : 'border-[#3333331A]'
        } p-4 transition-colors`}
        onClick={handleUploadClick}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <img
          src="/assets/coursesImages/file.svg"
          alt="file icon"
          className="h-[24px] w-[24px]"
        />
        <h3 className="mb-2 mt-2 text-center text-[14px] font-[400] text-[#AAAAAA]">
          Drag and drop your file here, or
        </h3>
        <Button
          className="h-9 bg-[#F7AE30] text-[#FFFFFF]"
          onClick={handleUploadClick}
        >
          Upload from computer
        </Button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          className="hidden"
          accept="image/*"
        />

        {course_thumbnail && (
          <p className="mt-3 text-sm text-gray-700">
            Selected: {course_thumbnail.name}
          </p>
        )}
      </div>
    </div>
  )
}

export default UploadFile
