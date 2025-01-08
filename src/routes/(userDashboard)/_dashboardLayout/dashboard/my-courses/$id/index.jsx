import { createFileRoute, useNavigate, useParams } from '@tanstack/react-router'
import { UserCourses } from '@/data/userCourses'
import { useEffect } from 'react'
export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/my-courses/$id/',
)({
  component: SearchCourseById,
})

function SearchCourseById() {
  const {id} = useParams('id')
  const navigate = useNavigate()

  const currentCourse = UserCourses.filter(courses => courses.title == id)[0]
  const currentCourseFirstContent = currentCourse?.contents.map(content => content.id)[0]
  const currentCourseFirstContentCourseId = currentCourse?.contents.filter(content => content.id === currentCourseFirstContent)[0].courses[0].id
  // const currentCourseFirstContentCourseId = currentCourse?.contents.filter(content => content.id === currentCourseFirstContent)[0]
  const finalCourseCode = currentCourseFirstContent + currentCourseFirstContentCourseId
  
  // console.log(currentCourseFirstContentCourseId)
  console.log(finalCourseCode)
  console.log(currentCourse)

  useEffect(()=>{
  navigate({to: `${location.pathname}/learn/lecture/${finalCourseCode}`})
  }, [finalCourseCode, navigate])

}
