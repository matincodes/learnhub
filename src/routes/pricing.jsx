import { createFileRoute, Link } from '@tanstack/react-router'
import Header from '@/components/header/header'
import { paymentSection } from '@/data/HomePageCard'
import NavBar from '@/components/navBar/navBar'
import Footer from '@/components/footer/footer'
import Content from '@/components/special/content'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

export const Route = createFileRoute('/pricing')({
  component: Pricing,
})

function Pricing() {

  return (
    <div className="">
      <NavBar />

      {/*  Payment Plans  */}
      <div className="">
        <Header
          main_text="Payment Plans"
          paragraph="Access courses with flexible pricing options—choose a monthly or yearly subscription that fits your budget and learning needs!"
        />
        <div className="lg:mt-[60px] grid place-content-center space-y-14 p-4 lg:flex lg:gap-12 lg:space-y-0">
          {paymentSection.map(content => (
            <Card
              key={content.id}
              className={`relative basis-[37%] rounded-2xl border-[5px] p-2 ${content.id === 2 ? 'bg-dark_green text-white' : 'bg-[#F9FBFA] text-dark_green'} `}
            >
              <CardHeader className="p-0">
                <img src={content.image} alt="" />
              </CardHeader>
              <div className="">
                <CardContent className="lg:h-[40vh] space-y-6 flex flex-col items-center text-center justify-center">
                  <h2 className="mt-5 font-inter text-[32px] font-extrabold lg:text-[50px]">
                    {' '}
                    NGN {content.price}
                    <span className="font-san text-[18px] font-normal">
                      /{content.durationPlan}
                    </span>{' '}
                  </h2>
                  {/* </CardContent> */}
                  {/* <CardContent className="mt-3 flex justify-center text-center"> */}
                  <p className="w-[80%] font-san">{content.description}</p>
                </CardContent>
              </div>
              <Link
                to="/checkout"
              >
                <CardFooter className="grid items-center p-0 text-center lg:relative lg:w-full">
                  <p
                    role="button"
                    tabIndex={0}
                    className={`w-full rounded-b-lg p-5 font-san text-[18px] font-semibold ${content.id === 2 ? 'bg-[#F9FBFA] text-[#3A4D41]' : 'bg-dark_green text-white'}`}
                    onClick={() => {
                      const planType = content.plan.includes('Month') ? 'Month' : 'Year'
                      localStorage.setItem('plan', planType)
                    }}
                  >
                    {content.plan}
                  </p>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      {/* Payment Plans */}

      <Content />

      <Footer />
    </div>
  )
}
