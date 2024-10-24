import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import NavBar from '@/components/navBar/navBar'
import Header from '@/components/header/header'
import TestimonialCard from '@/components/testimonialCard/testimonialCard'
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

        <Button
          className="w-fit bg-normal_green p-[25px] font-san text-[16px] text-white"
          asChild
        >
          <Link to="/signup"> Get Started </Link>
        </Button>

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

      {/* Why Choose Us */}
      <div>
        {/* Header */}
        <Header main_text="Why Choose Coderina LearnHub" />
        {/* Header */}

        {/* Card 1 */}
        <div className="relative z-10 grid gap-6 p-[10px] font-san lg:p-[65px]">
          {cardSectionOne.map(content => (
            <Card
              key={content.id}
              className={`sticky top-[0px] flex h-[35vh] w-full flex-col rounded-2xl bg-[#D7E4DE] outline-none ${content.id === 2 ? 'bg-dark_green text-white' : ''} ${content.id === 3 ? 'top-[350px] col-span-12 lg:h-[60vh]' : 'col-span-12 lg:col-span-6 lg:h-[60lvh]'} overflow-hidden `}
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
                    className="absolute right-0 bottom-[0px] w-[120px] flex  border-none outline-none lg:hidden"
                    alt=""
                  />
                  {/* Responsivness */}
                </>
              ) : content.id === 2 ? (
                <div className="relative flex h-full">
                  <img
                    src={'/assets/mockups/Courses_2_lg.png'}
                    className="absolute bottom-[10px] right-[10px] hidden w-full rounded-br-xl border-none outline-none lg:flex"
                    alt=""
                  />

                  <img
                    src={'/assets/mockups/Courses_2_sm.png'}
                    className="absolute bottom-[-5px] border-none outline-none right-0 lg:right-[140px] lg:flex 2xl:right-[160px] hidden"
                    alt=""
                  />


                {/* Responsiveness */}
                <img
                    src={'/assets/mockups/Courses_2_lg_responsive.svg'}
                    className="absolute bottom-[10px] right-[10px] lg:hidden w-[170px] rounded-br-xl border-none outline-none flex z-0"
                    alt=""
                  />

                  <img
                    src={'/assets/mockups/Courses_2_sm.png'}
                    className="absolute bottom-[-5px] border-none outline-none right-0 lg:hidden flex w-[130px]"
                    alt=""
                  />
                {/* Responsiveness */}

                </div>
              ) : content.id === 3 ? (
                <div className="relative flex h-full ">
                  <img
                    src={'/assets/mockups/Courses_3_lg.svg'}
                    className="absolute bottom-[-270px] right-[-460px] 2xl:bottom-[-360px] 2xl:right-[-600px] hidden 2xl:w-[1590px] lg:w-[1200px] rounded-br-xl border-none outline-none lg:flex"
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

              <div className={`absolute  lg:top-0 bottom-0 ${content.id === 1 ? '' : ''} w-full`}>
                <CardHeader className='p-[10px] lg:p-[15px]'>
                  <CardTitle className="w-[50%] leading-[30px] p-0 text-[25px] lg:w-full lg:text-[35px]">
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className='p-[10px] lg:p-[15px]'>
                  <p
                    className={`w-[65%] lg:text-[20px] text-[14px] ${content.id === 3 ? 'lg:w-[40%]' : 'lg:w-[60%]'} ${
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
        <div className="relative z-30 grid gap-8 bg-transparent p-[10px] font-san lg:grid-cols-3 lg:p-[50px]">
          {cardSectionTwo.map(content => (
            <Card
              key={content.id}
              className={`h-[40lvh] overflow-hidden rounded-2xl bg-dark_green text-white outline-none lg:h-[75lvh] ${content.id === 3 ? 'grid items-center lg:place-content-center' : content.id === 2 ? 'bg-[#D7E4DE] text-normal_green' : ''} sticky top-[0px]`}
            >
              {content.id === 1 ? (
                <div className="absolute h-full w-[100%] overflow-hidden">
                  <img
                    src={`/assets/mockups/learnhub_4.png`}
                    className="absolute bottom-2 right-2 hidden rounded-br-xl outline-none lg:flex"
                    alt=""
                  />

                  {/* Responsive images */}
                  <img
                    src={'/assets/mockups/learnhub_4_large_responsive.svg'}
                    className="absolute right-[-20px] bottom-[0px] w-[200px] flex  border-none outline-none lg:hidden"
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
                    className="absolute bottom-2 right-2 hidden rounded-br-xl outline-none lg:flex "
                    alt=""
                  />

                  <img
                    src={`/assets/mockups/Courses_3_sm.png`}
                    className="absolute right-2 bottom-1 hidden outline-none lg:flex w-[250px]"
                    alt=""
                  />


                  {/* Responsive images */}
                  <img
                    src={'/assets/mockups/learnhub_5_large_responsive.svg'}
                    className="absolute right-[-20px] bottom-[0px] w-[270px] flex  border-none outline-none lg:hidden"
                    alt=""
                  />
                   <img
                    src={'/assets/mockups/learnhub_5_small_responsive.svg'}
                    className="absolute right-[-0px] bottom-[0px] w-[160px] flex  border-none outline-none lg:hidden"
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
                className={`absolute ${content.id === 3 ? 'relative place-items-end' : 'bottom-0 lg:top-0'} `}
              >
                <CardHeader className='p-[10px] lg:p-[15px]'>
                  <CardTitle
                    className={` leading-[30px] lg:w-full ${content.id === 3 ? ' w-[75%] leading-10 text-[30px] lg:text-[40px]' : 'w-[40%] text-[25px] lg:text-[30px]'}`}
                  >
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-[10px] lg:p-[15px]">
                  <p
                    className={`text-[14px] w-[70%] ${content.id === 1 ? 'text-[#CCCCCC]' : 'text-paragraph '} leading-[30px] lg:w-full lg:text-[17px]`}
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
        <Header main_text="What the community says about LearnHub" position />

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
          <Button className="w-fit rounded-xl bg-normal_green font-san font-semibold text-white hover:bg-[#FAFFFD] hover:text-normal_green z-20">
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
      <div className="relative z-10 lg:h-[11vh] bg-gradient-to-tr from-[#fff]"></div>
      {/* Gradient */}

      <Footer />
    </>
  )
}
