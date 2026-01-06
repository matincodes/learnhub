import { Input } from '@/components/ui/input'
import { UserProfile } from '@/context/user-context'
import { topNavData } from '@/data/topNav'
import useLocalStorageSync from '@/hooks/use-localstorage-sync'
import { useLocation, useNavigate, useRouter } from '@tanstack/react-router'
import { useCallback, useMemo, useState } from 'react'
import { HiXMark } from 'react-icons/hi2'
import NotificationModal from './notificationModal'

// Pages where back button should NOT appear
const DASHBOARD_PAGES = [
  '/dashboard',
  '/admin/dashboard',
  '/admin/dashboard/courses',
  '/admin/dashboard/course-details',
]

const TopNav = () => {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useLocalStorageSync(
    'isSearchOpen',
    false,
  )
  const [searchInputValue, setSearchInputValue] = useLocalStorageSync(
    'searchValue',
    '',
  )

  const { userProfile } = UserProfile()
  const router = useRouter()
  const navigate = useNavigate()
  const pathname = useLocation({ select: s => s.pathname.replace(/\/$/, '') })

  // Derived state
  const role = 'admin'
  const title = topNavData[pathname]?.title
  const courseTitle = useMemo(() => {
    const match = pathname.match(/my-courses\/([^/]+)/)
    return match ? decodeURIComponent(match[1]) : null
  }, [pathname])

  const displayTitle = courseTitle || title
  const isDashboardPage = DASHBOARD_PAGES.includes(pathname)
  const showBackButton = !isDashboardPage
  const showWelcomeMessage =
    pathname === '/dashboard' || pathname === '/admin/dashboard'

  // Handlers
  const handleOpenSearch = useCallback(() => {
    setIsSearchOpen(true)
    navigate({ to: '/dashboard/search' })
  }, [navigate, setIsSearchOpen])

  const handleSearchInput = useCallback(
    e => {
      setSearchInputValue(e.target.value)
    },
    [setSearchInputValue],
  )

  const handleCloseSearch = useCallback(() => {
    if (searchInputValue.length === 0) {
      setIsSearchOpen(false)
      navigate({ to: router.history.back() })
    } else {
      setSearchInputValue('')
    }
  }, [searchInputValue, setIsSearchOpen, setSearchInputValue, router, navigate])

  const toggleNotification = useCallback(() => {
    setIsNotificationOpen(prev => !prev)
  }, [])

  const handleGoBack = useCallback(() => {
    navigate({ to: router.history.back() })
  }, [router, navigate])

  // Sub-components for cleaner JSX
  const BackButton = showBackButton && (
    <img
      src="/assets/arrow-left-01.svg"
      onClick={handleGoBack}
      className="cursor-pointer"
      alt="Go back"
    />
  )

  const WelcomeMessage = showWelcomeMessage && (
    <p className="capitalize">{`Welcome Back, ${userProfile?.first_name} 👋`}</p>
  )

  const NotificationButton = (
    <button
      onClick={toggleNotification}
      className="relative grid place-content-center rounded-full bg-white p-[10px]"
    >
      <img src="/assets/Vector.svg" alt="Notifications" className="w-[23px]" />
      {isNotificationOpen && <NotificationModal close={toggleNotification} />}
    </button>
  )

  const SearchBar = role !== 'admin' && (
    <>
      <div className="flex h-10 w-full items-center justify-between overflow-hidden rounded-lg border bg-white pr-2 focus-within:border-normal_yellow">
        <Input
          type="text"
          id="search"
          placeholder="Search here"
          className="border-none outline-none placeholder:text-[14px] placeholder:font-medium placeholder:text-[#848484]"
          value={searchInputValue}
          onFocus={handleOpenSearch}
          onChange={handleSearchInput}
        />
        <HiXMark
          size={28}
          strokeWidth={0}
          color="#303031"
          className="cursor-pointer"
          onClick={handleCloseSearch}
        />
      </div>
      <button className="flex h-10 items-center justify-center gap-1 rounded-full bg-white p-3">
        <p className="font-semibold">10</p>
        <img src="/assets/fire.svg" alt="Streak" />
      </button>
    </>
  )

  return (
    <div className="flex w-full items-center justify-between bg-gray-100 px-3 py-3 sm:px-6 sm:py-4 lg:fixed lg:right-0 lg:z-50 lg:w-[calc(100%-280px)] lg:px-6 min-[1024px]:float-right">
      {/* Mobile View */}
      <div className="flex w-full flex-col items-start gap-y-4 p-2 lg:hidden">
        <div className="flex w-full items-center justify-between">
          {!isSearchOpen && (
            <img src="/assets/learnhub-nobg.png" alt="LearnHub" />
          )}

          <div
            className={
              isSearchOpen
                ? 'w-full'
                : 'flex w-full items-center justify-end gap-3'
            }
          >
            {!isSearchOpen && (
              <div className="flex items-center justify-evenly space-x-3">
                {NotificationButton}
              </div>
            )}
          </div>
        </div>

        <div className="relative my-5 flex flex-col items-start justify-start">
          <h2 className="flex items-center text-lg font-semibold sm:text-2xl">
            {BackButton}
            {displayTitle}
          </h2>
          {WelcomeMessage}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden w-full items-center justify-between gap-4 md:flex-col lg:flex lg:flex-row">
        <div className="relative flex flex-col items-start justify-start">
          <h2 className="flex items-center text-nowrap text-3xl font-semibold capitalize lg:text-2xl">
            {BackButton}
            {displayTitle}
          </h2>
          {WelcomeMessage}
        </div>

        <div className="relative flex items-center justify-end gap-x-4 md:basis-[55%] lg:basis-[45%]">
          {SearchBar}
          {NotificationButton}
        </div>
      </div>
    </div>
  )
}

export default TopNav
