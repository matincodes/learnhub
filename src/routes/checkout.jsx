import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  createFileRoute,
  Link,
  redirect,
  useRouteContext,
  useRouter,
} from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/checkout')({
  component: CheckoutPage,
  // beforeLoad: ({ context, location }) => {
  //   if (!context.isAuthenticated) {
  //     throw redirect({
  //       to: '/login',
  //       search: {
  //         redirect: location.href,
  //       },
  //     })
  //   }
  // },
})

export const Checkout = () => {
  const router = useRouter()
  const user = useRouteContext({ select: s => s.user })

  return (
    <div className="flex h-screen flex-col font-san lg:flex-row">
      <div className="w-full space-y-14 bg-white lg:mx-28 lg:mt-14">
        <div className="">
          <button
            onClick={() => router.history.back()}
            className="text-gray-500 underline hover:text-gray-700"
          >
            Go back
          </button>
        </div>
        <div className="space-y-12">
          <h1 className="text-3xl font-semibold">Checkout</h1>
          <div>
            <h2 className="mb-2 text-lg font-medium">Personal Details</h2>
            <div className="space-y-2">
              <div className="flex items-end gap-4">
                <label className="font-medium text-[#303031]">
                  Full name :
                </label>
                <span>
                  {user.firstName}&nbsp;{user.lastName}
                </span>
              </div>
              <div className="flex items-end gap-4">
                <label className="font-medium text-[#303031]">
                  Email address :
                </label>
                <span>{user.email}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-medium">Subscription Details</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="months"
                  className="block text-sm font-medium text-[#303031]"
                >
                  Select number of months
                </label>

                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="subscription" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="1_month">1 Month</SelectItem>
                    <SelectItem value="1_year">1 Year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    src="/monthly-plan.png"
                    alt="Monthly Plan"
                    className="h-12 w-auto"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-base font-medium text-gray-900">
                    Monthly Plan
                  </h3>
                  <p className="text-sm text-gray-500">
                    With this plan you will have access to all courses and
                    dashboard for selected months month
                  </p>
                  <p className="text-base font-medium text-gray-900">
                    NGN 20,000 / 1 month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full space-y-12 px-14 lg:h-screen lg:max-w-md lg:bg-gray-100 lg:pt-32">
        <h2 className="text-3xl font-semibold">Summary</h2>
        <div>
          <h3 className="mb-2 text-xl font-medium">Payment Overview</h3>
          <div className="space-y-2">
            <div className="flex items-end gap-4">
              <label className="font-medium text-[#303031]">Duration :</label>
              <span>1 Month</span>
            </div>
            <div className="flex items-end gap-4">
              <label className="font-medium text-[#303031]">
                Total Price :
              </label>
              <span>NGN 20,000</span>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
        >
          Checkout with Paystack
        </button>
      </div>
    </div>
  )
}

function CheckoutPage() {
  const [selectedPrice, setSelectedPrice] = useState("1");
  const [totalPrice, setTotalPrice] = useState(null);
  const plan = localStorage.getItem('plan');

  useEffect(() => {
    const MONTHLY_RATE = 20000;
    const DISCOUNT_RATE = 0.17;

    const getDiscountedYearlyPrice = () => {
      const yearlyBase = MONTHLY_RATE * 12;
      return yearlyBase - (yearlyBase * DISCOUNT_RATE);
    };

    let calculatedPrice;

    if (plan === 'Year' || selectedPrice === '12') {
      calculatedPrice = getDiscountedYearlyPrice() * (plan === 'Year' ? Number(selectedPrice) : 1);
    } else {
      calculatedPrice = MONTHLY_RATE * Number(selectedPrice);
    }

    setTotalPrice(calculatedPrice);
  }, [selectedPrice, plan]);




  return (
    <div className="min-h-screen bg-white p-4 font-san md:p-6">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/pricing"
          className="mb-6 items-center text-sm text-gray-500 underline hover:text-gray-700"
        >
          Go back
        </Link>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h1 className="mb-6 text-2xl font-bold">Checkout</h1>

              <div className="space-y-6">
                <div>
                  <h2 className="mb-4 text-lg font-semibold">
                    Personal Details
                  </h2>
                  <div className="space-y-2">
                    <div>
                      <label className="text-sm text-gray-600">Full name</label>
                      <div className="text-sm">Abiola Elizabeth</div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-600">
                        Email address
                      </label>
                      <div className="text-sm">
                        Abiolaelizabethxh0@gmail.com
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-semibold">
                    Subscription Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-gray-600">
                        {plan === 'Year' ? 'Select number of years' : 'Select number of months'}
                      </label>
                      <Select defaultValue={selectedPrice} onValueChange={setSelectedPrice}>
                        <SelectTrigger className="w-full">
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
                    </div>

                    <Card>
                      <CardContent className="flex items-start gap-4 p-4">
                        <div className="h-16 w-16 overflow-hidden rounded-lg bg-gray-100">
                          <img
                            src="/placeholder.svg"
                            alt={`${plan}ly Plan`}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{plan}ly Plan</h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {plan == "Year" ? 'With this plan you will get to save 17% from the monthly plan in a year' : 'With this plan you will have access to all courses and dashboard for selected months.'}

                          </p>
                          <div className="mt-2">
                            <span className="font-semibold">
                              NGN {totalPrice?.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                            </span>
                            <span>
                              /{selectedPrice} {Number(selectedPrice) > 1 ? (plan === 'Year' ? "Years" : "Months") : (plan === 'Year' ? "Year" : "Month")}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 md:bg-gray-100 md:min-h-screen px-4 py-2">
            <div>
              <h2 className="mb-6 text-2xl font-bold">Summary</h2>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-4 text-lg font-semibold">
                    Payment Overview
                  </h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration</span>
                      <span>
                        {selectedPrice} {Number(selectedPrice) > 1 ? (plan === 'Year' ? "Years" : "Months") : (plan === 'Year' ? "Year" : "Month")}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Total Price</span>
                      <span className="font-semibold">
                        NGN {totalPrice?.toLocaleString("en-NG", { minimumFractionDigits: 0 })}
                      </span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-green-700 hover:bg-green-800">
                  <img
                    src="/placeholder.svg"
                    alt="Paystack"
                    width={16}
                    height={16}
                    className="mr-2 h-4 w-4"
                  />
                  Checkout with Paystack
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
