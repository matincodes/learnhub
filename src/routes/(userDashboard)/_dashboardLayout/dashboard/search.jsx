import RecentSearch from '@/components/search/recentSearch'
import SearchedCourse from '@/components/search/searchedCourses'
import { recentSearchedCourses, searchedCourses } from '@/data/dashboard'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/search',
)({
  component: Search,
})

function Search() {
  const [openSearchStatus, setOpenSearchStatus] = useState(
    window.localStorage.getItem('openSearchStatus'),
  )
  const [search, setSearch] = useState(openSearchStatus) // When the search field is active
  const [typeSearch, setTypeSearch] = useState([]) // This is when the user has typed for what they are searching for
  const [searchValue, setSearchValue] = useState([])

  // Get the Current State of the search button
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newStatus =
        window.localStorage.getItem('openSearchStatus') === 'true'
      if (newStatus !== openSearchStatus) {
        setOpenSearchStatus(newStatus)
        setSearch(newStatus)
      }
    }, 100) // Check every 100ms

    return () => {
      clearInterval(intervalId)
    }
  }, [openSearchStatus])

  useEffect(() => {
    const intervalId = setInterval(() => {
      const searchedValue = window.localStorage
        .getItem('searchValue')
        .toLowerCase()
      setSearchValue(searchedValue)
    }, 100)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  
  const filterCourses = searchedCourses.filter(courses =>
    courses.title.toLowerCase().includes(searchValue),
  )

  useEffect(() => {
    setTypeSearch(filterCourses)
  }, [searchValue])

  return (
    <div className="relative h-[77vh]">
      {search === true && searchValue.length > 0 && filterCourses.length > 0 ? (
        <SearchedCourse courseResult={typeSearch} />
      ) : search === true && filterCourses.length === 0 ? (
        <div className="relative top-0 flex h-full w-full flex-col">
          {typeSearch.length <= 0 ? (
            <>
              <div className="relative z-50 space-y-12 rounded-lg bg-white p-6">
                <p className="text-[14px] font-[600]">Search Result</p>
              </div>

              <div className="flex h-full flex-col items-center justify-center text-center">
                <img src="/assets/mockups/no_course.png" alt="" />
                <p className="mb-4 mt-2 font-inter font-[400] text-[#808080] lg:w-[36%]">
                  Oops! We couldn't find your search in the collection. Please
                  check for typos or try again.
                </p>
                <a
                  // href={prevRoute}
                  className="rounded-xl border-2 border-normal_yellow px-4 py-1 font-san font-[600] text-normal_yellow"
                >
                  Go back
                </a>
              </div>
            </>
          ) : (
            <div className="border border-orange-500">gg</div>
          )}
        </div>
      ) : search === true ? (
        <div>
          <RecentSearch />
        </div>
      ) : (
        ''
      )}
      {/* Main search */}
    </div>
  )
}
