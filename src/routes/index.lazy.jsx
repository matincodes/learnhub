import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import NavBar from '@/components/navBar/navBar'
import Header from '@/components/header/header'
import Content from '@/components/special/content'
import TestimonialCard from '@/components/testimonialCard/testimonialCard'
import { Courses } from '@/data/courses'
import CourseOption from '@/components/options/options'
import SearchCourseCard from '@/components/widgets/couse_search_card'
import { useUser } from '@/hooks/use-user'

import {
  cardSectionOne,
  cardSectionTwo,
  testimonialSection,
} from '@/data/HomePageCard'
import Footer from '@/components/footer/footer'

// Card
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

// Accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

import { useRef, useState } from 'react'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: App,
})

function App() {
  const stopNav = useRef(null)
  const [courseOption, setCourseOption] = useState('Frontend Development')
  const user = useUser()


  // For Filtering Courses
  const getOptionValue = e => {
    setCourseOption(e.target.value)
  }
  
  return (
    <>
     {/* NavBar */}
     <NavBar stopNav={stopNav} />
     {/* NavBar */}

     {/* Banner */}
     <div className="mt-[45px] flex flex-col items-center justify-center p-[3px] text-center lg:p-[30px]">
       <div className="flex flex-col items-center">
         <h1 className="font-san text-[40px] font-extrabold leading-[40px] text-dark_green lg:text-[60px] lg:leading-[50px]">
           Unlock New Tech Skills with
         </h1>
         <h1 className="mb-4 w-full font-san text-[40px] font-extrabold leading-[40px] text-dark_green lg:mb-6 lg:mt-2 lg:text-[60px] lg:leading-[50px]">
           Coderina LearnHub
         </h1>

         <p className="w-[90%] p-0 font-san text-[14px] text-[#404040ed] lg:w-[90%] lg:text-[20px] lg:leading-7">
           Build new skills with hands-on courses and interactive <br />{' '}
           learning. Start your journey today.
         </p>
       </div>

       <div className="mb-[70px] mt-[40px] space-x-8 lg:space-x-[35px]">
         {user === null ? (
           <>
             <Button
               className="w-fit border-2 border-normal_green bg-normal_green px-[25px] py-[25px] font-san text-[16px] text-white"
               asChild
             >
               <Link to="/courses"> View All Courses </Link>
             </Button>
             <Button
               className="w-fit border-2 border-normal_green px-[25px] py-[25px] font-san text-[16px] text-normal_green"
               asChild
             >
               <Link to="/pricing"> View Pricing </Link>
             </Button>
           </>
         ) : (
           <>
             <Button
               className="w-fit border-2 border-normal_green bg-normal_green px-[25px] py-[25px] font-san text-[16px] text-white"
               asChild
             >
               <Link to="/courses"> View All Courses </Link>
             </Button>

             <Button
               className="w-fit border-2 border-normal_green px-[25px] py-[25px] font-san text-[16px] text-normal_green"
               asChild
             >
               <Link to="/dashboard"> Visit Dashboard </Link>
             </Button>
           </>
         )}
       </div>

       <div className="grid w-full place-content-center">
         <picture>
           <img
             src="/assets/mockups/desktop_banner_mockup.svg"
             alt=""
             className="hidden lg:flex"
           />
         </picture>
         <picture>
           <img
             src="/assets/mockups/desktop_responsive_banner_mockup.svg"
             alt=""
             className="mt-12 flex lg:hidden"
           />
         </picture>
       </div>
     </div>
     {/* Banner */}

     {/* Explore Courses */}
     <div className="">
       <Header
         main_text="Explore various Courses with Coderina LearnHub"
         width="50%"
         min_width="90%"
       />

       <div className="hidden place-content-center lg:flex lg:space-x-6 lg:p-4">
         {Courses.map(courseTitle => (
           <CourseOption
             key={courseTitle.id}
             category={courseTitle.category}
             getOptionValue={getOptionValue}
             active={courseOption}
           />
         ))}
       </div>

       <div className="hidden justify-center p-3 lg:flex">
         <Carousel className="w-[100%] lg:w-[90%]">
           <CarouselContent className=" ">
             {Courses.map(category =>
               courseOption === category.category
                 ? category.courses.map((item, index) => (
                     <CarouselItem
                       className="basis-[60%] lg:basis-[30%]"
                       key={index}
                     >
                       <SearchCourseCard
                         image={item.image}
                         title={item.title}
                         lesson={item.lesson}
                         duration={item.duration}
                       />
                     </CarouselItem>
                   ))
                 : '',
             )}
           </CarouselContent>
           <CarouselPrevious className="hidden lg:flex" />
           <CarouselNext className="hidden lg:flex" />
         </Carousel>
       </div>
     </div>

     {/* Responsive */}
     <div className="p-4 lg:hidden">
       {Courses.map(course => (
         <Accordion collapsible key={course.id} className="w-full">
           <AccordionItem value={`item-${course.id}`}>
             <AccordionTrigger className="font-san text-[#303031]">
               {course.category}
             </AccordionTrigger>
             <AccordionContent>
               <div className="justify-center p-3 lg:flex">
                 <Carousel className="w-[100%] lg:w-[90%]">
                   <CarouselContent className=" ">
                     {Courses.map(category =>
                       course.category === category.category
                         ? category.courses.map((item, index) => (
                             <CarouselItem
                               className="basis-[80%] min-[500px]:basis-[60%] lg:basis-[23%]"
                               key={index}
                             >
                               <SearchCourseCard
                                 image={item.image}
                                 title={item.title}
                                 lesson={item.lesson}
                                 duration={item.duration}
                               />
                             </CarouselItem>
                           ))
                         : '',
                     )}
                   </CarouselContent>
                   <CarouselPrevious className="hidden lg:flex" />
                   <CarouselNext className="hidden lg:flex" />
                 </Carousel>
               </div>
             </AccordionContent>
           </AccordionItem>
         </Accordion>
       ))}
     </div>
     {/* Explore Courses */}

     {/* Why Choose Us */}
     <div>
       {/* Header */}
       <Header
         main_text="Why Choose Coderina LearnHub"
         width="40%"
         min_width="90%"
         paragraph={
           'Explore a variety of features designed to enhance your learning experience. Discover tools that learning engaging and effective!'
         }
       />
       {/* Header */}

       {/* Card 1 */}
       <div className="relative z-10 grid gap-6 p-[10px] font-san lg:p-[10px] lg:px-[60px]">
         {cardSectionOne.map(content => (
           <Card
             key={content.id}
             className={`relative flex h-[35vh] w-full flex-col rounded-2xl bg-[#D7E4DE] outline-none ${content.id === 2 ? 'h-[45vh] bg-dark_green text-white' : ''} ${content.id === 3 ? 'col-span-12 lg:h-[75vh]' : 'col-span-12 lg:col-span-6 lg:h-[65lvh]'} overflow-hidden`}
           >
             {content.id === 1 ? (
               <>
                 <picture>
                   <img
                     src={'/assets/mockups/Courses_1.png'}
                     className="absolute bottom-[10px] right-[10px] hidden outline-none lg:flex"
                     alt=""
                   />
                 </picture>

                 {/* Responsivness */}
                 <picture>
                   <img
                     src={'/assets/mockups/Courses_1_Responsive.svg'}
                     className="absolute bottom-[0px] right-1 flex w-[90px] border-none outline-none lg:hidden"
                     alt=""
                   />
                 </picture>
                 {/* Responsivness */}
               </>
             ) : content.id === 2 ? (
               <div className="relative flex h-full">
                 <picture>
                   <img
                     src={'/assets/mockups/Courses_2_lg.png'}
                     className="absolute bottom-[10px] right-[10px] hidden w-[550px] rounded-br-xl border-none outline-none lg:flex"
                     alt=""
                   />
                 </picture>

                 <picture>
                   <img
                     src={'/assets/mockups/Courses_2_sm.png'}
                     className="absolute bottom-[-10px] right-0 hidden border-none outline-none lg:right-[140px] lg:flex 2xl:right-[160px]"
                     alt=""
                   />
                 </picture>

                 {/* Responsiveness */}
                 <picture>
                   <img
                     src={'/assets/mockups/Courses_2_lg_responsive.svg'}
                     className="absolute bottom-[10px] right-[10px] z-0 flex w-[170px] rounded-br-xl border-none outline-none lg:hidden"
                     alt=""
                   />
                 </picture>

                 <picture>
                   <img
                     src={
                       '/assets/mockups/learnhub_4_large_responsive.svg'
                     }
                     className="absolute bottom-[-5px] right-0 flex w-[110px] border-none outline-none lg:hidden"
                     alt=""
                   />
                 </picture>
                 {/* Responsiveness */}
               </div>
             ) : content.id === 3 ? (
               <div className="relative flex h-full">
                 <picture>
                   <img
                     src={'/assets/mockups/Courses_3_lg.svg'}
                     className="absolute bottom-[10px] right-[10px] hidden w-[750px] rounded-br-xl outline-none lg:flex"
                     alt=""
                   />
                 </picture>
                 <picture>
                   <img
                     src={'/assets/mockups/Courses_3_lg_responsive.png'}
                     className="absolute bottom-[0px] right-[0px] flex w-[170px] rounded-br-xl border-none outline-none lg:hidden"
                     alt=""
                   />
                 </picture>
               </div>
             ) : (
               ''
             )}

             <div
               className={`absolute bottom-0 lg:top-0 ${content.id === 1 ? '' : ''} w-full p-2`}
             >
               <CardHeader className="p-[10px] lg:pt-[65px]">
                 <CardTitle className="w-[50%] p-0 text-[25px] leading-[25px] lg:w-full lg:text-[35px] lg:leading-[10px]">
                   {content.title}
                 </CardTitle>
               </CardHeader>
               <CardContent className="p-[10px] lg:p-[15px]">
                 <p
                   className={`w-[65%] text-[15px] ${content.id === 3 ? 'lg:w-[30%]' : 'lg:w-[50%]'} ${
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
       <div className="relative z-30 mt-[20px] grid gap-9 bg-transparent p-[10px] font-san lg:grid-cols-3 lg:p-[10px] lg:px-[60px]">
         {cardSectionTwo.map(content => (
           <Card
             key={content.id}
             className={`h-[40lvh] overflow-hidden rounded-2xl bg-dark_green text-white outline-none lg:h-[85lvh] ${content.id === 3 ? 'grid items-center lg:place-content-center' : content.id === 2 ? 'bg-[#D7E4DE] text-[#303031]' : ''} relative top-[0px]`}
           >
             {content.id === 1 ? (
               <div className="absolute h-full w-[100%] overflow-hidden">
                 <picture>
                   <img
                     src={`/assets/mockups/learnhub_4_large.png`}
                     className="absolute bottom-2 right-2 hidden w-[150px] rounded-br-xl outline-none lg:flex lg:w-[300px]"
                     alt=""
                   />
                 </picture>

                 {/* Responsive images */}
                 <picture>
                   <img
                     src={
                       '/assets/mockups/learnhub_4_large_responsive.png'
                     }
                     className="absolute bottom-[0px] right-[-20px] flex w-[160px] border-none outline-none lg:hidden"
                     alt=""
                   />
                 </picture>
                 <picture>
                   {/* <img
               src={`/assets/mockups/learnhub_4_large_responsive.svg`}
               className="absolute -right-[25px] flex h-full w-[340px] outline-none lg:hidden"
               alt=""
             /> */}
                 </picture>
               </div>
             ) : content.id === 2 ? (
               <div className="relative flex h-full overflow-hidden lg:w-[100%]">
                 <picture>
                   <img
                     src={`/assets/mockups/learnhub_4.png`}
                     className="absolute bottom-2 right-2 hidden rounded-br-xl outline-none lg:flex"
                     alt=""
                   />
                 </picture>

                 <picture>
                   <img
                     src={`/assets/mockups/Courses_3_sm.png`}
                     className="absolute bottom-1 right-2 hidden w-[250px] outline-none lg:flex"
                     alt=""
                   />
                 </picture>

                 {/* Responsive images */}
                 <picture>
                   <img
                     src={
                       '/assets/mockups/learnhub_5_large_responsive.svg'
                     }
                     className="absolute bottom-[0px] right-[-20px] flex w-[270px] border-none outline-none lg:hidden"
                     alt=""
                   />
                 </picture>
                 <picture>
                   <img
                     src={
                       '/assets/mockups/learnhub_5_small_responsive.svg'
                     }
                     className="absolute bottom-[0px] right-[-0px] flex w-[160px] border-none outline-none lg:hidden"
                     alt=""
                   />
                 </picture>
               </div>
             ) : (
               <div className="absolute h-full w-full">
                 <picture>
                   <img
                     src={`/assets/mockups/product_1.png`}
                     className="absolute bottom-0 w-[190px] outline-none"
                     alt=""
                   />
                 </picture>
                 <picture>
                   <img
                     src={`/assets/mockups/product_2.png`}
                     className="absolute right-0 top-0 w-[200px] outline-none"
                     alt=""
                   />
                 </picture>
               </div>
             )}

             <div
               className={`absolute ${content.id === 3 ? 'relative' : 'bottom-0 lg:top-0'} p-2`}
             >
               <CardHeader className="p-0 px-[10px] lg:pt-[45px]">
                 <CardTitle
                   className={`lg:w-full ${content.id === 3 ? 'w-[75%] text-[30px] leading-[40px] lg:text-[40px]' : 'w-[40%] text-[25px] lg:text-[37px]'}`}
                 >
                   {content.title}
                 </CardTitle>
               </CardHeader>
               <CardContent className="p-0 px-[10px] pb-4">
                 <p
                   className={`text-[14px] lg:text-[16px] ${content.id === 1 ? 'text-[#CCCCCC]' : 'text-[#303031]'} w-[60%] leading-[24px] lg:w-full`}
                 >
                   {content.description}
                 </p>
                 {content.id === 3 ? (
                   <Button className="mt-[30px] rounded-xl bg-light_green p-6 font-san text-[18px] font-semibold text-[#002214] lg:mt-[50px]">
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

     {/* No Age limit */}
     <div className="relative mb-[90px] flex flex-col lg:mb-[190px]">
       <Header
         main_text="No Age Limit with Coderina LearnHub"
         position
         min_width="90%"
         width="41%"
         paragraph={`Whether young or old, our platform offers courses for all ages. Start learning today It's never too late or early to grow your skills!`}
       />
       <div className="flex justify-center">
         <Button
           className="w-fit border-2 border-normal_green bg-normal_green px-[15px] py-[25px] font-san text-[16px] text-white"
           asChild
         >
           <Link to="/signup"> Get Started </Link>
         </Button>
       </div>

       <div className="mt-[60px] flex justify-center gap-x-4 p-1 lg:mt-3 lg:gap-x-[180px] lg:p-4">
         <div
           className="relative h-[250px] w-[150px] rounded-b-[90px] rounded-t-[90px] bg-cover bg-center bg-no-repeat lg:h-[400px] lg:w-[230px]"
           style={{ backgroundImage: `url('/assets/mockups/1.jpeg')` }}
         >
           <img
             src="/assets/mockups/image_1.png"
             className="absolute right-[-55px] top-[-35px] w-[80px] object-cover lg:right-[-90px] lg:top-[-80px] lg:w-[150px]"
             alt=""
           />
         </div>
         <div
           className="relative bottom-[-100px] h-[250px] w-[150px] rounded-b-[90px] rounded-t-[90px] bg-cover bg-center bg-no-repeat lg:h-[400px] lg:w-[230px]"
           style={{ backgroundImage: `url('/assets/mockups/2.jpeg')` }}
         ></div>
         <div
           className="relative h-[250px] w-[150px] rounded-b-[90px] rounded-t-[90px] bg-cover bg-center bg-no-repeat lg:h-[400px] lg:w-[230px]"
           style={{ backgroundImage: `url('/assets/mockups/3.jpeg')` }}
         >
           <img
             src="/assets/mockups/Image_2.png"
             className="relative left-[-50px] -z-10 w-[130px] lg:bottom-[-50px] lg:left-[-100px] lg:w-[930px]"
             alt=""
           />
         </div>
       </div>
     </div>
     {/* No Age limit */}

     {/* Testimonial */}
     <div className="mt-40 lg:mt-0">
       <Header
         main_text="What Users Say About Coderina LearnHub"
         width="42%"
         min_width="90%"
         paragraph={
           'See how we transformed learning for our users. hear their feedbacks and experiences!'
         }
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

     {/* Content */}
     <Content />
     {/* Content */}

     <Footer />
   </>
  )
}
