
import { useState, useCallback, useMemo } from 'react'
import { useLocation, useNavigate, useRouter } from '@tanstack/react-router'
import { UserProfile } from '@/context/user-context'
import useLocalStorageSync from '@/hooks/use-localstorage-sync'
import { topNavData } from '@/data/topNav'
import { extractCourseTitle } from '@/lib/utils'

const DASHBOARD_PAGES = [
  '/dashboard',
  '/admin/dashboard',
  '/admin/dashboard/courses',
  '/admin/dashboard/course-details',
]

const useTopNavLogic = () => {
  const { userProfile } = UserProfile()
  const router = useRouter()
  const navigate = useNavigate()

  // Clean pathname helper
  const pathname = useLocation({ select: s => s.pathname.replace(/\/$/, '') })

  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useLocalStorageSync(
    'isSearchOpen',
    false,
  )
  const [searchInputValue, setSearchInputValue] = useLocalStorageSync(
    'searchValue',
    '',
  )

  // Parsing Logic
  const role = userProfile?.role || 'user'
  const pageTitle = topNavData[pathname]?.title
  const courseTitle = useMemo(() => extractCourseTitle(pathname), [pathname])
  const displayTitle = courseTitle || pageTitle

  // Booleans
  const isDashboardPage = DASHBOARD_PAGES.includes(pathname)
  const showBackButton = !isDashboardPage
  const showWelcomeMessage = ['/dashboard', '/admin/dashboard'].includes(
    pathname,
  )
  const showSearch = role !== 'admin'

  // Handlers
  const handleOpenSearch = useCallback(() => {
    setIsSearchOpen(true)
    navigate({ to: '/dashboard/search' })
  }, [navigate, setIsSearchOpen])

  const handleSearchInput = useCallback(
    e => setSearchInputValue(e.target.value),
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

  const toggleNotification = useCallback(
    () => setIsNotificationOpen(prev => !prev),
    [],
  )
  const handleGoBack = useCallback(
    () => navigate({ to: router.history.back() }),
    [router, navigate],
  )

  return {
    state: {
      isNotificationOpen,
      isSearchOpen,
      searchInputValue,
      displayTitle,
      showBackButton,
      showWelcomeMessage,
      showSearch,
      userProfile,
      pathname,
      role,
    },
    actions: {
      handleOpenSearch,
      handleSearchInput,
      handleCloseSearch,
      toggleNotification,
      handleGoBack,
    },
  }
}

export default useTopNavLogic