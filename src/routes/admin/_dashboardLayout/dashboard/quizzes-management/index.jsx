import QuizeCard from '@/components/cards/QuizeCard'
import { useAdmin } from '@/context/admin-context'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/quizzes-management/',
)({
  component: RouteComponent,
})
// const quizData = [
//   {
//     id: 1,
//     url: '/assets/quiz/image-1.svg',
//     title: 'Test your coding skills',
//     noOfQuesion: 10,
//     limit: 3,
//   },
//   {
//     id: 2,
//     url: '/assets/quiz/image-2.svg',
//     title: 'Strenghten your UI/UX Game',
//     noOfQuesion: 10,
//     limit: 5,
//   },
//   {
//     id: 3,
//     url: '/assets/quiz/image-1.svg',
//     title: 'Test your coding skills',
//     noOfQuesion: 10,
//     limit: 5,
//   },
//   {
//     id: 4,
//     url: '/assets/quiz/image-3.svg',
//     title: 'Strenghten your UI/UX Game',
//     noOfQuesion: 34,
//     limit: 5,
//   },
//   {
//     id: 5,
//     url: '/assets/quiz/image-3.svg',
//     title: 'Test your coding skills',
//     noOfQuesion: 10,
//     limit: 8,
//   },
// ]
function RouteComponent() {
  const { quizzes } = useAdmin()
  const [openId, setOpenId] = useState(null)


  return (
    <>
      {/* header */}
      <section className="flex w-full items-center justify-between bg-gray-100 px-20 py-3 lg:fixed lg:right-0 lg:z-50 lg:w-[calc(100%-280px)]">
        <h1 className="font-san text-[32px] font-semibold text-[#303031]">
          Quiz management
        </h1>
        <Link
          to="/admin/dashboard/quizzes-management/new-quiz"
          className="flex items-center gap-2 rounded-[10px] bg-[#F7AE30] px-[11px] py-[7px] font-san text-base font-medium text-white"
        >
          Create new quiz
          <img src="\assets\add.svg" alt="icon" className="size-6" />
        </Link>
      </section>
      <div className="mt-[120px] px-16">
        <section className="mt-[59px] rounded-[10px] bg-white px-[24px] py-[26px]">
          <form className="flex w-[320px] items-center gap-2 border-[2px] border-[#F7F7F7] bg-[#FFFFFF] px-3 py-2">
            <img src="\assets\search.svg" alt="icon" className="size-[20px]" />
            <input
              placeholder="Search for users by name or email"
              className="w-full font-inter text-base font-medium text-[#848484] outline-0"
            />
          </form>
          {/* cards  */}
          <div className="mt-[40px] grid w-full grid-cols-3 gap-12">
            {quizzes?.map(items => (
              <QuizeCard
                key={items.id}
                e={items}
                openId={openId}
                setOpenId={setOpenId}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
