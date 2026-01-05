import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { CheckCircle2Icon, Loader2, XCircle } from 'lucide-react'
import { verifyEmail } from '@/api/authService'

const PageShell = ({ children }) => (
  <div className="min-h-[90vh] flex items-center justify-center p-6 relative">
    <img src="/assets/learnhub-logo.svg" alt="LearnHub" className="absolute left-6 top-4 w-[110px] sm:w-[150px]" />
    {children}
  </div>
)

export const Route = createFileRoute('/_auth/verify')({
  validateSearch: (search) => ({ token: search.token || undefined }),
  component: VerifyRoute,
})

function VerifyRoute() {
  const token = Route.useSearch({ select: (s) => s.token })
  const router = useRouter()

  const [status, setStatus] = useState('idle') // idle, loading, success, error, no-token
  const [error, setError] = useState(null)

  const REDIRECT_DELAY_MS = 5000
  const [remainingMs, setRemainingMs] = useState(REDIRECT_DELAY_MS)

  // Kick off verification when token is present
  useEffect(() => {
    if (!token) {
      setStatus('no-token')
      return
    }

    let mounted = true
    setStatus('loading')

    ;(async () => {
      const res = await verifyEmail(token)
      if (!mounted) return

      if (res.success) {
        setStatus('success')
        setRemainingMs(REDIRECT_DELAY_MS)
      } else {
        setStatus('error')
        setError(res.error)
      }
    })()

    return () => {
      mounted = false
    }
  }, [token])

  // Redirect countdown when verification succeeds
  useEffect(() => {
    if (status !== 'success') return

    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const rem = Math.max(REDIRECT_DELAY_MS - elapsed, 0)
      setRemainingMs(rem)

      if (rem <= 0) {
        clearInterval(interval)
        router.navigate({ to: '/' })
      }
    }, 250)

    return () => clearInterval(interval)
  }, [status, router])

  const formatTime = (ms) => {
    const totalSeconds = Math.ceil(ms / 1000)
    const seconds = totalSeconds % 60
    return `${seconds}s`
  }

  // --- UI ---
  if (status === 'no-token') {
    return (
      <PageShell>
        <div className="max-w-md w-full rounded-lg border-2 border-gray-200 p-6 text-center "> 
          <XCircle className="mx-auto h-20 w-20 text-red-500 mb-3" />
          <h2 className="text-2xl font-san font-semibold mb-2">Verification token not found</h2>
          <p className="text-base text-gray-600 mb-4 font-san">
            It looks like the verification token is missing from the URL. Please make sure you followed the link in your email.
          </p>
          <div className="flex justify-center">
            <Link to={`/signup`} className="rounded-md bg-normal_green px-4 py-2 text-white font-san">
              Go to Sign Up
            </Link>
          </div>
        </div>
      </PageShell>
    )
  }

  if (status === 'loading') {
    return (
      <PageShell>
        <div className="flex flex-col items-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin text-normal_green" />
          <p className="text-gray-600">Verifying your account…</p>
        </div>
      </PageShell>
    )
  }

  if (status === 'error') {
    return (
      <PageShell>
        <div className="max-w-md w-full rounded-lg border p-6 text-center">
          <XCircle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="text-xl font-semibold mb-2 mt-2">Verification failed</h2>
          <p className="text-sm text-gray-600 mb-4">{String(error) || 'An error occurred during verification.'}</p>

          <div className="flex justify-center gap-3">
            <Link to={`/signup`} className="rounded-md border border-gray-300 px-4 py-2">
              Back to Sign Up
            </Link>
            <button
              type="button"
              className="rounded-md bg-normal_green px-4 py-2 text-white"
              onClick={() => {
                // Retry by re-invoking the effect: navigate to self with same token forces remount by router.invalidate()
                router.invalidate().then(() => router.navigate({ to: '/_auth/verify', search: (s) => ({ ...s, token }) }))
              }}
            >
              Retry
            </button>
          </div>
        </div>
      </PageShell>
    )
  }

  if (status === 'success') {
    return (
      <PageShell>
        <div className="flex flex-col items-center text-center space-y-6">
          <CheckCircle2Icon className="h-20 w-20 text-green-500" />
          <h2 className="text-3xl font-semibold">Email Verified!</h2>
          <p className="text-base text-gray-600">Thank you — your email has been verified successfully.</p>
          <p className="text-sm text-gray-500">Redirecting to the homepage in <span className="font-medium">{formatTime(remainingMs)}</span></p>
        </div>
      </PageShell>
    )
  }

  // Default (shouldn't usually hit this): show nothing or generic message
  return null
}
