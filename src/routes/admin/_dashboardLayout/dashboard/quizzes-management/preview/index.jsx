import UploadQuize from '@/components/quize-management/UploadQuize'
import { useAdmin } from '@/context/admin-context'
import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/quizzes-management/preview/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { addQuizzes, state } = useAdmin()
  const [showLoadingCourse, setShowLoadingCourse] = useState(false)
  const router = useRouter()

  const handleBack = () => {
    router.history.go(-1)
  }

  const {
    quize_category,
    quize_title,
    quize_description,
    quize_time_limit,
    quize_passingCriteria,
    quize_questions,
  } = state

  const dataObj = {
    category: quize_category,
    title: quize_title,
    description: quize_description,
    time_limit: quize_time_limit,
    passing_criteria: quize_passingCriteria,
    questions: quize_questions,
    due_date: '2025-07-09 09:00:54',
  }
  console.log(dataObj)
  const handleSubmit = async () => {
    const result = await addQuizzes(dataObj)
    console.log(result)
    setShowLoadingCourse(true)
  }
  const numberOfQuestion = quize_questions?.questions.length

  const data = [
    `${numberOfQuestion} questions`,
    'Click “Next” to proceed, “Submit” when finished',
    'Ranking based on cumulative score and time taken',
    'Take fresh quizzes to improve ranking',
    'Click Take Challenge to begin.',
  ]
  return (
    <>
      <section className="flex w-full items-center justify-between bg-gray-100 px-20 py-3 lg:fixed lg:right-0 lg:z-50 lg:w-[calc(100%-280px)]">
        <button className="flex items-center gap-3 font-san text-[32px] font-semibold text-[#303031] outline-0">
          <img
            onClick={handleBack}
            src="\assets\quiz\arrow-left.svg"
            alt="icon"
            className="size-5"
          />
          New quiz (preview)
        </button>
        <UploadQuize
          onOpen={setShowLoadingCourse}
          openCourseLoading={showLoadingCourse}
        />
        <button
          onClick={handleSubmit}
          className="rounded-[10px] bg-[#F7AE30] px-[11px] py-[7px] font-san text-base text-white"
        >
          Upload Quiz
        </button>
      </section>
      <div className="px-16">
        <section className="mt-[120px] rounded-[10px] bg-white pb-[117px]">
          <img
            src="\assets\quiz\image-4.svg"
            alt="icon"
            className="h-[207px]"
          />
          <div className="px-5">
            <h1 className="mt-[42px] font-san text-[32px] font-semibold text-[#101828]">
              {quize_title}
            </h1>
            <p className="mt-[26px] font-san text-[20px] font-normal text-[#303031]">
              {quize_description}
            </p>
            <ul className="mt-[85px] space-y-6">
              {data.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 font-san text-base font-normal text-black"
                >
                  {' '}
                  <img
                    src="\assets\quiz\dropdown-icon.svg"
                    alt="icon"
                    className="size-[10px]"
                  />{' '}
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-[78px] flex items-center gap-[89px] font-san text-base font-medium">
              <button
                onClick={handleBack}
                className="w-[220px] rounded-[10px] border-[1px] border-[#F7AE30] px-[11px] py-[7px] text-[#F7AE30] outline-0"
              >
                Back
              </button>
              <button className="w-[220px] rounded-[10px] bg-[#F7AE30] px-[11px] py-[7px] text-white outline-0">
                Take Challenge
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
