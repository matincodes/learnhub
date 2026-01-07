import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  createFileRoute,
  Link,
  redirect,
} from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { useUserProfile }  from '@/hooks/use-user-profile'
import { getCurrentPlan } from '@/api/paymentService'
import Spinner from '@/components/spinner/Spinner' 
import { createPaymentSession, verifyPayment } from '@/api/paymentService' 

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
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [verifying, setVerifying] = useState(false)
  const [verificationStatus, setVerificationStatus] = useState(null) // 'success' | 'failed'
  const [verificationMessage, setVerificationMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const { data: userProfile } = useUserProfile()

  useEffect(() => {
    async function fetchPlan(){
      setLoading(true)
      try {
         const plan = await getCurrentPlan(planId)
          
         if(!plan.success){
            console.error("Failed to retrieve plan", plan.error)
            setCurrentPlan(null)
         } else {
           setCurrentPlan(plan.data)
           console.log("Plan fetched successfully:", plan.data)
         }
      } catch (error) {
         console.error("Error fetching plan:", error)
         setCurrentPlan(null)
      } finally {
         setLoading(false)
      }
    }

    if(planId){
      fetchPlan() 
    } else {
      setCurrentPlan(null)
    }
  }, [planId]);

  useEffect(() => {
    // Check for payment reference in URL or localStorage to verify payment result after user returns from gateway
    async function checkAndVerify(){
      const params = new URLSearchParams(window.location.search)
      const reference = params.get('reference') || params.get('trxref') || params.get('payment_reference') || null
      if(!reference) return

      setVerifying(true)
      try {
        const res = await verifyPayment(reference)
        if(!res.success){
          setVerificationStatus('failed')
          setVerificationMessage(res.error?.message || res.error || 'Verification failed')
        } else {
          const status = res.data?.status || res.data?.payment_status || (res.data?.verified ? 'success' : 'failed')
          if(status === 'success' || status === 'verified' || res.data?.payment_status === 'success'){
            setVerificationStatus('success')
            setVerificationMessage('Payment verified — your subscription is now active.')
          } else {
            setVerificationStatus('failed')
            setVerificationMessage(res.data?.message || 'Payment not successful')
          }
        }
      } catch (err) {
        setVerificationStatus('failed')
        setVerificationMessage(err?.message || 'Verification error')
      } finally {
        setVerifying(false)
      }
    }

    checkAndVerify()
  }, [])

  const handleCheckout = async () => {
    // Implement checkout logic 
    setCheckoutLoading(true)
    try {
      console.log("Plan ID for checkout:", planId)
      const paymentSession = await createPaymentSession(planId)
      if(!paymentSession.success){
        console.error("Failed to create payment session:", paymentSession.error)
        setCheckoutLoading(false)
        return
      }
      console.log("Payment session created successfully:", paymentSession.data) 
      // Redirect to payment gateway URL
      window.location.href = paymentSession.data.payment_url
    } catch (error) {
      console.error("Error creating payment session:", error)
    } finally {
      setCheckoutLoading(false)
    }
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

          {verifying && (
            <div className="mb-4 p-3 rounded bg-yellow-50 text-yellow-700 flex items-center gap-2">
              <Spinner />
              <span>Verifying payment, please wait...</span>
            </div>
          )}

          {verificationStatus === 'success' && (
            <div className="mb-4 p-3 rounded bg-green-50 text-green-700">✅ {verificationMessage}</div>
          )}

          {verificationStatus === 'failed' && (
            <div className="mb-4 p-3 rounded bg-red-50 text-red-700">⚠️ {verificationMessage}</div>
          )}

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
                  <div className="flex items-center justify-center h-48">
                    <Spinner />
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
                            NGN{' '}
                            {currentPlan?.price?.toLocaleString('en-NG', { minimumFractionDigits: 0 })}
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
                      {loading ? 'Loading...' : currentPlan ? (currentPlan?.plan_type === 'annual' ? '1 Year' : '1 Month') : '—'}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-600 text-lg">Total Price : </span>
                    <span className="text-gray-600 text-sm">
                      {loading ? 'Loading...' : currentPlan ? `NGN ${currentPlan?.price?.toLocaleString('en-NG', { minimumFractionDigits: 0 })}` : '—'}
                    </span>
                  </div>
                </div>
              </div>

              <Button disabled={checkoutLoading || loading || !currentPlan} className="w-full bg-[#006038] hover:bg-green-800 flex gap-2 items-center py-7 mt-16" onClick={() => handleCheckout()}>
                {checkoutLoading ? (
                  <>
                    <div className="mr-2"><Spinner /></div>
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
