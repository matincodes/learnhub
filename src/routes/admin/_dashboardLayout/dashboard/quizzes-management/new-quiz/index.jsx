import NewQuize from '@/components/quize-management/NewQuize'
import QuizeThumbnail from '@/components/quize-management/QuizeThumbnail'
import { Link, useRouter } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/quizzes-management/new-quiz/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  const router = useRouter()

  const handleBack = () => {
    router.history.go(-1)
  }




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
          New quiz
        </button>
      </section>
      <div className="mt-[120px] px-16">
        <div
          className="mt-[59px] rounded-[10px] bg-white px-[10px] py-[26px]"
        >
          <div className="flex items-start gap-[50px]">
            <QuizeThumbnail />
            <NewQuize  />
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
              to="/admin/dashboard/quizzes-management/new-quiz-lec"
              className="rounded-[10px] bg-[#F7AE30] px-8 py-2 text-white"
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
