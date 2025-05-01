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
import { Courses } from '@/data/courses'
import { useEffect, useState } from 'react'
import SearchCourseCard from '@/components/widgets/couse_search_card'
import Footer from '@/components/footer/footer'
import NullState from '@/components/nullState/nullState'
import { fetchCourses, coursesError } from '@/lib/apiFunctions'

export const Route = createFileRoute('/courses/')({
  component: Course,
})

function Course() {
  const [courseTitle, setCourseTitle] = useState('Frontend Development')
  window.localStorage.setItem('category', courseTitle)
  const [courses, setCourses] = useState([])
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzQ2MTEzODAxLCJpYXQiOjE3NDYwMjc0MDEsImp0aSI6ImU4YzFmNmRiNTZlNTQwN2Y5NGIxODM4MzYxY2FlYmQwIiwidXNlcl9pZCI6OH0.inTlwRTL_SnBzucxXuT4VZe7JovqXk0AsINa2wzneqI'

  useEffect(() => {
    const getCourses = async () => {
      const coursesData = await fetchCourses(token)
      console.log(coursesData)
      setCourses(coursesData)
    }
    getCourses()
  }, [token])

console.log(coursesError)

  const handleSelecetChange = value => {
    setCourseTitle(value)
  }

  // console
  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* Navbar */}

      <Header
        main_text={courseTitle}
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
              {courses.map(({ category, id }) => (
                <SelectItem
                  key={id}
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
        className={`flex items-center justify-center p-2 lg:p-5 ${courses.length <= 0 ? 'h-[90vh]' : ''} `}
      >
        <div className="grid w-fit grid-cols-2 gap-4 p-2 lg:w-[96%] lg:grid-cols-3 lg:gap-9 lg:p-4">
          {courses.length <= 0 ? (
            <NullState
              image={'/assets/empty.png'}
              mainText="Opps! No courses yet."
              miniText="New courses will be added shortly. Stay tuned!"
              link={'/'}
              linkText={'Go To Homepage'}
            />
          ) : (
            courses.map(category =>
              courseTitle === category.category
                ? category.courses.map((item, id) => (
                    <div className="flex w-fit justify-center" key={id}>
                      <a href={`/courses/${item.title}`}>
                        <SearchCourseCard
                          image={item.image}
                          title={item.title}
                          lesson={item.lesson}
                          duration={item.duration}
                        />
                      </a>
                    </div>
                  ))
                : '',
            )
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  )
}
