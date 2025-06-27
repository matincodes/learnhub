'use client'

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '../ui/switch'
import { Link, useRouter } from '@tanstack/react-router'

const option = ['option 1', 'option 2', 'option 3', 'option 4']

function QuizAddQuesion() {
  const [sections, setSections] = useState([
    {
      id: Date.now(),
      title: 'Section 1',
      name: '',
      attachment: null,
      showAttachmentUI: false,
    },
  ])

  const [openSectionId, setOpenSectionId] = useState(null)
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

  const handleAddSection = () => {
    const newId = Date.now()
    setSections(prev => [
      ...prev,
      {
        id: newId,
        title: `Section ${prev.length + 1}`,
        name: '',
        attachment: null,
        showAttachmentUI: false,
      },
    ])
    setOpenSectionId(newId)
  }

  const toggleAttachmentUI = sectionId => {
    setSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? { ...section, showAttachmentUI: !section.showAttachmentUI }
          : section,
      ),
    )
  }

  const handleFileChange = (sectionId, file) => {
    setSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? { ...section, attachment: file, showAttachmentUI: false }
          : section,
      ),
    )
  }

  const removeFile = sectionId => {
    setSections(prev =>
      prev.map(section =>
        section.id === sectionId ? { ...section, attachment: null } : section,
      ),
    )
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log('Submitting all data:', sections)
    // Upload `sections` to your backend
  }
  const router = useRouter()

  const handleBack = () => {
    router.history.go(-1)
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full space-y-6 overflow-auto rounded-[10px] bg-white px-4 py-4"
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
            <div className="flex gap-10 border-b border-[#F7F7F7] px-3 py-3">
              <div className="w-[50%] space-y-2">
                <Input
                  name="name"
                  className="w-full text-[16px] font-[400] placeholder:text-[#AAAAAA]"
                  placeholder="Question"
                  value={section.name}
                  onChange={e => handleChange(section.id, e)}
                />
                <div className="flex flex-col justify-between">
                  {option.map((item, index) => (
                    <div
                      key={index}
                      className="mb-10 mt-[30px] flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2 font-san text-base font-normal text-[#AAAAAA]">
                        <img
                          src="/assets/quiz/radio.svg"
                          alt="icon"
                          className="size-6"
                        />
                        {item}
                      </span>

                      <Switch className="h-[20px] w-[35px] data-[state=checked]:bg-[#F7AE30] data-[state=unchecked]:bg-[#808080]" />
                    </div>
                  ))}
                  <div className="flex items-start gap-3">
                    <img
                      src="/assets/quiz/info.svg"
                      alt="icon"
                      className="size-[24px]"
                    />
                    <p className="text-[15px] font-normal text-[#848484]">
                      Use the toggle at the side of each option to select if
                      it’s the <br /> right option to the question given.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start">
                {/* Show "Add attachment" only if no file is uploaded */}
                {!section.attachment && (
                  <Button
                    type="button"
                    onClick={() => toggleAttachmentUI(section.id)}
                    className="w-[191px] space-x-2 rounded-full border border-[#3333331A]"
                  >
                    <img src="/assets/coursesImages/plus.svg" alt="plus icon" />
                    <span className="text-[#F7AE30]">Add new attachment</span>
                  </Button>
                )}

                {section.showAttachmentUI && !section.attachment && (
                  <div className="relative mt-4 w-full">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      ref={el => {
                        fileInputRefs.current[section.id] = el
                      }}
                      onChange={e => {
                        const file = e.target.files?.[0]
                        if (file) handleFileChange(section.id, file)
                      }}
                    />
                    <div className="absolute ml-20 flex h-[110px] w-[130px] flex-col items-center justify-center gap-5 rounded-[10px] bg-white text-base font-normal text-[#303031] shadow-black/20 drop-shadow-md">
                      <button
                        type="button"
                        onClick={() =>
                          fileInputRefs.current[section.id]?.click()
                        }
                        className="outline-0"
                      >
                        Image
                      </button>
                      <button className="outline-0">Code</button>
                    </div>
                  </div>
                )}

                {/* Show image preview and delete option */}
                {section.attachment && (
                  <div className="mt-6 w-full">
                    <img
                      src={URL.createObjectURL(section.attachment)}
                      alt="Preview"
                      className="h-[350px] w-full rounded-[10px] object-cover"
                    />
                    <div className="mt-10 flex justify-end">
                      <button
                        type="button"
                        onClick={() => removeFile(section.id)}
                        className="outline-0"
                      >
                        <img
                          src="/assets/quiz/deleteIcon.svg"
                          alt="delete icon"
                          className="size-6"
                        />
                      </button>
                    </div>
                  </div>
                )}
              </div>
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
      {/* button */}
      <div className="mt-10 flex items-center justify-between rounded-[8px] bg-white font-san text-sm font-medium">
        <button
          onClick={handleBack}
          className="px-8 py-2 text-[#F7AE30] outline-0"
        >
          Go back
        </button>
        <Link
          to="/admin/dashboard/quizzes-management/preview"
          className="rounded-[10px] bg-[#F7AE30] px-8 py-2 text-white"
        >
          Next
        </Link>
      </div>
    </form>
  )
}

export default QuizAddQuesion
