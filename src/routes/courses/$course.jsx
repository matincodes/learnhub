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


export const Route = createFileRoute('/courses/$course')({
  component: Course,
})


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}


function Course() {
  const { course } = Route.useParams()
  const category = window.localStorage.getItem('category')
  const coursesData = Courses.filter(course => course.category === category)
  const courses = coursesData[0].courses.find(
    courses => courses.title === course,
  )

      // State to manage whether the description is expanded or truncated
      const [isExpanded, setIsExpanded] = useState(false);


      // Function to toggle the description
      const toggleDescription = () => {
          setIsExpanded(prevState => !prevState);
      };

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
            className="lg:w-fit w-full border-2 border-normal_green bg-normal_green px-[25px] py-[25px] font-san text-[16px] text-white"
            asChild
          >
            <Link to="/"> Get Started </Link>
          </Button>
        </div>

        <div className="grid lg:h-[380px] lg:w-[1050px] w-[100%] overflow-hidden rounded-2xl ">
          <img src={courses.image} alt="" className="w-full object-cover" />
        </div>
      </div>

      {/* Description */}
      <div className="mt-[60px] flex flex-col items-center justify-center space-y-3 p-4">
        <h1 className="text-center font-san text-[30px] font-bold tracking-[2px] text-[#002214]">
          Description Of Course
        </h1>
        <p className="lg:w-[80%] w-[92%] lg:text-center font-san font-[400] leading-6 text-[#303031c5]">
                {isExpanded ? courses.description : courses.description.substring(0, 900) + '...'}
            </p>

            <a 
                onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    toggleDescription();
                }} 
                className="pt-[20px] font-san text-normal_green underline cursor-pointer"
            >
                {isExpanded ? 'Read less' : 'Read more'}
            </a>

      </div>
      {/* Description */}

      {/* Testimony */}
      <div className="mt-[60px] flex flex-col items-center justify-center space-y-7 p-4">
        <h1 className="text-center font-san text-[30px] font-semibold tracking-[2px] text-[#002214]">
          Student Testimonies
        </h1>
        <div className="flex lg:w-[88%] w-[95%]">
          <Carousel className="w-[100%]">
            <CarouselContent className=" ">
              {courses.testimonies.map(testimony => (
                <CarouselItem className="basis-[90%] lg:basis-[46%]" key={uuidv4}>
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
      <div className="p-3 mt-[60px]">
        <h1 className="text-center font-san text-[30px] font-semibold tracking-[0.7px] text-[#002214]">
          Recommended Courses
        </h1>

        <div className="grid grid-cols-2  lg:grid-cols-3 gap-y-[30px] gap-x-[15px] lg:gap-x-[50px] lg:px-[90px] px-[20px]  py-[40px]">
              {Courses.map(courseCategory =>
                category === courseCategory.category
                  ? shuffleArray(courseCategory.courses.slice(0,6).map((item) => (
                      <div
                        className="grid "
                        key={uuidv4}
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
                    )))

                  : ''
              )}
        </div>

      </div>
      {/* Recommended Courses */}


      
        {/* Footer */}
        <Footer/>
        {/* Footer */}
    </>
  )
}
