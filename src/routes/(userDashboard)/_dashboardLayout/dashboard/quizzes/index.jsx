import QuizTopSectionCard from '@/components/widgets/quiz_top_section_card'
import RecentCourseCard from '@/components/widgets/recent_course_card'
import { dailyChallenges, firstSectionData } from '@/data/quiz'
import { createFileRoute } from '@tanstack/react-router'
import { v4 as uuidV4 } from 'uuid'

export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/quizzes/',
)({
  component: Quizzes,
})

function Quizzes() {
  return (
    <div className="w-full">
      <div className="mt-6 w-full rounded-xl bg-white p-4 sm:mt-8 sm:p-6">
        <h2 className="mb-4 text-lg font-medium sm:text-2xl">
          Premium Challenges!
        </h2>
        <div className="mb-8 grid w-full grid-cols-1 gap-6 sm:mb-10 sm:grid-cols-2 lg:mb-12 lg:gap-20 2xl:gap-24">
          {firstSectionData.map(item => (
            <QuizTopSectionCard key={uuidV4()} {...item} />
          ))}
        </div>

        <h2 className="mb-4 text-lg font-medium sm:text-2xl">
          Daily Challenges!
        </h2>
        <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:grid-cols-2 xl:grid-cols-4">
          {dailyChallenges.map((item, index) => (
            <RecentCourseCard
              className="w-full sm:w-full"
              key={index}
              {...item}
              isQuiz={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
