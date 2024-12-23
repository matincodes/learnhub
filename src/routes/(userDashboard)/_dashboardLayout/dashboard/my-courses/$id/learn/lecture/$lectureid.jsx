import { createFileRoute, useParams, Link } from '@tanstack/react-router'
import ReactPlayer from 'react-player/lazy'
import { UserCourses } from '@/data/userCourses'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TestimonialCard from '@/components/testimonialCard/testimonialCard'
import { v4 as uuidv4 } from 'uuid'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Dot } from 'lucide-react'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/(userDashboard)/_dashboardLayout/dashboard/my-courses/$id/learn/lecture/$lectureid')({
  component: GetId
})

function GetId(){
  // Fetch the course data based on the course ID
  const { id, lectureid } = useParams('')
  const [isExpanded, setIsExpanded] = useState(false)
  const initialHash = location.hash.substring(1)
  const [hash, setHash] = useState(initialHash || 'coursecontent')
  const firstContentId = lectureid.slice(0,3)
  const CourseVideoId = lectureid.slice(-3)

  const firstCourse = UserCourses.filter(course => course.title == id)[0]
  const videourl = firstCourse?.contents.filter(courseContent => courseContent.id == firstContentId)[0]?.courses.filter(course => course.id == CourseVideoId)[0].videourl

  console.log(firstCourse, videourl, firstContentId)
        
  const getValue = e => {
    switch (e) {
      case 'coursecontent':
        setHash('coursecontent')
        break
      case 'description':
        setHash('description')
        break
      case 'review':
        setHash('review')
        break
      default:
        break
      }
    }
    
    // console.log(initialHash)
    useEffect(() => {
      window.location.hash = hash
    }, [hash, lectureid])
  // Update the hash in the URL whenever it changes

  // State to manage whether the description is expanded or truncated

  // Function to toggle the description
  const toggleDescription = () => {
    setIsExpanded(prevState => !prevState)
  }

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

  // Get The Current Video URL

  return (
    <div className="relative grid space-y-6">
      <div className="w-full lg:max-w-[1000px] overflow-hidden border">
        <ReactPlayer
          url={videourl}
          width
          // height
          controls={true}
        />
      </div>

      <Tabs
        onValueChange={getValue}
        value={hash}
        className="w-full bg-white p-6 lg:max-w-[1000px] relative"
      >
        <TabsList className="m-0 border-b border-[#8080804d] p-0">
          <TabsTrigger value="coursecontent">Course Content</TabsTrigger>
          <TabsTrigger value="description">Descriptions</TabsTrigger>
          <TabsTrigger value="review">Review</TabsTrigger>
        </TabsList>

        <TabsContent value="coursecontent" className="space-y-3 font-san">
          {firstCourse.contents.map(courseContent => (
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-[8px] border-0 bg-[#F7F7F7B2] px-3"
              key={courseContent.id}
            >
              <AccordionItem value="item-1">
                <AccordionTrigger className="grid">
                  <p className="lg:text-[18px] text-[15px] font-[600]">
                    Section {courseContent.id}:
                    <span className="pl-3">{courseContent.sectionTitle}</span>
                  </p>
                  <div className="flex items-center">
                    <p className="font-[500]">
                      <span>{courseContent.courses.length}</span> lectures
                    </p>

                    <Dot strokeWidth={4} />

                    <p>{calculateTotalTimeInMinutes(courseContent.courses)}</p>
                  </div>
                </AccordionTrigger>

                {courseContent.courses.map(courseTimeline => (
                  <AccordionContent
                    className={`${CourseVideoId == courseTimeline.id ? 'bg-[#8080801d]' : ''} space-y-4 p-1`}
                    key={courseTimeline.title}
                  >

                    <Link
                      params={{
                        lectureid: `${courseContent.id}${courseTimeline.id}`,
                      }}
                      className="flex cursor-pointer justify-between p-2"
                    >
                      <div className="flex items-center gap-4 ">
                        
                    <input
                      type="checkbox"
                      name="remember_password"
                      id="remember_password"
                      className="relative h-5 w-5 appearance-auto accent-normal_green"
                    />
                        <p htmlFor="remember_password">{courseTimeline.title}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <img
                          src="/assets/media-player.png"
                          alt=""
                          className="w-[20px]"
                        />{' '}
                        <p>{courseTimeline.timeLength}</p>
                      </div>
                    </Link>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>
          ))}
        </TabsContent>
        {/* Content */}

        {/* Description */}
        <TabsContent value="description">
          {/* <p> {firstCourse.description} </p> */}
          <p className="mb-4 font-san font-[400] leading-6 text-[#303031c5]">
            {isExpanded
              ? firstCourse.description
              : firstCourse.description.substring(0, 900) + '...'}
          </p>

          <a
            onClick={f => {
              f.preventDefault() // Prevent default anchor behavior
              toggleDescription()
            }}
            className="cursor-pointer font-san text-normal_green underline"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </a>
        </TabsContent>
        {/* Description */}

        {/* Reviews */}
        <TabsContent value="review" className="grid space-y-12">
          <div className="space-y-2">
            <b className="p-2">Add Review</b>
            <Textarea
              placeholder="How Was Your Experience"
              className="w-full bg-[#D9D9D9] placeholder:text-[#2a2a2ab7] lg:w-[50%]"
            />

            <Button
              className="w-fit bg-normal_yellow px-[25px] py-[20px] font-san text-[16px] text-white"
              // asChild
            >
              Submit Review
            </Button>
          </div>

          <div className="grid space-y-3">
            <b className="text-[20px]">Other student review</b>
            <div className="grid gap-3 lg:grid-cols-2">
            {firstCourse.testimonies.length <= 0 
            ? 
            <div className='flex flex-col items-center justify-center text-center '>
              <img src="/assets/Chat.png" alt="" className='w-[300px] mb-5' />
                <p className='text-[#303031] font-semibold'>No comments yet</p>
                <span className='text-[#808080] text-[14px] font-medium'>Be the first to talk about your experience</span>
            </div> 
            
            : (
              firstCourse.testimonies.map(testimony => (
                <TestimonialCard
                  key={uuidv4}
                  testimony={testimony.testimony}
                  author={testimony.author}
                />
              ))
            )
            }
            </div>
          </div>
        </TabsContent>
      </Tabs>
      {/* <CourseTab getValue={getValue} hash={hash} firstCourse={firstCourse} calculateTotalTimeInMinutes={calculateTotalTimeInMinutes} isExpanded={isExpanded} toggleDescription={toggleDescription} /> */}
    </div>
  )
}