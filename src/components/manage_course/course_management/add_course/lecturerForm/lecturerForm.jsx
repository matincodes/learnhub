'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function LecturerForm() {
  const [sections, setSections] = useState([
    {
      id: Date.now(),
      title: 'Section 1',
      name: '',
      attachments: [],
    },
  ])

  const [openSectionId, setOpenSectionId] = useState(null)
  const [isDragging, setIsDragging] = useState(false)
  const fileInputRefs = useRef({})

  const toggleSection = id => {
    setOpenSectionId(openSectionId === id ? null : id)
  }

  const handleChange = (id, e) => {
    const { name, value } = e.target
    setSections(prev =>
      prev.map(section =>
        section.id === id ? { ...section, [name]: value } : section,
      ),
    )
  }

  const handleFileChange = (sectionId, index, file) => {
    setSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? {
              ...section,
              attachments: section.attachments.map((a, i) =>
                i === index ? file : a,
              ),
            }
          : section,
      ),
    )
  }

  const handleUploadClick = (e, sectionId, index) => {
    e.stopPropagation()
    fileInputRefs.current[`${sectionId}-${index}`]?.click()
  }

  const handleDrop = (e, sectionId, index) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleFileChange(sectionId, index, file)
    }
  }

  const handleDragOver = e => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleAddSection = () => {
    const newId = Date.now()
    setSections(prev => [
      ...prev,
      {
        id: newId,
        title: `Section ${prev.length + 1}`,
        name: '',
        attachments: [],
      },
    ])
    setOpenSectionId(newId)
  }

  const handleAddAttachment = sectionId => {
    setSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? {
              ...section,
              attachments: [...section.attachments, null],
            }
          : section,
      ),
    )
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submitting all data:', sections)
    // Upload `sections` to your backend here
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-[550px] w-full space-y-6 overflow-auto rounded-[10px] bg-white px-4 py-4"
    >
      {sections.map(section => (
        <div
          key={section.id}
          className="space-y-4 rounded-[10px] border border-[#F7F7F7] pb-4 pt-2"
        >
          <button
            type="button"
            onClick={() => toggleSection(section.id)}
            className="flex w-full items-center justify-between border-b border-[#F7F7F7] px-3 py-4 text-left text-[24px] font-[600] text-[#303031]"
          >
            <span>{section.title}</span>
            <img
              src="/assets/coursesImages/downarrow.svg"
              alt="down arrow icon"
            />
          </button>

          {openSectionId === section.id && (
            <div className="space-y-4 border-b border-[#F7F7F7] px-3 py-3">
              <div className="space-y-2">
                <label
                  htmlFor="Lecture title"
                  className="text-[16px] font-[400] text-[#000000]"
                >
                  Lecture title
                </label>
                <Input
                  name="name"
                  className="w-[456px] text-[16px] font-[400] placeholder:text-[#AAAAAA]"
                  placeholder="Enter Lecture title"
                  value={section.name}
                  onChange={e => handleChange(section.id, e)}
                />
              </div>

              {section.attachments.map((file, index) => (
                <div key={index} className="space-y-2">
                  <label
                    htmlFor={`Lecture attachment ${index + 1}`}
                    className="text-[16px] font-[400] text-[#000000]"
                  >
                    {`Lecture attachment ${index + 1}`}
                  </label>
                  <div
                    className={`flex h-[43px] w-[456px] cursor-pointer items-center justify-between gap-[14px] rounded-md border border-dashed ${
                      isDragging
                        ? 'border-yellow-400 bg-yellow-50'
                        : 'border-[#3333331A]'
                    } px-2 py-4 transition-colors`}
                    onClick={e => handleUploadClick(e, section.id, index)}
                    onDrop={e => handleDrop(e, section.id, index)}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                  >
                    <h3 className="mb-2 mt-2 text-center text-[14px] font-[400] text-[#AAAAAA]">
                      Drag and drop your file here, or
                    </h3>
                    <Button
                      className="h-[32px] w-[166px] bg-[#F7AE30] text-[#FFFFFF]"
                      onClick={e => handleUploadClick(e, section.id, index)}
                    >
                      <span className="text-[13.2px] font-[500]">
                        Upload from computer
                      </span>
                    </Button>
                    <input
                      type="file"
                      className="hidden"
                      ref={el =>
                        (fileInputRefs.current[`${section.id}-${index}`] = el)
                      }
                      onChange={e =>
                        handleFileChange(section.id, index, e.target.files?.[0])
                      }
                      accept="image/*"
                    />
                  </div>
                  {file && (
                    <p className="mt-1 text-sm text-gray-600">{file.name}</p>
                  )}
                </div>
              ))}

              <Button
                type="button"
                onClick={() => handleAddAttachment(section.id)}
                className="w-[191px] space-x-2 rounded-full border border-[#3333331A]"
              >
                <img src="/assets/coursesImages/plus.svg" alt="plus icon" />
                <span className="text-[#F7AE30]">Add new attachment</span>
              </Button>
            </div>
          )}
        </div>
      ))}

      <div className="flex items-center justify-between px-3 py-3">
        <Button
          type="button"
          onClick={handleAddSection}
          className="w-[162px] space-x-2 rounded-full border border-[#3333331A] px-3"
        >
          <img src="/assets/coursesImages/plus.svg" alt="plus icon" />
          <span className="text-[#F7AE30]">Add new section</span>
        </Button>
      </div>
    </form>
  )
}

export default LecturerForm
