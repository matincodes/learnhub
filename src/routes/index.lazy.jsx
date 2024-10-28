import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import NavBar from '@/components/navBar/navBar'
import Header from '@/components/header/header'
import TestimonialCard from '@/components/testimonialCard/testimonialCard'
import { Courses } from '@/data/courses'
import CourseOption from '@/components/options/options'
import SearchCourseCard from '@/components/widgets/couse_search_card' 

import {
  cardSectionOne,
  cardSectionTwo,
  paymentSection,
  testimonialSection,
} from '@/data/HomePageCard'
import Footer from '@/components/footer/footer'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: App,
})

function App() {
  const stopNav = useRef(null)
  const [navStatus, setNavStatus] = useState('sticky')
  const [courseOption, setCourseOption] = useState('FrontEnd Development')

  // For Filtering Courses
  const getOptionValue = (e) =>{
    setCourseOption(e.target.value)
  }
  
  // useEffect(() =>{
  //   console.log(getOption)
  // }, [getOption])

  useEffect(() => {
    let lastScrollY = window.scrollY // Keep track of the last scroll position

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // When the section is intersecting and scrolling downwards
            if (window.scrollY > lastScrollY) {
              setNavStatus('static')
            }
          } else {
            // When leaving the section while scrolling upwards
            if (window.scrollY < lastScrollY) {
              setNavStatus('sticky')
            }
          }
        })

        // Update the last scroll position
        lastScrollY = window.scrollY
      },
      {
        threshold: 0.1, // Trigger when 99% of the section is visible
      },
    )

    if (stopNav.current) {
      observer.observe(stopNav.current)
    }
    // Cleanup observer on component unmount
    return () => {
      if (stopNav.current) {
        observer.unobserve(stopNav.current)
      }
    }
  }, [])

  return (
    <>
      <NavBar NavStatus={navStatus} />
      {/* Banner */}
      <div className="flex flex-col items-center justify-center space-y-8 p-[30px] text-center lg:space-y-14">
        <div className="">
          <h1 className="font-san text-[40px] font-extrabold leading-[40px] text-dark_green lg:text-[60px] lg:leading-[50px]">
            Unlock New Tech Skills with
          </h1>
          <h1 className="mb-6 mt-2 w-full font-san text-[40px] font-extrabold leading-[40px] text-dark_green lg:text-[60px] lg:leading-[50px]">
            Coderina LearnHub
          </h1>

          <p className="p-0 font-san text-[16px] leading-7 text-[#848484b7] lg:text-[20px]">
            Build new skills with hands-on courses and interactive <br />{' '}
            learning. Start your journey today.
          </p>
        </div>

        <div className="space-x-[50px]">
          <Button
            className="w-fit border-2 border-normal_green bg-normal_green px-[15px] py-[25px] font-san text-[16px] text-white"
            asChild
          >
            <Link to="/signup"> Get Started </Link>
          </Button>
          <Button
            className="w-fit border-2 border-normal_green px-[15px] py-[25px] font-san text-[16px] text-normal_green"
            asChild
          >
            <Link to="/signup"> View Pricing </Link>
          </Button>
        </div>

        <div className="grid w-full place-content-center">
          <img
            src="/assets/mockups/desktop_banner_mockup.svg"
            alt=""
            className="hidden lg:flex"
          />
          <img
            src="/assets/mockups/desktop_responsive_banner_mockup.svg"
            alt=""
            className="mt-12 flex lg:hidden"
          />
        </div>
      </div>
      {/* Banner */}

      {/* Explore Courses */}
      <div className="grid place-content-center">
        <Header
          main_text="Explore various Courses with Coderina LearnHub"
          width="50%"
        />
        
        <div className="flex place-content-center space-x-6 p-4">
          {Courses.map(courseTitle => (
            <CourseOption key={courseTitle.id} category={courseTitle.category} getOptionValue={getOptionValue} active={courseOption} />  
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-y-4 rounded-lg bg-white p-4 sm:p-6">
          <div className="no-scrollbar w-full overflow-x-auto  ">
              <div className="flex w-full min-w-max items-start gap-x-5 sm:gap-x-8">
                {Courses.map(category => (
                  courseOption === category.category ? 
                  
                  category.courses.map((item, index) =>(
                  <SearchCourseCard key={index} image={item.image} title={item.title} lesson={item.lesson} duration={item.duration} />
                  )) 
                  : '' 
                ))}
              </div>
          </div>
        </div>

      </div>
      {/* Explore Courses */}

      {/* Why Choose Us */}
      <div>
        {/* Header */}
        <Header main_text="Why Choose Coderina LearnHub" width="40%" paragraph={'Explore a variety of features designed to enhance your learning experience. Discover tools that learning engaging and effective!'} />
        {/* Header */}

        {/* Card 1 */}
        <div className="relative z-10 grid gap-6 p-[10px] font-san lg:p-[70px] ">
          {cardSectionOne.map(content => (
            <Card
              key={content.id}
              className={`sticky top-[0px] flex h-[35vh] w-full flex-col rounded-2xl bg-[#D7E4DE] outline-none ${content.id === 2 ? 'bg-dark_green text-white' : ''} ${content.id === 3 ? 'top-[350px] col-span-12 lg:h-[60vh]' : 'col-span-12 lg:col-span-6 lg:h-[60lvh]'} overflow-hidden`}
            >
              {content.id === 1 ? (
                <>
                  <img
                    src={'/assets/mockups/Courses_1.png'}
                    className="absolute bottom-[0px] hidden w-full border-none outline-none lg:flex"
                    alt=""
                  />

                  {/* Responsivness */}
                  <img
                    src={'/assets/mockups/Courses_1_Responsive.svg'}
                    className="absolute bottom-[0px] right-0 flex w-[120px] border-none outline-none lg:hidden"
                    alt=""
                  />
                  {/* Responsivness */}
                </>
              ) : content.id === 2 ? (
                <div className="relative flex h-full">
                  <img
                    src={'/assets/mockups/Courses_2_lg.png'}
                    className="absolute bottom-[10px] w-[550px] right-[10px] hidden rounded-br-xl border-none outline-none lg:flex"
                    alt=""
                  />

                  <img
                    src={'/assets/mockups/Courses_2_sm.png'}
                    className="absolute bottom-[-10px] right-0 hidden border-none outline-none lg:right-[140px] lg:flex 2xl:right-[160px]"
                    alt=""
                  />

                  {/* Responsiveness */}
                  <img
                    src={'/assets/mockups/Courses_2_lg_responsive.svg'}
                    className="absolute bottom-[10px] right-[10px] z-0 flex w-[170px] rounded-br-xl border-none outline-none lg:hidden"
                    alt=""
                  />

                  <img
                    src={'/assets/mockups/Courses_2_sm.png'}
                    className="absolute bottom-[-5px] right-0 flex w-[130px] border-none outline-none lg:hidden"
                    alt=""
                  />
                  {/* Responsiveness */}
                </div>
              ) : content.id === 3 ? (
                <div className="relative flex h-full">
                  <img
                    src={'/assets/mockups/Courses_3_lg.svg'}
                    className="absolute bottom-[-270px] right-[-460px] hidden rounded-br-xl border-none outline-none lg:flex lg:w-[1200px] 2xl:bottom-[-360px] 2xl:right-[-600px] 2xl:w-[1590px]"
                    alt=""
                  />
                  {/* <img
                src={'/assets/mockups/achievements.png'}
                className="absolute lg:flex hidden right-[2px] border-none outline-none"
                alt=""
              /> */}
                </div>
              ) : (
                ''
              )}

              <div
                className={`absolute bottom-0 lg:top-0 ${content.id === 1 ? '' : ''} w-full  p-2`}
              >
                <CardHeader className=" p-[10px] lg:pt-[45px] ">
                  <CardTitle className="w-[50%] p-0 text-[25px] leading-[30px] lg:w-full lg:text-[35px]">
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-[10px] lg:p-[15px]">
                  <p
                    className={`w-[55%] text-[15px] ${content.id === 3 ? 'lg:w-[40%]' : 'lg:w-[60%]'} ${
                      content.id === 2 ? 'text-[#ffffff]' : ''
                    } text-[#292929]`}
                  >
                    {content.description}
                  </p>
                  {content.id === 1 ? <div ref={stopNav}></div> : <></>}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        {/* Card 1 */}

        {/* Card 2 */}
        <div className="relative z-30 grid gap-8 bg-transparent p-[10px] font-san lg:grid-cols-3 lg:p-[70px]">
          {cardSectionTwo.map(content => (
            <Card
              key={content.id}
              className={`h-[40lvh] overflow-hidden rounded-2xl bg-dark_green text-white outline-none lg:h-[75lvh] ${content.id === 3 ? 'grid items-center lg:place-content-center' : content.id === 2 ? 'bg-[#D7E4DE] text-normal_green' : ''} sticky top-[0px]`}
            >
              {content.id === 1 ? (
                <div className="absolute  h-full w-[100%] overflow-hidden">
                  <img
                    src={`/assets/mockups/learnhub_4_large.png`}
                    className="absolute bottom-2 w-[270px] right-2 hidden rounded-br-xl outline-none lg:flex"
                    alt=""
                  />

                  {/* Responsive images */}
                  <img
                    src={'/assets/mockups/learnhub_4_large_responsive.svg'}
                    className="absolute bottom-[0px] right-[-20px] flex w-[200px] border-none outline-none lg:hidden"
                    alt=""
                  />
                  {/* <img
                    src={`/assets/mockups/learnhub_4_large_responsive.svg`}
                    className="absolute -right-[25px] flex h-full w-[340px] outline-none lg:hidden"
                    alt=""
                  /> */}
                </div>
              ) : content.id === 2 ? (
                <div className="relative flex h-full overflow-hidden lg:w-[100%]">
                  <img
                    src={`/assets/mockups/learnhub_4.png`}
                    className="absolute bottom-2 right-2 w-[350px] hidden rounded-br-xl outline-none lg:flex"
                    alt=""
                  />

                  <img
                    src={`/assets/mockups/Courses_3_sm.png`}
                    className="absolute bottom-1 right-2 hidden w-[220px] outline-none lg:flex"
                    alt=""
                  />

                  {/* Responsive images */}
                  <img
                    src={'/assets/mockups/learnhub_5_large_responsive.svg'}
                    className="absolute bottom-[0px] right-[-20px] flex w-[270px] border-none outline-none lg:hidden"
                    alt=""
                  />
                  <img
                    src={'/assets/mockups/learnhub_5_small_responsive.svg'}
                    className="absolute bottom-[0px] right-[-0px] flex w-[160px] border-none outline-none lg:hidden"
                    alt=""
                  />
                </div>
              ) : (
                <div className="absolute h-full w-full">
                  <img
                    src={`/assets/mockups/product_1.png`}
                    className="absolute bottom-0 w-[250px] outline-none"
                    alt=""
                  />
                  <img
                    src={`/assets/mockups/product_2.png`}
                    className="absolute right-0 top-0 w-[200px] outline-none"
                    alt=""
                  />
                </div>
              )}

              <div
                className={`absolute ${content.id === 3 ? 'relative place-items-end' : 'bottom-0 lg:top-0'} p-2`}
              >
                <CardHeader className="p-[10px] lg:pt-[45px]">
                  <CardTitle
                    className={`leading-[30px] lg:w-full ${content.id === 3 ? 'w-[75%] text-[30px] leading-10 lg:text-[40px]' : 'w-[40%] text-[25px] lg:text-[30px]'}`}
                  >               
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-[10px] lg:p-[13px]">
                  <p
                    className={`w-[70%] text-[14px] ${content.id === 1 ? 'text-[#CCCCCC]' : 'text-paragraph'} leading-[30px] lg:w-full`}
                  >
                    {content.description}
                  </p>
                  {content.id === 3 ? (
                    <Button className="mt-8 rounded-xl bg-light_green p-6 font-san text-[18px] font-semibold text-normal_green">
                      Get Started
                    </Button>
                  ) : (
                    <div></div>
                  )}
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        {/* Card 2 */}
      </div>
      {/* </div> */}
      {/* Why Choose Us */}

      {/* Testimonial */}
      <div className="">
        <Header
          main_text="What Users Say About Coderina LearnHub"
          position
          width="50%"
          paragraph={'See how we transformed learning for our users. hear their feedbacks and experiences!'}
        />

        <div className="grid place-content-center gap-12 p-[10px] lg:grid-cols-2 lg:gap-8 lg:p-[50px]">
          {testimonialSection.map(content => (
            <TestimonialCard
              key={content.id}
              testimony={content.testimony}
              author={content.author}
            />
          ))}
        </div>
      </div>
      {/* Testimonial */}

      <div className="relative mt-12 flex h-[70vh] flex-col bg-[#F9FBFA] lg:h-full lg:flex-row">
        <div className="lg:basis-[50%]">
          <img
            src="/assets/mockups/mockup_left.svg"
            alt=""
            className="hidden w-[600px] lg:flex"
          />
          <img
            src="/assets/mockups/courses_mini_1.svg"
            alt=""
            className="flex w-[250px] lg:hidden"
          />
        </div>

        <div className="absolute flex h-[40lvh] w-full flex-col items-center justify-center space-y-4 text-center lg:relative lg:h-auto lg:basis-[50%]">
          <p className="font-san text-[35px] font-semibold leading-10 text-[#303031] lg:font-medium">
            The course content you <br /> need, ready for you
          </p>
          <Button className="z-20 w-fit rounded-xl bg-normal_green font-san font-semibold text-white hover:bg-[#FAFFFD] hover:text-normal_green">
            Get Started
          </Button>

          <img
            src="/assets/mockups/courses_mini_2.svg"
            alt=""
            className="absolute -bottom-[120px] right-0 flex basis-[50%] lg:hidden"
          />
          <img
            src="/assets/mockups/mockup_right.svg"
            alt=""
            className="absolute -bottom-12 hidden basis-[50%] lg:flex"
          />
        </div>
      </div>

      {/* Gradient */}
      <div className="relative z-10 bg-gradient-to-tr from-[#fff] lg:h-[11vh]"></div>
      {/* Gradient */}

      <Footer />
    </>
  )
}
