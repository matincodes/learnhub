'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { useAdmin } from '@/context/admin-context'

function QuizeThumbnail() {
  const { dispatch, state } = useAdmin()
  const fileInputRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const { quize_thumbnail, quize_preview } = state
  console.log(quize_thumbnail)
  const handleUploadClick = e => {
    e.stopPropagation()
    fileInputRef.current?.click()
  }

  const convertToBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  const handleDrop = async e => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0]
      const base64 = await convertToBase64(droppedFile)
      dispatch({
        type: 'QUIZE_THUMNAIL',
        payload: base64,
      })
      e.dataTransfer.clearData()
    }
  }

  const handleDragOver = e => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleFileChange = async e => {
    const file = e.target.files[0]
    const preview = URL.createObjectURL(file)
    if (file) {
      dispatch({
        type: 'QUIZE_THUMNAIL',
        payload: file,
      })
      dispatch({
        type: 'QUIZE_PREVIEW',
        payload: preview,
      })
    }
  }

  return (
    <div className="w-[356px] rounded-[10px]">
      <h1 className="text-[16px] font-[400]">Quiz Thumbnail</h1>
      <div
        className={`dotted mt-5 flex h-[332px] w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed ${
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

        {quize_preview && (
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-700">Preview:</p>
            <img
              src={quize_preview}
              alt="Thumbnail Preview"
              className="mt-2 max-h-[200px] w-auto rounded"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default QuizeThumbnail
