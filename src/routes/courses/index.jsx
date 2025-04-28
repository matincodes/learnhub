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
import { useState } from 'react'
import SearchCourseCard from '@/components/widgets/couse_search_card'
import Footer from '@/components/footer/footer'
import NullState from '@/components/nullState/nullState'

export const Route = createFileRoute('/courses/')({
  component: Course,
})

function Course() {
  const [courseTitle, setCourseTitle] = useState('Frontend Development')
  window.localStorage.setItem('category', courseTitle)

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
              {Courses.map(({ category, id }) => (
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

      <div className={`lg:p-5 flex items-center justify-center p-2 ${Courses.length <= 0 ? 'h-[90vh]' : ''}  `}>
        <div className="grid w-fit grid-cols-2 gap-4 p-2 lg:w-[96%] lg:grid-cols-3 lg:gap-9 lg:p-4">
          {Courses.length <= 0 ? (
            <NullState
              mainText="No Courses Yet"
              miniText="Stay tuned! Updates will appear here."
            />
          ) : (
            Courses.map(category =>
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
