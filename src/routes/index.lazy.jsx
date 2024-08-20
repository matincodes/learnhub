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

export const Route = createLazyFileRoute('/')({
  component: () => <App />,
})

export default function App() {
  return (
    <>
      <NavBar />
      {/* Banner */}
      <div className="flex flex-col items-center justify-center space-y-4 p-[20px] text-center">
        <h1 className="text-[45px] font-extrabold text-dark_green lg:text-[64px] lg:leading-[80px]">
          Empower Your Skills: <br /> Upskill with Coderina LearnHub
        </h1>
        <p className="text-[20px]">
          Rigorous programmed. Real-world skills. Lifelong <br /> career
          acceleration.
        </p>

        <Button className="w-fit bg-normal_green font-san text-white">
          {' '}
          Get Started Today{' '}
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
      <div className="">
        {/* Header */}
        <Header
          main_text="Why Choose"
          mini_text=" Coderina LearnHub"
          paragraph="Coderina LearnHub is a type of learning management software tool used for learning or upskilling with an exposure to variety of courses "
        />
        {/* Header */}

        {/* Card 1 */}
        <div className="grid gap-6 p-[40px] font-san">
          {cardSectionOne.map(content => (
            <Card
              key={content.id}
              className={`flex h-[60vh] w-full flex-col bg-[#F9FBFA] outline-none ${content.id === 3 ? 'col-span-12' : 'col-span-12 lg:col-span-6 lg:h-[120lvh]'} relative overflow-hidden`}
            >
              <img
                src={`${content.id === 1 ? '/assets/mockups/Courses_1.svg' : ''} `}
                className="absolute h-full w-full border-none outline-none lg:w-auto"
                alt=""
              />

              <div className={`absolute ${content.id === 1 ? 'bottom-3' : ''}`}>
                <CardHeader>
                  <div
                    className={`h-[60px] w-[60px] rounded-full bg-dark_green lg:hidden ${content.id === 1 ? 'hidden' : 'grid place-content-center'} `}
                  >
                    <img src="/assets/shield.svg" className="w-[20px]" alt="" />
                  </div>
                  <CardTitle className="text-[35px]">{content.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`w-full ${content.id === 3 ? 'lg:w-[40%]' : 'lg:w-[50%]'} text-paragraph`}
                  >
                    {content.description}
                  </p>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
        {/* Card 1 */}

        {/* Card 2 */}
        <div className="grid gap-6 p-10 font-san lg:grid-cols-3">
          {cardSectionTwo.map(content => (
            <Card
              key={content.id}
              className={`relative h-[47lvh] overflow-hidden rounded-2xl border-none bg-[#F9FBFA] outline-none lg:h-[100lvh] ${content.id === 3 ? 'grid items-center bg-dark_green text-white lg:place-content-center' : ''} `}
            >
              {content.id === 1 ? (
                <div className="absolute h-full w-[100%] overflow-hidden">
                  <img
                    src={`/assets/mockups/learnhub_4_mini.svg`}
                    className="absolute -left-5 hidden h-full w-[280px] outline-none lg:flex"
                    alt=""
                  />

                  <img
                    src={`/assets/mockups/learnhub_4_large.svg`}
                    className="absolute -right-12 hidden outline-none lg:-right-[25px] lg:top-[-3px] lg:flex lg:w-[450px] lg:rotate-0"
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
                <div className="absolute flex h-full w-[100%] overflow-hidden">
                  <img
                    src={`/assets/mockups/learnhub_5_left.svg`}
                    className="relative bottom-[-90px] left-[0px] hidden h-full w-[250px] outline-none lg:flex"
                    alt=""
                  />

                  <img
                    src={`/assets/mockups/learnhub_5_right.svg`}
                    className="absolute bottom-[-20px] right-[-20px] hidden h-full w-[330px] lg:flex"
                    alt=""
                  />

                  {/* Responsive images */}
                  <img
                    src={`/assets/mockups/learnhub_5_left_responsive.svg`}
                    className="absolute right-[90px] top-[5px] flex w-[370px] outline-none lg:hidden"
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

              <div
                className={`absolute ${content.id === 1 ? 'bottom-0' : content.id === 3 ? 'relative place-items-end' : 'bottom-0 lg:top-0'}`}
              >
                <CardHeader>
                  <CardTitle className="text-[20px] lg:text-[30px]">
                    {content.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="w-[90%] text-[15px] text-paragraph lg:text-[17px]">
                    {content.description}
                  </p>
                  {content.id === 3 ? (
                    <Button className="rounded-xl bg-light_green font-san font-semibold text-normal_green">
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
      {/* Why Choose Us */}

      {/*  Payment Plans  */}
      <div className="">
        <Header
          main_text="Payment Plans"
          paragraph="Choose a plan that fits, pricing is per month or year, there is no limit to any subscribtion plan "
        />

        <div className="grid place-content-center space-y-14 p-[40px] lg:flex lg:gap-12 lg:space-y-0">
          {paymentSection.map(content => (
            <>
              <Card
                className={`relative basis-[37%] rounded-2xl border-[5px] p-2 lg:h-[105lvh] ${content.id === 2 ? 'bg-dark_green text-white' : 'bg-[#F9FBFA] text-dark_green'} `}
              >
                <CardHeader className="p-0">
                  <img src={content.image} alt="" />
                </CardHeader>
                <CardContent className="mt-3 flex flex-col items-center space-y-3 text-center">
                  <h2 className="font-inter text-[25px] font-extrabold lg:text-[50px]">
                    {' '}
                    NGN {content.price}
                    <span className="font-san text-[18px] font-normal">
                      /monthly
                    </span>{' '}
                  </h2>
                  <p className="font-san lg:w-[80%]">
                    With this plan you will have access to variety of courses
                    for a month
                  </p>
                </CardContent>

                <CardFooter className="bottom-1 mt-7 grid items-center p-0 text-center lg:absolute lg:w-[96%]">
                  <p
                    className={`w-full rounded-b-lg p-5 font-san text-[18px] font-semibold ${content.id === 2 ? 'bg-[#F9FBFA] text-[#3A4D41]' : 'bg-dark_green text-white'}`}
                  >
                    {content.plan}
                  </p>
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
          main_text="What the community says about"
          mini_text=" Coderina LearnHub"
          paragraph={`Our community loves the diverse course offerings and effective upskilling features. Here's what they have to say`}
        />

        <div className="grid place-content-center gap-8 p-[10px] lg:grid-cols-2 lg:p-[50px]">
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
            className="hidden w-[550px] lg:flex"
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
          <Button className="w-fit rounded-xl bg-normal_green font-san font-semibold text-white">
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
            className="absolute -bottom-16 hidden basis-[50%] lg:flex"
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
