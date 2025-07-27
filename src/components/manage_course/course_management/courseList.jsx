import { adminGetAllCourses } from '@/api/adminApiService'
import { Skeleton } from '@/components/ui/skeleton'
import { useEffect, useState } from 'react'
import CourseCard from '../../cards/CourseCard'
import Filter from '../filter_courses/filter'

function CourseList() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let ignore = false
    setCourses([])
    setLoading(true)

    const fetchCourses = async () => {
      try {
        const response = await adminGetAllCourses()
        if (!ignore) {
          setCourses(response.data)
          console.log('Fetched courses:', response.data)
        }
      } catch (error) {
        console.error('Error fetching courses:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCourses()

    return () => {
      ignore = true
    }
  }, [])

  if (loading) {
    return (
      <div className="mt-[120px] h-[464px] w-full bg-white px-4 py-3">
        <Filter />
        <div className="mt-7 grid grid-cols-4 gap-[29px]">
          {Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="h-[150px] w-full" />
          ))}
        </div>
      </div>
    )
  }

  if (courses.length === 0) {
    return (
      <div className="mt-[120px] h-[464px] w-full bg-white px-4 py-3">
        <Filter />
        <div className="mt-7 flex h-full w-full items-center justify-center">
          {/* No courses available message */}
          <div className="items-center text-center text-gray-500">
            No courses available
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-[120px] h-[464px] w-full bg-white px-4 py-3">
      <Filter />
      <div className="mt-7 grid grid-cols-4 gap-[29px]">
        {courses.map(item => (
          <CourseCard key={item.id} e={item} />
        ))}
      </div>
    </div>
  )
}

export default CourseList
