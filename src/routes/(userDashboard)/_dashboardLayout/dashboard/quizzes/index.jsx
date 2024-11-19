import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import QuizTopSectionCard from '@/components/widgets/quiz_top_section_card'
import RecentCourseCard from '@/components/widgets/recent_course_card'
import { coursesFilter } from '@/data/courses'
import { recentCourses } from '@/data/dashboard'
import { firstSectionData } from '@/data/quiz'
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
      <Select>
        <SelectTrigger className="h-12 w-[180px] bg-white">
          <SelectValue placeholder="Select Courses" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectGroup>
            {coursesFilter.map(({ value, label }, index) => (
              <SelectItem
                key={index}
                className="h-12 items-center justify-start focus:bg-gray-100"
                value={value}
              >
                {label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <div className="mt-6 w-full rounded-xl bg-white p-4 sm:mt-8">
        <div className="mb-8 grid w-full grid-cols-1 gap-6 sm:mb-10 sm:grid-cols-2 lg:mb-12 lg:gap-20 2xl:gap-24">
          {firstSectionData.map(item => (
            <QuizTopSectionCard key={uuidV4()} {...item} />
          ))}
        </div>
        <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 md:gap-10 lg:grid-cols-2 xl:grid-cols-4">
          {recentCourses.map((item, index) => (
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
