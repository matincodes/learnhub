import {
  createFileRoute,
  useNavigate,
  useParams,
  useSearch,
} from '@tanstack/react-router'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { coursesFilter, UserCourses } from '@/data/userCourses'
import { Button } from '@/components/ui/button'
import { FiPlus } from 'react-icons/fi'

import NullState from '@/components/nullState/nullState'

import RecentCourseCard from '@/components/widgets/recent_course_card'
import { useEffect } from 'react'
export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/my-courses/',
)({
  component: MyCourses,
})

function MyCourses() {
  const { course_title } = useSearch('')
  const navigate = useNavigate()

  useEffect(() => {
    if (course_title) {
      navigate({ to: `${location.pathname}/${course_title}` })
    } else {
      console.log('dfdf')
    }
  }, [course_title, navigate])

  return (
    <div className="w-full rounded-xl bg-white p-4 sm:p-6">
      <div className="mb-10 flex w-full items-center justify-between sm:mb-12">
        <Select>
          <SelectTrigger className="h-12 w-[180px]">
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
        <Button className="flex h-12 items-center justify-center gap-x-2 rounded-xl bg-normal_yellow px-4 text-white">
          <p className="hidden text-base font-medium sm:block">
            Add New Courses
          </p>
          <FiPlus size={24} />
        </Button>
      </div>

      <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 md:gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {UserCourses.length <= 0 ? (
          <NullState
            mainText="No recent courses yet"
            miniText="Add courses to continue your learning journey"
            button
          />
        ) : (
          UserCourses.map((item, index) => (
            <a
              href={`/dashboard/my-courses/?course_title=${item.title}`}
              key={index}
            >
              <RecentCourseCard className="w-full sm:w-full" {...item} />
            </a>
          ))
        )}
      </div>
    </div>
  )
}
