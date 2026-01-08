import { createFileRoute, Link } from '@tanstack/react-router'
import Header from '@/components/header/header'
import { paymentSection } from '@/data/HomePageCard'
import NavBar from '@/components/navBar/navBar'
import Footer from '@/components/footer/footer'
import Content from '@/components/special/content'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { usePlans } from '@/hooks/use-payment'
import { Skeleton } from '@/components/ui/skeleton'


export const Route = createFileRoute('/pricing')({
  component: Pricing,
})

function Pricing() {
  const { data: planData = [], isLoading, isError } = usePlans();

  const getPrice = (duration) => {
    const plan = planData.find(p => p.plan_type === duration);
    const price = plan?.price;
    if (price == null || price === '') return '...';
    const num = Number(price);
    if (Number.isNaN(num)) return String(price);
    // Format with no decimal places and round to nearest integer
    return new Intl.NumberFormat('en-NG', { maximumFractionDigits: 0 }).format(Math.round(num));
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="mt-20 grid place-content-center lg:flex lg:gap-12 lg:space-y-0 p-4">
          {paymentSection.map(content => (
            <Skeleton key={content.id} className="h-[500px] w-[300px] lg:w-[420px] rounded-2xl border-[5px] p-2" />
          ))}
        </div>
        <Footer />
      </div>
    )
  }

  if (isError) {
    return (
      <div className="min-h-screen">
        <NavBar />
        <div className="mt-20 grid place-content-center">
          <p className="text-center text-red-600">Failed to load plans. Please try again later.</p>
        </div>
        <Footer />
      </div>
    )
  }

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
              className={`relative basis-[37%] rounded-2xl border-[1px] p-2 ${content.id === 2 ? 'bg-dark_green text-white' : 'bg-[#F9FBFA] text-dark_green'} `}
            >
              <CardHeader className="p-0">
                <img src={content.image} alt="" />
              </CardHeader>
              <div className="">
                <CardContent className="lg:h-[40vh] space-y-6 flex flex-col items-center text-center justify-center">
                  <h2 className="mt-5 font-inter text-[32px] font-extrabold lg:text-[50px]">
                    {' '}
                    NGN {getPrice(content.durationPlan)}
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
                search={{ planId: planData?.length > 0 ? planData.find(plan => plan.plan_type === content.durationPlan)?.id : '' }}
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
