import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useUserProfile } from '@/hooks/use-user-profile'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/checkout')({
  component: CheckoutPage,
  beforeLoad: ({ context, location }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/login',
        search: {
          redirect: location.href,
        },
      })
    }
  },
})

function CheckoutPage() {
  const [selectedYear, setselectedYear] = useState('1')
  const [totalPrice, setTotalPrice] = useState(null)
  const plan = localStorage.getItem('plan')
  const { data: userProfile } = useUserProfile()

  useEffect(() => {
    const MONTHLY_RATE = 20000
    const DISCOUNT_RATE = 0.17

    const getDiscountedYearlyPrice = () => {
      const yearlyBase = MONTHLY_RATE * 12
      return yearlyBase - yearlyBase * DISCOUNT_RATE
    }

    let calculatedPrice

    if (plan === 'Year' || selectedYear === '12') {
      calculatedPrice =
        getDiscountedYearlyPrice() *
        (plan === 'Year' ? Number(selectedYear) : 1)
    } else {
      calculatedPrice = MONTHLY_RATE * Number(selectedYear)
    }

    setTotalPrice(calculatedPrice)
  }, [selectedYear, plan])

  return (
    <div className="min-h-screen bg-white font-san">
      <div className="grid gap-8 md:grid-cols-5">
        {/* Left column */}
        <div className="px-5 py-16 md:col-span-3 md:px-24">
          <Link
            to="/pricing"
            className="mb-6 inline-block text-lg text-gray-500 underline hover:text-gray-700"
          >
            Go back
          </Link>

          <h1 className="mb-11 text-3xl font-semibold">Checkout</h1>

          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-2xl font-medium">Personal Details</h2>
              <div className="space-y-2">
                <div className="text-[#303031]">
                  <span className="text-lg font-semibold">Full name: </span>
                  <span className="text-sm">
                    {userProfile?.first_name}&nbsp;{userProfile?.last_name}
                  </span>
                </div>
                <div className="text-[#303031]">
                  <span className="text-lg font-semibold">Email address: </span>
                  <span className="text-sm">{userProfile?.email}</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-4 mt-11 text-2xl font-medium">
                Subscription Details
              </h2>
              <div className="space-y-4">
                {/* <div>
                  <label className="text-sm font-semibold text-gray-600">
                    {plan === 'Year' ? 'Select number of years' : 'Select number of months'}
                  </label>
                  <Select defaultValue={selectedYear} onValueChange={setselectedYear}>
                    <SelectTrigger className="w-[250px]">
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      {plan === 'Year' ? (
                        <>
                          <SelectItem value="1">1 Year</SelectItem>
                          <SelectItem value="2">2 Years</SelectItem>
                        </>
                      ) : (
                        <>
                          <SelectItem value="1">1 Month</SelectItem>
                          <SelectItem value="3">3 Months</SelectItem>
                          <SelectItem value="6">6 Months</SelectItem>
                          <SelectItem value="12">12 Months</SelectItem>
                        </>
                      )}
                    </SelectContent>
                  </Select>
                </div> */}

                <Card>
                  <CardContent className="flex items-start gap-4 p-0">
                    <div className="h-24 w-72 overflow-hidden rounded-lg bg-gray-100">
                      <img
                        src="/assets/monthly plan 1.png"
                        alt={`${plan}ly Plan`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{plan}ly Plan</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {plan === 'Year'
                          ? 'With this plan you will get to save 17% from the monthly plan in a year'
                          : 'With this plan you will have access to all courses and dashboard for selected months.'}
                      </p>
                      <div className="mt-2">
                        <span className="font-semibold">
                          NGN{' '}
                          {totalPrice?.toLocaleString('en-NG', {
                            minimumFractionDigits: 0,
                          })}
                        </span>
                        <span>
                          /{selectedYear}{' '}
                          {Number(selectedYear) > 1
                            ? plan === 'Year'
                              ? 'Years'
                              : 'Months'
                            : plan === 'Year'
                              ? 'Year'
                              : 'Month'}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Second container - spans 1 column */}
        <div className="w-ful l col-span-2 flex flex-col items-start space-y-8 px-5 py-48 md:min-h-screen md:bg-gray-100 md:px-16">
          <div className="w-full">
            <h2 className="mb-6 text-3xl font-semibold">Summary</h2>

            <div className="w-full">
              <div>
                <h3 className="mb-4 text-xl font-semibold">Payment Overview</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-lg text-gray-600">Duration : </span>
                    <span className="text-sm text-gray-600">
                      {selectedYear}{' '}
                      {Number(selectedYear) > 1
                        ? plan === 'Year'
                          ? 'Years'
                          : 'Months'
                        : plan === 'Year'
                          ? 'Year'
                          : 'Month'}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-lg text-gray-600">
                      Total Price :{' '}
                    </span>
                    <span className="text-sm text-gray-600">
                      NGN{' '}
                      {totalPrice?.toLocaleString('en-NG', {
                        minimumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                </div>
              </div>

              <Button className="mt-16 flex w-full items-center gap-2 bg-[#006038] py-7 hover:bg-green-800">
                <span className="text-white">Checkout with </span>
                <img
                  src="/assets/download__4__1-removebg-preview 1.png"
                  alt="Monthly Plan"
                  className="h-4 w-auto"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
