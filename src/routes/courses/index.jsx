import { createFileRoute } from '@tanstack/react-router'
import NavBar from '@/components/navBar/navBar'
import Header from '@/components/header/header'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useEffect, useState } from 'react'
import SearchCourseCard from '@/components/widgets/couse_search_card'
import Footer from '@/components/footer/footer'
import NullState from '@/components/nullState/nullState'
import { fetchCourses } from '@/lib/apiFunctions'

export const Route = createFileRoute('/courses/')({
  component: Course,
})

function Course() {
  const [courseCategory, setCourseCategory] = useState('All Courses')
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    const getCourses = async () => {
      setLoading(true)
      try {
      const coursesData = await fetchCourses()
      console.log(coursesData)
      setCourses(coursesData || [])
      } catch (error) {
        console.error('Error fetching courses:', error)
        setCourses([])
      } finally {
        setLoading(false) 
      }
    }
    getCourses()
  }, [])


  const handleSelecetChange = value => {
    setCourseCategory(value)
  }

  const uniqueCategories = ["All Courses", ...new Set(courses.map(({ category }) => category))]


  // console
  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* Navbar */}

      <Header
        main_text={courseCategory}
        paragraph="Access courses with flexible pricing options—choose a monthly or yearly subscription that fits your budget and learning needs!"
      />

      <div className="flex w-full items-center space-x-4 px-[20px] lg:px-[90px] lg:py-[20px]">
        <span className="font-san font-[600]">Filters:</span>
        <Select onValueChange={handleSelecetChange}>
          <SelectTrigger className="w-[210px]">
            <SelectValue placeholder="All Courses" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {uniqueCategories.map(( category, index ) => (
                <SelectItem
                  key={index}
                  className="focus:bg-gray-100"
                  value={category}
                >
                  {category}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div
        className={`flex items-center justify-center p-2 lg:p-5 ${
          courses.length > 0 ? 'min-h-[60vh]' : 'h-[60vh]' // Use min-h for content
        } `}
      >
        <div className="grid w-fit grid-cols-2 gap-4 p-2 lg:w-[96%] lg:grid-cols-3 lg:gap-9 lg:p-4">
    
          {loading ? (
            <p>Loading courses...</p> // You can replace this with a spinner or skeleton loaders
          ) : Array.isArray(courses) && courses.length > 0 ? (
            courses.map(course => {
              // Condition to display courses
              if (courseCategory === 'All Courses' || courseCategory === course.category) {
                return (
                  <div className="flex w-fit justify-center" key={`${course.id}`}>
                    <a href={`/courses/${course.title}`}>
                      <SearchCourseCard
                        image={course.thumbnail}
                        title={course.title}
                        lesson={course.lesson}
                        duration={course.duration}
                      />
                    </a>
                  </div>
                );
              }
              return null; // Return null if the category doesn't match
            })
          ) : (
            <NullState
              image={'/assets/empty.png'}
              mainText="Oops! No courses yet."
              miniText="New courses will be added shortly. Stay tuned!"
              link={'/'}
              linkText={'Go To Homepage'}
            />
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  )
}

