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

  const performAction = () => {
    console.log("You've reached the target section!");
    // Add your custom action here (e.g., API call, animation, etc.)
  };


  useEffect(() => {
    let lastScrollY = window.scrollY; // Keep track of the last scroll position

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // When the section is intersecting and scrolling downwards
          if (window.scrollY > lastScrollY) {
            setNavStatus('static');
          }
        } else {
          // When leaving the section while scrolling upwards
          if (window.scrollY < lastScrollY) {
            setNavStatus('sticky');
          }
        }
      });

      // Update the last scroll position
      lastScrollY = window.scrollY;
      console.log(navStatus, lastScrollY)
    },
    {
      threshold: 0.1, // Trigger when 99% of the section is visible
    }
  );

  if (stopNav.current) {
    observer.observe(stopNav.current);
  }
  // Cleanup observer on component unmount
  return () => {
    if (stopNav.current) {
      observer.unobserve(stopNav.current);
    }
  };
}, []);





  return (
    <>
      <NavBar NavStatus={navStatus} />
      {/* Banner */}
      <div className="flex flex-col items-center justify-center space-y-8 lg:space-y-14 p-[30px] text-center">
        <div className="">
          <h1 className="text-[40px] font-san font-extrabold text-dark_green  lg:text-[60px] leading-[40px] lg:leading-[50px]">
          Unlock New Tech Skills with
          </h1>
          <h1 className=" w-full text-[40px] font-san font-extrabold text-dark_green lg:text-[60px] leading-[40px] lg:leading-[50px] mt-2 mb-6 ">
          Coderina LearnHub
          </h1>
          
        <p className="lg:text-[20px] text-[16px] p-0 text-[#848484b7] font-san leading-7  ">
        Build new skills with hands-on courses and interactive <br /> learning. Start your journey today.
        </p>
        </div>


        <Button className="w-fit bg-normal_green font-san text-white p-[25px] text-[16px]" asChild>
          <Link to='/signup'> Get Started </Link>
        </Button>


        <div className="grid w-full place-content-center" >
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
        <Header
          main_text="Why Choose Coderina LearnHub"
        />
        {/* Header */}


      

        {/* Card 1 */}
              <div className="grid gap-6 lg:p-[65px] p-[10px] font-san z-10 relative">
              
          {cardSectionOne.map(content => (
            <Card
              key={content.id}
              className={`flex h-[40vh] w-full flex-col bg-[#D7E4DE] outline-none  rounded-2xl sticky top-[0px] ${content.id === 2 ? 'bg-dark_green text-white' : '' } ${content.id === 3 ? 'col-span-12 top-[350px] ' : 'col-span-12 lg:col-span-6 lg:h-[60lvh]'}  overflow-hidden ` } 
            >

            {content.id === 1 ? (<>
              <img
                src={'/assets/mockups/Courses_1.png'}
                className="absolute lg:flex hidden bottom-[0px] w-full border-none outline-none"
                alt=""
              />


              {/* Responsivness */}
              <img
                src={'/assets/mockups/Courses_1_Responsive.png'}
                className="absolute lg:hidden flex right-[-50px] w-[75%] border-none outline-none"
                alt=""
              />
              {/* Responsivness */}
            </>)
           
            :
            content.id === 2 ?
            (
              <div className="flex relative h-full">


              <img
                src={'/assets/mockups/Courses_2_lg.png'}
                className="absolute lg:flex hidden bottom-[10px] right-[10px] w-full rounded-br-xl border-none outline-none"
                alt=""
              />
              <img
                src={'/assets/mockups/Courses_2_sm.png'}
                className="absolute lg:flex hidden bottom-[-5px] 2xl:right-[160px] lg:right-[140px] border-none outline-none"
                alt=""
              />
              </div>
              )
              :
               content.id === 3 ? (
                <div className="flex relative h-full">


              <img
                src={'/assets/mockups/Courses_3_lg.png'}
                className="absolute lg:flex hidden bottom-[0px] right-[0px] w-[500px]  rounded-br-xl border-none outline-none"
                alt=""
              />
              <img
                src={'/assets/mockups/Courses_3_sm.png'}
                className="absolute lg:flex hidden bottom-[0px] right-[320px] w-[250px] border-none outline-none"
                alt=""
              />
              </div>
               )
              :
              ('')
           
            }


              <div className={`absolute ${content.id === 1 ? '' : ''} w-full`}>
              
                <CardHeader >
                  <div
                    className={`h-[60px] w-[60px] rounded-full bg-dark_green lg:hidden ${content.id === 1 ? 'hidden' : 'grid place-content-center'}`}
                  >
                    <img src="/assets/shield.svg" className="w-[20px]" alt="" />
                  </div>
                  <CardTitle className="lg:text-[35px] lg:w-full w-[40%] leading-[30px]" >{content.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`w-[70%] ${content.id === 3 ? 'lg:w-[40%]' : 'lg:w-[60%]'} ${content.id===2 ? 'text-[#d4d3d3a1]' :
                    ''}  text-paragraph`}
                  >
                    {content.description}
                  </p>
                {content.id===1 ? (<div ref={stopNav}></div>) : (<></>)}
                </CardContent>

              </div>
            </Card>
          ))}
        </div>
        {/* Card 1 */}



        {/* Card 2 */}
        <div className="grid gap-8 lg:p-[50px] p-[10px] font-san lg:grid-cols-3 z-30 relative bg-transparent ">
          {cardSectionTwo.map(content => (
            <Card
              key={content.id}
              className={`h-[40lvh] overflow-hidden rounded-2xl text-white bg-dark_green outline-none lg:h-[85lvh] ${content.id === 3 ? 'grid items-center lg:place-content-center' : content.id===2 ? 'bg-[#D7E4DE]  text-normal_green' : ''} sticky top-[0px]`}
            >
              {content.id === 1 ? (
                <div className="absolute h-full w-[100%] overflow-hidden">
                  <img
                    src={`/assets/mockups/learnhub_4.png`}
                    className="absolute right-2 bottom-2 rounded-br-xl hidden outline-none lg:flex"
                    alt=""
                  />


                 
                  {/* Responsive images */}
                  <img
                    src={`/assets/mockups/learnhub_4_mini_responsive.svg`}
                    className="absolute -top-[10px] right-[40px] flex w-[370px] outline-none lg:hidden"
                    alt=""
                  />


                  <img
                    src={`/assets/mockups/learnhub_4_large_responsive.svg`}
                    className="absolute -right-[25px] flex h-full w-[340px] outline-none lg:hidden"
                    alt=""
                  />
                </div>
              ) : content.id === 2 ? (
                <div className="relative flex h-full lg:w-[100%] overflow-hidden">
                  <img
                    src={`/assets/mockups/Courses_3_sm.png`}
                    className="absolute hidden bottom-1 -right-6 outline-none lg:flex"
                    alt=""
                  />


                  {/* <img
                    src={`/assets/mockups/learnhub_5_right.svg`}
                    className="absolute bottom-[-20px] -right-[30px] hidden h-full w-[330px] lg:flex"
                    alt=""
                  /> */}


                  {/* Responsive images */}
                  <img
                    src={`/assets/mockups/learnhub_5_left_responsive.svg`}
                    className="absolute right-[70px] top-[5px] flex w-[370px] outline-none lg:hidden"
                    alt=""
                  />


                  <img
                    src={`/assets/mockups/learnhub_5_right_responsive.svg`}
                    className="absolute -right-[25px] flex h-full w-[340px] outline-none lg:hidden"
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

                  <img
                    src={`/assets/mockups/learnhub_5_right_responsive.svg`}
                    className="absolute -right-[25px] flex h-full w-[340px] outline-none lg:hidden"
                    alt=""
                  />
                {/* </div> */}
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
                className={`absolute ${  content.id === 3 ? 'relative place-items-end' : 'bottom-0 lg:top-0'}`}
              >
                <CardHeader>
                  <CardTitle className={`text-[25px] lg:w-full  leading-[30px] ${content.id === 3 ? 'lg:text-[40px] leading-10 w-[60%]' : 'lg:text-[30px] w-[40%]'}`}>
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className=''>
                  <p className={`w-full sm:w-[70%] text-[15px] ${content.id === 1 ? 'text-[#CCCCCC]' : 'text-paragraph'} lg:text-[17px] lg:w-full leading-[30px]`}>
                    {content.description}
                  </p>
                  {content.id === 3 ? (
                    <Button className="rounded-xl p-6 bg-light_green font-san font-semibold text-[18px] text-normal_green mt-8">
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
          main_text="What the community says about LearnHub"
          position
        />


        <div className="grid place-content-center lg:gap-8 gap-12 p-[10px] lg:grid-cols-2 lg:p-[50px]">
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

        <div className="absolute flex h-full w-full flex-col items-center justify-center space-y-4 text-center lg:relative lg:h-auto lg:basis-[50%]">
          <p className="font-san text-[35px] font-semibold leading-10 text-[#303031] lg:font-medium">
            The course content you <br /> need, ready for you
          </p>
          <Button className="w-fit rounded-xl bg-normal_green font-san font-semibold text-white hover:bg-[#FAFFFD] hover:text-normal_green ">
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
      <div className="relative z-10 h-[11vh] bg-gradient-to-tr from-[#fff]"></div>
      {/* Gradient */}

      <Footer />
    </>
  )
}
