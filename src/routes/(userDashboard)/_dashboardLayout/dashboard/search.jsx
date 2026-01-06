import RecentSearch from '@/components/search/recentSearch'
import SearchedCourse from '@/components/search/searchedCourses'
import { searchedCourses } from '@/data/dashboard'
import { useDebounce } from '@/hooks/use-debounce'
import useLocalStorageSync from '@/hooks/use-localstorage-sync'
import { createFileRoute } from '@tanstack/react-router'
import { useMemo } from 'react'

export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/search',
)({
  component: Search,
})

function Search() {
  const [isSearchOpen] = useLocalStorageSync('isSearchOpen', false)
  const [rawSearchValue] = useLocalStorageSync('searchValue', '')

  // Debounce search value to avoid filtering on every keystroke
  const debouncedSearchValue = useDebounce(
    typeof rawSearchValue === 'string' ? rawSearchValue.toLowerCase() : '',
    300,
  )

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
            Oops! We couldn&apos;t find your search in the collection. Please
            check for typos or try again.
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
