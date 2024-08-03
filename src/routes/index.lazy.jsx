import { createLazyFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import NavBar from "@/components/navBar/navBar"
import Header from '../components/header/header'
import TestimonialCard from '../components/testimonialCard/testimonialCard'
import { cardSectionOne, cardSectionTwo, paymentSection, testimonialSection } from '../data/HomePageCard'
import Footer from '../components/footer/footer'

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



export const Route = createLazyFileRoute('/')({
  component: () => <App />,
})

export default function App() {
  return (
    <>
    <NavBar />
    {/* Banner */}
      <div className="flex flex-col justify-center items-center text-center p-[20px] space-y-4">
            <h1 className=' font-extrabold lg:text-[64px] text-[45px] text-dark_green lg:leading-[80px]'>Empower Your Skills: <br /> Upskill with Coderina LearnHub</h1>
            <p className='text-[20px] '>Rigorous programmed. Real-world skills. Lifelong <br /> career acceleration.</p>
          
              <Button className='font-san w-fit text-white bg-normal_green'> Get Started Today </Button>
            
            <div className="w-full grid place-content-center">
                <img src="/assets/mockups/desktop_banner_mockup.svg" alt="" className='lg:flex hidden'/>
                <img src="/assets/mockups/desktop_responsive_banner_mockup.svg" alt="" className='lg:hidden flex mt-12'/>
            </div>

      </div>
    {/* Banner */}


    {/* Why Choose Us */}
    <div className="">
        {/* Header */}
          <Header 
            main_text='Why Choose'
            mini_text=' Coderina LearnHub'
            paragraph='Coderina LearnHub is a type of learning management software tool used for learning or upskilling with an exposure to variety of courses '
          />
        {/* Header */}

        {/* Card 1 */}
        <div className="grid p-[40px] gap-6 font-san">
          { cardSectionOne.map(content => (
            <Card key={content.id} className={`h-[60vh] outline-none bg-[#F9FBFA] flex flex-col w-full  ${content.id === 3 ? 'col-span-12' : 'lg:col-span-6 col-span-12 lg:h-[120lvh]'} relative overflow-hidden`}>

                <img src={`${content.id === 1 ? '/assets/mockups/Courses_1.svg' : ''} `} className='outline-none absolute border-none h-full lg:w-auto w-full' alt="" />

              <div className={`absolute ${content.id === 1 ? 'bottom-3' : ''}`}>
                <CardHeader>
                  <div className={` lg:hidden w-[60px] h-[60px] bg-dark_green rounded-full ${content.id === 1 ? 'hidden' : 'grid place-content-center'} `}>
                    <img src="/assets/shield.svg" className='w-[20px]' alt="" />
                  </div>
                  <CardTitle className='text-[35px]'>{content.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`w-full ${content.id === 3 ? 'lg:w-[40%]' : 'lg:w-[50%]' } text-paragraph`}>{content.description}</p>
                </CardContent>
              </div>
            </Card>
          )) }
        </div>
        {/* Card 1 */}


        {/* Card 2 */}
          <div className=" grid lg:grid-cols-3 gap-6 p-10 font-san">
            {cardSectionTwo.map(content=>(
              <Card key={content.id} className={`relative rounded-2xl overflow-hidden bg-[#F9FBFA] outline-none h-[47lvh] lg:h-[100lvh] border-none ${content.id === 3 ? 'grid lg:place-content-center items-center text-white bg-dark_green ' : ''} `}>
              {content.id === 1 ? 
              
              (<div className=" h-full absolute w-[100%] overflow-hidden">
                <img src={`/assets/mockups/learnhub_4_mini.svg`} className='outline-none absolute h-full w-[280px] -left-5 lg:flex hidden' alt="" />


                <img src={`/assets/mockups/learnhub_4_large.svg`} className='outline-none absolute lg:flex hidden -right-12 lg:-right-[25px] lg:top-[-3px]  lg:w-[450px] lg:rotate-0' alt="" />
                
                {/* Responsive images */}
                <img src={`/assets/mockups/learnhub_4_mini_responsive.svg`} className='outline-none absolute lg:hidden flex w-[370px] right-[40px] -top-[10px]' alt="" />

                <img src={`/assets/mockups/learnhub_4_large_responsive.svg`} className='outline-none absolute lg:hidden flex w-[340px]  -right-[25px] h-full' alt="" />
              </div>
              ) : 
              content.id === 2 ?
              (<div className=" h-full absolute w-[100%] flex overflow-hidden">

                <img src={`/assets/mockups/learnhub_5_left.svg`} className='outline-none relative h-full bottom-[-90px] left-[0px] w-[250px] hidden lg:flex' alt="" />

                <img src={`/assets/mockups/learnhub_5_right.svg`} className='absolute right-[-20px] bottom-[-20px] w-[330px] h-full hidden lg:flex' alt="" />


                {/* Responsive images */}
                <img src={`/assets/mockups/learnhub_5_left_responsive.svg`} className='outline-none absolute lg:hidden flex w-[370px] right-[90px] top-[5px]' alt="" />

                <img src={`/assets/mockups/learnhub_5_right_responsive.svg`} className='outline-none absolute lg:hidden flex w-[340px]  -right-[25px] h-full' alt="" />
              </div>)
              :
              (<div className='h-full absolute w-full'>
                <img src={`/assets/mockups/product_1.png`} className='outline-none absolute w-[250px] bottom-0' alt="" />
                <img src={`/assets/mockups/product_2.png`} className='outline-none absolute w-[200px] top-0 right-0' alt="" />
              </div>)
              }
              
             <div className={`absolute ${content.id === 1 ? 'bottom-0' : content.id === 3 ? 'relative place-items-end' : 'lg:top-0 bottom-0'}`}>
                <CardHeader>
                  <CardTitle className='lg:text-[30px] text-[20px] '>{content.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='w-[90%] text-paragraph text-[15px] lg:text-[17px]'>{content.description}</p>
                  {content.id === 3 ? (<Button className='bg-light_green text-normal_green font-san font-semibold rounded-xl'>Get Started</Button>) : (<div></div>)}
                </CardContent>
              </div>
            </Card>
            ))}
          </div>
        {/* Card 2 */}

    </div>
    {/* Why Choose Us */}

    
    
    {/*  Payment Plans  */}
    <div className="">
          <Header 
            main_text='Payment Plans'
            paragraph='Choose a plan that fits, pricing is per month or year, there is no limit to any subscribtion plan '
          />

          <div className="lg:flex grid place-content-center p-[40px] space-y-14 lg:space-y-0 lg:gap-12">
          {paymentSection.map(content=>(
            <>
              <Card className={`basis-[37%] relative lg:h-[105lvh] p-2 border-[5px] rounded-2xl ${content.id === 2 ? 'bg-dark_green text-white' : 'bg-[#F9FBFA] text-dark_green'} `}>
                  <CardHeader className="p-0">
                      <img src={content.image} alt=""/>
                  </CardHeader>
                  <CardContent className='flex flex-col text-center items-center space-y-3 mt-3'>
                    <h2 className='font-inter font-extrabold lg:text-[50px] text-[25px] '> NGN {content.price}<span className='font-san font-normal text-[18px]'>/monthly</span> </h2>
                    <p className='font-san  lg:w-[80%]'>With this plan you will have access to variety of courses for a month</p>
                  </CardContent>

                  <CardFooter className='lg:absolute lg:w-[96%] mt-7 bottom-1 text-center p-0 grid items-center'>
                    <p className={`w-full p-5 rounded-b-lg  font-san text-[18px] font-semibold ${content.id === 2 ? 'bg-[#F9FBFA] text-[#3A4D41]' : 'text-white bg-dark_green'}`}>{content.plan}</p>
                  </CardFooter>
              </Card>
            </>
          ))}
          </div>
    </div>
          {/* Payment Plans */}


          {/* Testimonial */}
    <div className="">

       <Header 
            main_text='What the community says about'
            mini_text=' Coderina LearnHub'
            paragraph={`Our community loves the diverse course offerings and effective upskilling features. Here's what they have to say`}
          /> 

       <div className="grid lg:grid-cols-2 gap-8 lg:p-[50px] p-[10px] place-content-center">
          {testimonialSection.map(content=>(
            <TestimonialCard key={content.id} testimony={content.testimony} author={content.author} />
          ))}
       </div>
    </div>
          {/* Testimonial */}


    <div className="bg-[#F9FBFA] mt-12  flex lg:flex-row lg:h-full flex-col relative h-[70vh]">
          <div className="lg:basis-[50%]">
          <img src="/assets/mockups/mockup_left.svg" alt="" className="lg:flex w-[550px] hidden"/>
          <img src="/assets/mockups/courses_mini_1.svg" alt="" className="lg:hidden flex w-[250px]"/>
          </div>

          <div className="lg:basis-[50%] lg:relative flex w-full lg:h-auto h-full absolute flex-col text-center space-y-4 justify-center items-center">
          <p className='text-[#303031] text-[35px] lg:font-medium font-semibold font-san leading-10'>The course content you <br /> need, ready for you</p>
          <Button className='text-white bg-normal_green font-san font-semibold rounded-xl w-fit'>Get Started</Button>


          <img src="/assets/mockups/courses_mini_2.svg" alt="" className="lg:hidden flex basis-[50%] absolute -bottom-[120px] right-0"/>
          <img src="/assets/mockups/mockup_right.svg" alt="" className="lg:flex hidden basis-[50%] absolute -bottom-16 "/>
          </div>

    </div> 

      {/* Gradient */}
    <div className="bg-gradient-to-tr from-[#fff] z-10 h-[11vh] relative"></div>
      {/* Gradient */}


    <Footer />

    </>
  )
}