'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useAdmin } from '@/context/admin-context'
import { useRef } from 'react'

// Data for attachment options
const attachmentOptions = [
  {
    type: 'Video',
    icon: '/assets/adminIcons/fi-br-play-alt.svg',
  },
  {
    type: 'PDF',
    icon: '/assets/adminIcons/Group.svg',
  },
]

function LecturerForm() {
  const { courseState, dispatchCourseAction } = useAdmin()
  const fileInputRefs = useRef({})

  const handleFileChange = (sectionId, index, file) => {}

  const handleUploadClick = (e, sectionId, index) => {
    e.stopPropagation()
    fileInputRefs.current[`${sectionId}-${index}`]?.click()
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
    console.log('Submitting all data:', courseState.course_sections)
    // Upload `sections` to your backend here
  }

  return (
    <div className="flex w-full max-w-[1114px] flex-col items-start gap-[37px]">
      <Card className="w-full rounded-[10px] bg-white p-5">
        <CardContent className="space-y-10 p-0">
          <Accordion
            type="single"
            collapsible
            defaultValue="section-1"
            className="w-full"
          >
            {courseState.course_sections.map((section, index) => (
              <AccordionItem
                key={section.section_id}
                value={section.section_id}
                className="mt-10 rounded-[10px] border-2 border-solid border-[#f7f7f7]"
              >
                <AccordionTrigger className="px-5 py-5 hover:no-underline">
                  <div className="flex items-start gap-2">
                    <h2 className="font-['Work_Sans',Helvetica] text-2xl font-semibold text-[#303031]">
                      Section {index + 1}
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-0 pb-0 pt-0">
                  <div className="flex w-full items-center justify-between px-5 py-0">
                    <div className="flex w-[456px] flex-col items-start justify-center gap-2.5">
                      <label className="font-['Work_Sans',Helvetica] text-base font-normal text-black">
                        Section title
                      </label>
                      <Input
                        className="h-[43px] rounded-lg border border-solid border-[#3333331a] py-2.5 pl-4 pr-2.5"
                        value={section.section_title}
                        onChange={e =>
                          dispatchCourseAction({
                            type: 'UPDATE_SECTION_TITLE',
                            payload: {
                              id: section.section_id,
                              title: e.target.value,
                            },
                          })
                        }
                        placeholder="Enter section title"
                      />
                    </div>
                  </div>

                  <div className="mt-[23px] flex w-full flex-col items-start gap-8 bg-[#f7f7f7] p-5">
                    {section.section_items.map((item, index) => (
                      <div
                        key={item.item_id}
                        className="flex w-full flex-col items-start gap-8 border-b border-solid border-[#3333331a] pb-5"
                      >
                        <div className="flex w-full flex-col items-start gap-3">
                          <h3 className="font-['Work_Sans',Helvetica] text-base font-medium text-black">
                            Lecture ({index + 1})
                          </h3>

                          <div className="flex w-full flex-col items-start gap-8 rounded-[10px] border border-dashed border-[#3333331a] p-4">
                            <div className="flex w-[456px] flex-col items-start justify-center gap-2.5">
                              <label className="font-['Work_Sans',Helvetica] text-base font-normal text-black">
                                Lecture title
                              </label>
                              <Input
                                className="h-[43px] rounded-lg border border-solid border-[#3333331a] bg-white py-2.5 pl-4 pr-2.5"
                                value={item.item_title}
                                onChange={e =>
                                  dispatchCourseAction({
                                    type: 'UPDATE_ITEM_IN_SECTION',
                                    payload: {
                                      sectionId: section.section_id,
                                      item: {
                                        item_id: item.item_id,
                                        item_title: e.target.value,
                                      },
                                    },
                                  })
                                }
                                placeholder="Enter section title"
                              />
                            </div>

                            <div className="flex w-[456px] flex-col items-start justify-center gap-2.5">
                              <label className="font-['Work_Sans',Helvetica] text-base font-normal text-black">
                                Attachment
                              </label>
                              <div className="flex w-full items-center justify-center gap-16 rounded-lg border border-solid border-[#3333331a] bg-white p-4">
                                {attachmentOptions.map((option, index) => (
                                  <div
                                    key={index}
                                    className="flex flex-col items-center justify-center gap-3"
                                  >
                                    <div className="group relative h-[50px] w-[50px] overflow-hidden rounded-[1000px] border border-solid border-[#3333331a] bg-white flex items-center justify-center hover:border-[#F7AE30] hover:bg-[#FBEBD0]">
                                      <img
                                        className="h-6 w-6 group-hover:bg-[#FBEBD0]"
                                        alt={`${option.type} icon`}
                                        src={option.icon}
                                      />
                                    </div>
                                    <span className="font-['Work_Sans',Helvetica] text-[13px] font-medium leading-6 text-[#aaaaaa]">
                                      {option.type}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <Button
                      variant="outline"
                      className="h-9 gap-2 rounded-[1000px] border border-solid border-[#3333331a] bg-white px-4 py-2"
                      onClick={() =>
                        dispatchCourseAction({
                          type: 'ADD_ITEM_TO_SECTION',
                          payload: {
                            sectionId: section.section_id,
                            item: {
                              item_id: `item-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`,
                              item_type: '',
                              item_title: '',
                              item_url: '',
                            },
                          },
                        })
                      }
                    >
                      <div className="relative flex h-[18px] w-[18px] items-center justify-center">
                        <img alt="Plus" src="/assets/adminIcons/add-01.svg" />
                      </div>
                      <span className="font-['Poppins',Helvetica] text-[12.5px] font-normal text-[#f7ae30]">
                        Add new lecture
                      </span>
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Button
            variant="outline"
            className="h-9 gap-2 rounded-[1000px] border border-solid border-[#3333331a] px-4 py-2"
            onClick={() =>
              dispatchCourseAction({
                type: 'ADD_SECTION',
                payload: {
                  id: `section-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`,
                },
              })
            }
          >
            <div className="relative flex h-[18px] w-[18px] place-content-center">
              <img alt="Plus" src="/assets/adminIcons/add-01.svg" />
            </div>
            <span className="font-['Poppins',Helvetica] text-[12.5px] font-normal text-[#f7ae30]">
              Add new section
            </span>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default LecturerForm
