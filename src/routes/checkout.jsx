import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  createFileRoute,
  Link,
  redirect,
} from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useUserProfile }  from '@/hooks/use-user-profile'
import { useCurrentPlan, useCreatePaymentSession } from '@/hooks/use-payment'
import { Skeleton } from '@/components/ui/skeleton' 


export const Route = createFileRoute('/checkout')({
  component: CheckoutPage,
  validateSearch: (search) => ({ planId: search.planId || undefined}),
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
  const { planId } = Route.useSearch()
  const [currentPlan, setCurrentPlan] = useState(null)
  const { data: userProfile } = useUserProfile()

  // Use hooks from use-payment
  const { data: planResponse, isLoading: loading, isError: planError } = useCurrentPlan(planId)

  console.log('Selected plan ID:', planId, planResponse, currentPlan)

  const createPayment = useCreatePaymentSession()

  // Update currentPlan whenever the hook data changes
  useEffect(() => {
    if (!planId) {
      setCurrentPlan(null)
      return
    }
    if (planResponse) {
      setCurrentPlan(planResponse)
    } else {
      setCurrentPlan(null)
    }
  }, [planResponse, planId])

  // Helper to format price without decimals
  const formatPrice = (price) => {
    if (price == null || price === '') return '—'
    const num = Number(price)
    if (Number.isNaN(num)) return String(price)
    return new Intl.NumberFormat('en-NG', { maximumFractionDigits: 0 }).format(Math.round(num))
  }




  const handleCheckout = () => {
    if (!currentPlan) return
    createPayment.mutate(planId, {
      onError: (err) => {
        console.error('Failed to create payment session:', err)
      },
    })
  }



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
                {loading ? (
                  <div className="flex items-start gap-4 h-48 w-full">
                    <Skeleton className="h-24 w-72 rounded-lg" />
                    <div className="flex-1 space-y-3 py-2">
                      <Skeleton className="h-6 w-40" />
                      <Skeleton className="h-4 w-60" />
                      <Skeleton className="h-6 w-24" />
                    </div>
                  </div>
                ) : currentPlan ? (
                  <Card>
                    <CardContent className="flex items-start gap-4 p-0">
                      <div className="h-24 w-72 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src="/assets/monthly plan 1.png"
                          alt={`${currentPlan?.plan_type} Plan`}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold">{currentPlan?.plan_type?.toUpperCase()} PLAN</h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {currentPlan?.plan_type === 'annual' ? 'With this plan you will get to save 17% from the monthly plan in a year' : 'With this plan you will have access to all courses and dashboard for 30 Days.'}
                        </p>
                        <div className="mt-2">
                          <span className="font-semibold">
                            NGN {formatPrice(currentPlan?.price)}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="text-gray-500">No plan selected.</div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Second container - spans 1 column */}
        <div className="w-full col-span-2 flex flex-col items-start space-y-8 px-5 py-48 md:min-h-screen md:bg-gray-100 md:px-16">
          <div className="w-full">
            <h2 className="mb-6 text-3xl font-semibold">Summary</h2>

            <div className="w-full">
              <div>
                <h3 className="mb-4 text-xl font-semibold">Payment Overview</h3>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-gray-600 text-lg">Duration : </span>
                    <span className="text-gray-600 text-sm">
                      {loading ? 'Loading...' : currentPlan ? (currentPlan?.plan_type === 'annual' ? '1 Year' : '1 Month') : (planError ? 'Error' : '—')}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600 text-lg">Total Price : </span>
                    <span className="text-gray-600 text-sm">
                      {loading ? 'Loading...' : currentPlan ? `NGN ${formatPrice(currentPlan?.price)}` : (planError ? 'Error' : '—')}
                    </span>
                  </div>
                </div>
              </div>

              <Button disabled={createPayment.isLoading || loading || !currentPlan} className="w-full bg-[#006038] hover:bg-green-800 flex gap-2 items-center py-7 mt-16" onClick={() => handleCheckout()}>
                {createPayment.isPending ? (
                  <>
                    <div className="mr-2 inline-block"><Skeleton className="h-4 w-12 rounded-md" /></div>
                    <span className='text-white'>Redirecting...</span>
                  </>
                ) : (
                  <>
                    <span className='text-white'>Checkout with</span>
                    <img
                      src="/assets/download__4__1-removebg-preview 1.png"
                      alt="Monthly Plan"
                      className="h-4 w-auto"
                    />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
