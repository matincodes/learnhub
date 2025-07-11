import QuizeCard from '@/components/cards/QuizeCard'
import Spinner from '@/components/spinner/Spinner'
import { useAdmin } from '@/context/admin-context'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/quizzes-management/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const { quizzes, isLoadingQuize, loadQuizzes } = useAdmin()
  const [openId, setOpenId] = useState(null)
  useEffect(() => {
    if (!quizzes || quizzes.length === 0) {
      loadQuizzes()
    }
  }, [loadQuizzes, quizzes])

  if (isLoadingQuize) {
    return (
      <div className="flex h-[calc(100vh-120px)] items-center justify-center">
        <Spinner />
      </div>
    )
  }
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
