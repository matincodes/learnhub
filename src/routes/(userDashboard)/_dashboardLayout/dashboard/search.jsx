import RecentSearch from '@/components/search/recentSearch'
import SearchedCourse from '@/components/search/searchedCourses'
import { searchedCourses } from '@/data/dashboard'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useMemo, useState } from 'react'

export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/search',
)({
  component: Search,
})

// Debounce hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
}

// Custom hook to sync with localStorage
function useLocalStorageSync(key, defaultValue = '') {
  const [value, setValue] = useState(
    () => window.localStorage.getItem(key) ?? defaultValue,
  )

  useEffect(() => {
    // Listen for storage events from other tabs/windows
    const handleStorageChange = e => {
      if (e.key === key) {
        setValue(e.newValue ?? defaultValue)
      }
    }

    // Also poll for changes from the same tab (storage event doesn't fire for same-tab changes)
    const intervalId = setInterval(() => {
      const currentValue = window.localStorage.getItem(key) ?? defaultValue
      setValue(prev => (prev !== currentValue ? currentValue : prev))
    }, 150)

    window.addEventListener('storage', handleStorageChange)
    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(intervalId)
    }
  }, [key, defaultValue])

  return value
}

function Search() {
  const openSearchStatus = useLocalStorageSync('openSearchStatus', 'false')
  const rawSearchValue = useLocalStorageSync('searchValue', '')

  // Debounce search value to avoid filtering on every keystroke
  const debouncedSearchValue = useDebounce(rawSearchValue.toLowerCase(), 300)

  const isSearchOpen = openSearchStatus === 'true'
  const hasSearchQuery = debouncedSearchValue.length > 0

  // Memoize filtered courses to avoid recalculating on every render
  const filteredCourses = useMemo(
    () =>
      searchedCourses.filter(course =>
        course.title.toLowerCase().includes(debouncedSearchValue),
      ),
    [debouncedSearchValue],
  )

  const hasResults = filteredCourses.length > 0

  // Early return if search is not open
  if (!isSearchOpen) {
    return <div className="relative h-[77vh]" />
  }

  // Show recent searches when no search query
  if (!hasSearchQuery) {
    return (
      <div className="relative h-[77vh]">
        <RecentSearch />
      </div>
    )
  }

  // Show search results
  if (hasResults) {
    return (
      <div className="relative h-[77vh]">
        <SearchedCourse courseResult={filteredCourses} />
      </div>
    )
  }

  // No results found
  return (
    <div className="relative h-[77vh]">
      <div className="relative top-0 flex h-full w-full flex-col">
        <div className="relative z-50 space-y-12 rounded-lg bg-white p-6">
          <p className="text-[14px] font-[600]">Search Result</p>
        </div>

        <div className="flex h-full flex-col items-center justify-center text-center">
          <img src="/assets/mockups/no_course.png" alt="No results" />
          <p className="mb-4 mt-2 font-inter font-[400] text-[#808080] lg:w-[36%]">
            Oops! We couldn't find your search in the collection. Please check
            for typos or try again.
          </p>
          <button
            onClick={() => window.history.back()}
            className="rounded-xl border-2 border-normal_yellow px-4 py-1 font-san font-[600] text-normal_yellow"
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  )
}
