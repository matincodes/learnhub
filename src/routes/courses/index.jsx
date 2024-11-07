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
import  SearchCourseCard from '@/components/widgets/couse_search_card'
import Footer from '@/components/footer/footer'



export const Route = createFileRoute('/courses/')({
  component: Course,
})

function Course() {
  const [courseTitle, setCourseTitle] = useState('Frontend Development')
  window.localStorage.setItem('category', courseTitle)

  const handleSelecetChange = (value) =>{
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

      <div className="w-full flex items-center lg:py-[20px] px-[20px] lg:px-[90px] space-x-4">
      <span className="font-san font-[600]"> 
        Filters:
      </span>
        <Select onValueChange={handleSelecetChange}>
          <SelectTrigger className="w-[210px]">
            <SelectValue placeholder="All Courses"/>
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {Courses.map(({category, id}) => (
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



      <div className="grid grid-cols-2  lg:grid-cols-3 gap-y-[30px] gap-x-[15px] lg:gap-x-[50px] lg:px-[90px] px-[20px]  py-[40px]">
              {Courses.map(category =>
                courseTitle === category.category
                  ? category.courses.map((item, id) => (
                      <div
                        className="grid"
                        key={id}
                      >
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
              )}
        </div>


        {/* Footer */}
        <Footer/>
        {/* Footer */}
    </>
  )
}
