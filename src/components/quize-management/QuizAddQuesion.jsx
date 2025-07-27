'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Switch } from '../ui/switch'
import { Link, useRouter } from '@tanstack/react-router'
import { useAdmin } from '@/context/admin-context'

function QuizAddQuesion() {
  const { state, dispatch } = useAdmin()
  const { quize_questions } = state

  const [sections, setSections] = useState(() => {
    if (quize_questions?.questions?.length) {
      return quize_questions.questions.map((q, i) => ({
        id: Date.now() + i,
        title: `Question ${i + 1}`,
        mark: q.mark,
        attachment: q.thurmnail
          ? { preview: q.thurmnail } // restore base64 from context
          : null,
        choices: q.choices ,
      }))
    }
    return [
      {
        id: Date.now(),
        title: 'Question 1',
        mark: 0,
        attachment: null,
        choices: [
          { text: '', is_correct: false },
          { text: '', is_correct: false },
          { text: '', is_correct: false },
          { text: '', is_correct: false },
        ],
      },
    ]
  })

  const [openSectionId, setOpenSectionId] = useState(null)
  const fileInputRefs = useRef({})
  const router = useRouter()

  const toggleSection = id => {
    setOpenSectionId(openSectionId === id ? null : id)
  }

  const handleChange = (id, e) => {
    const { name, value } = e.target
    setSections(prev =>
      prev.map(section =>
        section.id === id
          ? { ...section, [name]: name === 'mark' ? Number(value) : value }
          : section,
      ),
    )
  }

  const handleChoiceChange = (sectionId, index, key, value) => {
    setSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? {
              ...section,
              choices: section.choices.map((choice, i) =>
                i === index ? { ...choice, [key]: value } : choice,
              ),
            }
          : section,
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
        mark: 0,
        attachment: null,
        choices: [
          { text: '', is_correct: false },
          { text: '', is_correct: false },
          { text: '', is_correct: false },
          { text: '', is_correct: false },
        ],
      },
    ])
    setOpenSectionId(newId)
  }

  // const handleDeleteSection = id => {
  //   setSections(prev => prev.filter(section => section.id !== id))
  //   if (openSectionId === id) setOpenSectionId(null)
  // }

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
    const reader = new FileReader()

    reader.onloadend = () => {
      const base64String = reader.result

      setSections(prev =>
        prev.map(section =>
          section.id === sectionId
            ? {
                ...section,
                attachment: {
                  preview: base64String, 
                },
                showAttachmentUI: false,
              }
            : section,
        ),
      )
    }

    if (file) {
      reader.readAsDataURL(file) 
    }
  }

  const removeFile = sectionId => {
    setSections(prev =>
      prev.map(section =>
        section.id === sectionId ? { ...section, attachment: null } : section,
      ),
    )
  }

  useEffect(() => {
    const formatted = sections.map(sec => ({
      title: sec.name,
      mark: sec.mark,
      thurmnail: sec.attachment?.preview ?? '',
      choices: sec.choices,
    }))
    dispatch({ type: 'QUIZE_QUESTION', payload: { questions: formatted } })
  }, [sections])

  const handleBack = () => {
    router.history.go(-1)
  }

  return (
    <div className="w-full space-y-6 overflow-auto rounded-[10px] bg-white px-4 py-4">
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
                  className="w-full"
                  placeholder="Question"
                  value={section.name}
                  onChange={e => handleChange(section.id, e)}
                />

                {/* input field for mark */}

                {/* <Input
                  type="number"
                  name="mark"
                  className="w-full"
                  placeholder="Mark"
                  value={section.mark}
                  onChange={e => handleChange(section.id, e)}
                /> */}
                <div className="flex flex-col justify-between">
                  {section.choices.map((choice, index) => (
                    <div
                      key={index}
                      className="mb-10 mt-[30px] flex items-center justify-between gap-5"
                    >
                      <span className="flex w-full items-center gap-2 rounded-[8px] border-[1px] border-dotted border-[#3333331A] px-2">
                        <img
                          src="/assets/quiz/radio.svg"
                          alt="icon"
                          className="size-6"
                        />
                        <Input
                          type="text"
                          value={choice.text}
                          placeHolder={`Option ${index + 1}`}
                          onChange={e =>
                            handleChoiceChange(
                              section.id,
                              index,
                              'text',
                              e.target.value,
                            )
                          }
                          className="w-full border-none font-san text-base text-[#303031]"
                        />
                      </span>
                      <Switch
                        checked={choice.is_correct}
                        onCheckedChange={val =>
                          handleChoiceChange(
                            section.id,
                            index,
                            'is_correct',
                            val,
                          )
                        }
                        className="h-[20px] w-[35px] data-[state=checked]:bg-[#F7AE30] data-[state=unchecked]:bg-[#808080]"
                      />
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
                      it’s the right option to the question given.
                    </p>
                  </div>
                </div>

                {/* delete section button */}

                {/* <Button
                  type="button"
                  variant="outline"
                  onClick={() => handleDeleteSection(section.id)}
                  className="text-red-500"
                >
                  Delete Section
                </Button> */}
              </div>

              <div className="flex flex-col items-start">
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

                {section.attachment && (
                  <div className="mt-6 w-full">
                    <img
                      src={section.attachment?.preview}
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

      <div className="mt-10 flex items-center justify-between rounded-[8px] bg-white font-san text-sm font-medium">
        <button
          onClick={handleBack}
          className="px-8 py-2 text-[#F7AE30] outline-0"
        >
          Go back
        </button>
        <Link
          to="/admin/dashboard/quizzes-management/preview/"
          className="rounded-[10px] bg-[#F7AE30] px-8 py-2 text-white"
        >
          Next
        </Link>
      </div>
    </div>
  )
}

export default QuizAddQuesion
