import {
  createFileRoute,
  Link,
  useLoaderData,
  useParams,
} from '@tanstack/react-router'
import { useEffect, useState, useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Dot } from 'lucide-react'

// UI Components
import NavBar from '@/components/navBar/navBar'
import Footer from '@/components/footer/footer'
import { Button } from '@/components/ui/button'
import TestimonialCard from '@/components/testimonialCard/testimonialCard'
import SearchCourseCard from '@/components/widgets/couse_search_card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import Spinner from '@/components/spinner/Spinner'

// API
import { fetchCourses } from '@/lib/apiFunctions'


// Helper function to shuffle an array
const shuffleArray = array => {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}


export const Route = createFileRoute('/courses/$course')({
  // Loader function to fetch data before the component renders
   loader: async ({ params }) => {
    const allCourseData = await fetchCourses();
    console.log('All courses data:', allCourseData)
    console.log('Params:', params.course)
    const foundCourse = allCourseData.find(course => course.title === params.course);

    console.log('Found course:', foundCourse)
    if (!foundCourse) {
      throw new Error('Course not found!');
    }
    // Return the found course and the full list for recommendations
    return { course: foundCourse, allCourses: allCourseData };
  },
  // Pending component to show while data is loading
  pendingComponent: () => (
    <div className="flex h-screen w-full items-center justify-center">
      <Spinner />
    </div>
  ),
  // Error component to show if the loader fails
  errorComponent: ({ error }) => (
    <div className="text-center">
      <p>Failed to load course: {error.message}</p>
    </div>
  ),
  component: Course,
})

function Course() {
  // Use the data fetched by the loader
  const { course, allCourses } = useLoaderData({
  from: '/courses/$course',
  strict: true,
})

  const [isExpanded, setIsExpanded] = useState(false)

   // Memoize the shuffled recommended courses to prevent re-shuffling on every render
  const recommendedCourses = useMemo(() => {
    if (!course || !allCourses) return []
    const otherCourses = allCourses.filter(c => c.title !== course.title)
    return shuffleArray(otherCourses).slice(0, 6)
  }, [allCourses, course])


  // Function to calculate total time in minutes
//  const calculateTotalTimeInMinutes = (lessons = []) => {
//     let totalSeconds = 0
//     lessons.forEach(c => {
//       const [minutes, seconds] = c.timeLength.split(':').map(Number)
//       totalSeconds += minutes * 60 + seconds
//     })
//     return `${Math.floor(totalSeconds / 60)} min`
//   }

  const toggleDescription = () => setIsExpanded(prev => !prev)

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
            {course.title}
          </h1>
          <Button
            className="w-full border-2 border-normal_green bg-normal_green px-[25px] py-[25px] font-san text-[16px] text-white lg:w-fit"
            asChild
          >
            <Link to="/"> Get Started </Link>
          </Button>
        </div>

        <div className="grid w-[100%] overflow-hidden rounded-2xl lg:h-[380px] lg:w-[1050px]">
          <img src={course.thumbnail} alt="" className="w-full object-cover" />
        </div>
      </div>

      {/* Description */}
      <div className="mt-[60px] flex flex-col items-center justify-center space-y-3 p-4">
        <h1 className="text-center font-san text-[30px] font-bold tracking-[2px] text-[#002214]">
          Description Of Course
        </h1>
        <p className="w-[92%] font-san font-[400] leading-6 text-[#303031c5] lg:w-[80%] lg:text-center">
          {isExpanded
            ? course.description
            : course.description.substring(0, 900) + '...'}
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
          {course.sections && course.sections.length > 0 ? (
            course.sections.map(content => (
              <Accordion key={content.id} type="single" collapsible className="w-full">
                <AccordionItem value={`item-${content.id}`} className="overflow-hidden rounded-[8px] border">
                  <AccordionTrigger className="grid">
                    <p className="flex gap-2 text-[13px] font-[600] lg:gap-0 lg:text-[18px]">
                      Section {content.id}:
                      <span className="lg:pl-1">{content.title}</span>
                    </p>
                    <div className="flex items-center">
                      <p className="text-[12px] font-[500] lg:text-[15px]">
                        <span>{content.subsections?.length || 0}</span> lectures
                      </p>
                      <Dot strokeWidth={4} />
                      <p className="text-[12px] lg:text-[15px]">
                        0 mins
                        {/* {calculateTotalTimeInMinutes(content.subsections)} */}
                      </p>
                    </div>
                  </AccordionTrigger>
                  {content.subsections?.map(timeline => (
                    <AccordionContent key={timeline.title} className={`space-y-6 border-b-red-600 bg-[white] p-1`}>
                      <div className="flex cursor-pointer justify-between p-2">
                        <p>{timeline.title}</p>
                        <p>{timeline.timeLength}</p>
                      </div>
                    </AccordionContent>
                  ))}
                </AccordionItem>
              </Accordion>
            ))
          ) : (
            <div className='text-center p-4'>
                <p>No course content available for this course yet.</p>
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
        {course.testimonies && course.testimonies.length > 0 ? (
            <div className="flex w-[95%] lg:w-[88%]">
            <Carousel className="w-[100%]">
              <CarouselContent>
                {course.testimonies.map(testimony => (
                  <CarouselItem className="basis-[90%] lg:basis-[46%]" key={uuidv4()}>
                    <TestimonialCard
                      testimony={testimony.testimony}
                      author={testimony.author}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        ) : (
            <p>No testimonies yet for this course.</p>
        )}
      </div>
      {/* Testimony */}

      {/* Recommended Courses */}
      <div className="mt-[60px] p-3">
        <h1 className="text-center font-san text-[30px] font-semibold tracking-[0.7px] text-[#002214]">
          Recommended Courses
        </h1>

        <div className="flex items-center justify-center p-5">
          <div className="grid w-fit grid-cols-1 items-end gap-9 p-4 md:grid-cols-2 lg:w-[96%] lg:grid-cols-3">
            {recommendedCourses.map(item => (
                <div className="grid" key={item.title}>
                    <a href={`/courses/${item.title}`}>
                    <SearchCourseCard
                        image={item.thumbnail}
                        title={item.title}
                        lesson={item.lesson}
                        duration={item.duration}
                    />
                    </a>
                </div>
            ))}
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
