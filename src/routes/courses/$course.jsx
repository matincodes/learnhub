import { createFileRoute } from '@tanstack/react-router'
import NavBar from '@/components/navBar/navBar'
import { Courses } from '@/data/courses'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/courses/$course')({
  component: Course,
})

function Course() {
  const { course } = Route.useParams()
  const category = window.localStorage.getItem('category')
  const coursesData = Courses.filter((course) => course.category === category)
  const courses = coursesData[0].courses.find(courses => courses.title === course)

  return (
    <>
      {/* Navbar */}
      <NavBar />
      {/* Navbar */}


        <div className={`relative flex flex-col items-center p-4 border border-red-500 space-y-[60px] mt-[40px]`}>
          <div className="flex flex-col items-center border gap-6">
          <h1
            className={`text-center font-san text-[40px] font-bold leading-[38px] text-[#051911] lg:w-[70%] lg:text-[50px] lg:leading-[52px]`}
          >
            {courses.title}
          </h1>
          <Button
            className="w-fit border-2 border-normal_green bg-normal_green px-[25px] py-[25px] font-san text-[16px] text-white"
            asChild
          >
            <Link to="/signup"> Get Started </Link>
          </Button>
          </div>


          <div className="border border-green-600 w-[1050px] h-[380px] overflow-hidden grid rounded-2xl ">
          <img src={courses.image} alt="" className='w-full object-cover' />
          </div>
        </div>


          {/* Description */}
          <div className="border border-red-500 flex flex-col items-center justify-center p-4 mt-[130px] space-y-3">
               <h1 className='font-san text-[#002214] tracking-[2px] text-center text-[30px] font-bold'>Description Of Course</h1>

               <p className='text-center text-[#303031c5] leading-6 font-san font-[400] w-[80%]'>{courses.description}</p>
          </div>
          {/* Description */}

    </>
  )
}
