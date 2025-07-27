import QuizAddQuesion from '@/components/quize-management/QuizAddQuesion'
import { useRouter } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/quizzes-management/new-quiz-lec/',
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
        <section>
          <QuizAddQuesion />
        </section>
      </div>
    </>
  )
}
