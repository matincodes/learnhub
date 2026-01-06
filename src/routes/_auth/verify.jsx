import { useAuth } from '@/context/auth-context'
import { createFileRoute, Link, useRouter } from '@tanstack/react-router'
import { CheckCircle2Icon, Loader2, XCircle } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

// Constants
const REDIRECT_DELAY_MS = 5000
const COUNTDOWN_UPDATE_INTERVAL = 250

const PageShell = ({ children }) => (
  <div className="relative flex min-h-[90vh] items-center justify-center p-6">
    <img
      src="/assets/learnhub-logo.svg"
      alt="LearnHub"
      className="absolute left-6 top-4 w-[110px] sm:w-[150px]"
    />
    {children}
  </div>
)

export const Route = createFileRoute('/_auth/verify')({
  validateSearch: search => ({ token: search.token || undefined }),
  component: VerifyRoute,
})

function VerifyRoute() {
  const token = Route.useSearch({ select: s => s.token })
  const router = useRouter()
  const { verifyEmail } = useAuth()

  const [status, setStatus] = useState('idle') // idle, loading, success, error, no-token
  const [error, setError] = useState(null)
  const [remainingMs, setRemainingMs] = useState(REDIRECT_DELAY_MS)

  // Kick off verification when token is present
  useEffect(() => {
    if (!token) {
      setStatus('no-token')
      return
    }

    let mounted = true
    setStatus('loading')
    setError(null) // Clear previous errors
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
  }, [token, verifyEmail])

  // Redirect countdown when verification succeeds
  useEffect(() => {
    if (status !== 'success') return

    const start = Date.now()
    const interval = setInterval(() => {
      const elapsed = Date.now() - start
      const rem = Math.max(REDIRECT_DELAY_MS - elapsed, 0)
      setRemainingMs(rem)

      // Redirect when time is up
      if (rem === 0) {
        clearInterval(interval)
        router.navigate({ to: '/login' })
      }
    }, COUNTDOWN_UPDATE_INTERVAL)

    return () => clearInterval(interval)
  }, [status, router])

  const formatTime = ms => {
    const totalSeconds = Math.ceil(ms / 1000)
    const seconds = totalSeconds % 60
    return `${seconds}s`
  }

  const handleRetry = useCallback(async () => {
    // Navigate to self with same token to trigger re-verification
    await router.invalidate()
    await router.navigate({
      to: '/_auth/verify',
      search: s => ({ ...s, token }),
    })
  }, [router, token])
  // --- UI ---
  if (status === 'no-token') {
    return (
      <PageShell>
        <div className="w-full max-w-md rounded-lg border-2 border-gray-200 p-6 text-center">
          <XCircle className="mx-auto mb-3 h-20 w-20 text-red-500" />
          <h2 className="mb-2 font-san text-2xl font-semibold">
            Verification token not found
          </h2>
          <p className="mb-4 font-san text-base text-gray-600">
            It looks like the verification token is missing from the URL. Please
            make sure you followed the link in your email.
          </p>
          <div className="flex justify-center">
            <Link
              to={`/signup`}
              className="rounded-md bg-normal_green px-4 py-2 font-san text-white"
            >
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
        <div className="w-full max-w-md rounded-lg border-2 border-gray-200 p-6 text-center">
          <XCircle className="mx-auto h-12 w-12 text-red-500" />
          <h2 className="mb-2 mt-2 text-xl font-semibold">
            Verification failed
          </h2>
          <p className="mb-4 text-sm text-gray-600">
            {String(error) || 'An error occurred during verification.'}
          </p>

          <div className="flex justify-center gap-3">
            <Link
              to={`/signup`}
              className="rounded-md border border-gray-300 px-4 py-2"
            >
              Back to Sign Up
            </Link>
            <button
              type="button"
              className="rounded-md bg-normal_green px-4 py-2 text-white"
              onClick={handleRetry}
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
        <div className="flex flex-col items-center space-y-6 rounded-lg border-2 border-gray-200 p-6 text-center">
          <CheckCircle2Icon className="h-20 w-20 text-green-500" />
          <h2 className="text-3xl font-semibold">Email Verified!</h2>
          <p className="text-base text-gray-600">
            Thank you — your email has been verified successfully.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting to the homepage in{' '}
            <span className="font-medium">{formatTime(remainingMs)}</span>
          </p>
        </div>
      </PageShell>
    )
  }

  // Default (shouldn't usually hit this): show nothing or generic message
  return null
}
