import { createFileRoute, Link } from '@tanstack/react-router'
import Header from '@/components/header/header'
import { paymentSection } from '@/data/HomePageCard'
import NavBar from '@/components/navBar/navBar'
import Footer from '@/components/footer/footer'
import Content from '@/components/special/content'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { getPlans } from '@/api/paymentService'
import { useEffect, useState } from 'react'


export const Route = createFileRoute('/pricing')({
  component: Pricing,
})

function Pricing() {

  const [planData, setPlanData] = useState([]);


  useEffect(() => {
    async function fetchPlans() {
      try {
        const plans = await getPlans();

        if (!plans.success) {
          console.error('Failed to retrieve plans:', plans.error);
          return;
        }

        setPlanData(plans.data);
        console.log('Plans fetched successfully:', plans.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    }

    fetchPlans();
  }, []);


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
                    NGN {planData.length > 0 ? planData.find(plan => plan.plan_type === content.durationPlan)?.price.toLocaleString('en-NG', { minimumFractionDigits: 0 }) : '...'}
                    <span className="font-san text-[18px] font-normal">
                      /{content.durationPlan === 'monthly' ? 'month' : 'year'}
                    </span>{' '}
                  </h2>
                  {/* </CardContent> */}
                  {/* <CardContent className="mt-3 flex justify-center text-center"> */}
                  <p className="w-[80%] font-san">{content.description}</p>
                </CardContent>
              </div>
              <Link
                to="/checkout"
                search={{ planId: planData.length > 0 ? planData.find(plan => plan.plan_type === content.durationPlan)?.id : '' }}
              >
                <CardFooter className="grid items-center p-0 text-center lg:relative lg:w-full">
                  <p
                    role="button"
                    tabIndex={0}
                    className={`w-full rounded-b-lg p-5 font-san text-[18px] font-semibold ${content.id === 2 ? 'bg-[#F9FBFA] text-[#3A4D41]' : 'bg-dark_green text-white'}`}
                    // onClick={handlePlanSubmit(content)}
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
