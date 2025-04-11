import { createFileRoute } from '@tanstack/react-router'
import NavBar from '@/components/navBar/navBar'
import { Courses } from '@/data/courses'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import TestimonialCard from '@/components/testimonialCard/testimonialCard'
import { v4 as uuidv4 } from 'uuid'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import SearchCourseCard from '@/components/widgets/couse_search_card'
import { useState } from 'react'
import Footer from '@/components/footer/footer'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Dot } from 'lucide-react'

export const Route = createFileRoute('/courses/$course')({
  component: Course,
})

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]] // Swap elements
  }
  return array
}

function Course() {
  const { course } = Route.useParams()
  const category = window.localStorage.getItem('category')
  const coursesData = Courses.filter(course => course.category === category)
  const courses = coursesData[0].courses.find(
    courses => courses.title === course,
  )

  // State to manage whether the description is expanded or truncated
  const [isExpanded, setIsExpanded] = useState(false)

  // Function to calculate total time in minutes
  const calculateTotalTimeInMinutes = courses => {
    let totalSeconds = 0

    courses.forEach(course => {
      const [minutes, seconds] = course.timeLength.split(':').map(Number)
      totalSeconds += minutes * 60 + seconds // Convert minutes to seconds and add
    })

    const totalMinutes = Math.floor(totalSeconds / 60)
    // const remainingSeconds = totalSeconds % 60;

    return `${totalMinutes} min `
  }

  // Function to toggle the description
  const toggleDescription = () => {
    setIsExpanded(prevState => !prevState)
  }

  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* Navbar */}

      <div
        className={`relative mt-[40px] flex flex-col items-center space-y-[60px] p-4`}
      >
        <div className="flex flex-col items-center gap-6">
          <h1
            className={`text-center font-san text-[40px] font-bold leading-[38px] text-[#051911] lg:w-[70%] lg:text-[50px] lg:leading-[52px]`}
          >
            {courses.title}
          </h1>
          <Button
            className="w-full border-2 border-normal_green bg-normal_green px-[25px] py-[25px] font-san text-[16px] text-white lg:w-fit"
            asChild
          >
            <Link to="/"> Get Started </Link>
          </Button>
        </div>

        <div className="grid w-[100%] overflow-hidden rounded-2xl lg:h-[380px] lg:w-[1050px]">
          <img src={courses.image} alt="" className="w-full object-cover" />
        </div>
      </div>

      {/* Description */}
      <div className="mt-[60px] flex flex-col items-center justify-center space-y-3 p-4">
        <h1 className="text-center font-san text-[30px] font-bold tracking-[2px] text-[#002214]">
          Description Of Course
        </h1>
        <p className="w-[92%] font-san font-[400] leading-6 text-[#303031c5] lg:w-[80%] lg:text-center">
          {isExpanded
            ? courses.description
            : courses.description.substring(0, 900) + '...'}
        </p>

        <a
          onClick={e => {
            e.preventDefault() // Prevent default anchor behavior
            toggleDescription()
          }}
          className="cursor-pointer pt-[20px] font-san text-normal_green underline"
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </a>
      </div>
      {/* Description */}

      {/* Course Content */}
      <div className="mt-[65px] flex flex-col place-content-center items-center p-4">
        <h1 className="text-center font-san text-[30px] font-semibold tracking-[2px] text-[#002214]">
          Course Content
        </h1>

        <div className="space-y-3 lg:w-[90%] lg:p-6">
          {courses.contents ? (
            courses.contents.map(courseContent => (
              <Accordion
                type="single"
                collapsible
                className="w-full"
                key={courseContent.id}
              >
                <AccordionItem
                  value="item-1"
                  className="overflow-hidden rounded-[8px] border"
                >
                  <AccordionTrigger className="grid">
                    <p className="flex gap-2 text-[13px] font-[600] lg:gap-0 lg:text-[18px]">
                      Section {courseContent.id}:
                      <span className="lg:pl-3">
                        {courseContent.sectionTitle}
                      </span>
                    </p>
                    <div className="flex items-center">
                      <p className="text-[12px] font-[500] lg:text-[15px]">
                        <span>{courseContent.courses.length}</span> lectures
                      </p>

                      <Dot strokeWidth={4} />

                      <p className="text-[12px] lg:text-[15px]">
                        {calculateTotalTimeInMinutes(courseContent.courses)}
                      </p>
                    </div>
                  </AccordionTrigger>

                  {courseContent.courses.map(courseTimeline => (
                    <AccordionContent
                      className={`space-y-6 border-b-red-600 bg-[white] p-1`}
                      key={courseTimeline.title}
                    >
                      <Link
                        params={{
                          lectureid: `${courseContent.id}${courseTimeline.id}`,
                        }}
                        className="flex cursor-pointer justify-between p-2"
                      >
                        <div className="flex items-center gap-4">
                          <p htmlFor="remember_password">
                            {courseTimeline.title}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <p>{courseTimeline.timeLength}</p>
                        </div>
                      </Link>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>
            ))
          ) : (
            <div className="grid place-content-center bg-normal_green text-white">
              {' '}
              <p>No Course Content For This Course</p>{' '}
            </div>
          )}
        </div>
      </div>
      {/* Course Content */}

      {/* Testimony */}
      <div className="mt-[60px] flex flex-col items-center justify-center space-y-7 p-4">
        <h1 className="text-center font-san text-[30px] font-semibold tracking-[2px] text-[#002214]">
          Student Testimonies
        </h1>
        <div className="flex w-[95%] lg:w-[88%]">
          <Carousel className="w-[100%]">
            <CarouselContent className=" ">
              {courses.testimonies.map(testimony => (
                <CarouselItem
                  className="basis-[90%] lg:basis-[46%]"
                  key={uuidv4}
                >
                  <TestimonialCard
                    key={uuidv4}
                    testimony={testimony.testimony}
                    author={testimony.author}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious className="hidden lg:flex" /> */}
            {/* <CarouselNext className="hidden lg:flex" /> */}
          </Carousel>
        </div>
      </div>
      {/* Testimony */}

      {/* Recommended Courses */}
      <div className="mt-[60px] p-3">
        <h1 className="text-center font-san text-[30px] font-semibold tracking-[0.7px] text-[#002214]">
          Recommended Courses
        </h1>

        <div className="flex items-center justify-center p-5">
          <div className="grid w-fit grid-cols-1 items-end gap-9 p-4 md:grid-cols-2 lg:w-[96%] lg:grid-cols-3">
            {Courses.map(courseCategory =>
              category === courseCategory.category
                ? shuffleArray(
                    courseCategory.courses.slice(0, 6).map(item => (
                      <div className="grid" key={uuidv4}>
                        <a href={`/courses/${item.title}`}>
                          <SearchCourseCard
                            image={item.image}
                            title={item.title}
                            lesson={item.lesson}
                            duration={item.duration}
                          />
                        </a>
                      </div>
                    )),
                  )
                : '',
            )}
          </div>
        </div>
      </div>
      {/* Recommended Courses */}

      {/* Footer */}
      <Footer />
      {/* Footer */}
    </>
  )
}
