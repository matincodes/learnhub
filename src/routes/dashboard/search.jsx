import { createFileRoute } from '@tanstack/react-router'
import RecentSearch from '@/components/search/recentSearch'
import SearchedCourse from '@/components/search/searchedCourses'
import { searchedCourses } from '@/data/dashboard'
import { useEffect, useState } from 'react'


export const Route = createFileRoute('/dashboard/search')({
  component: Search,
})

function Search() {
  const [openSearchStatus, setOpenSearchStatus] = useState(window.localStorage.getItem('openSearchStatus'))
  const [search, setSearch] = useState(openSearchStatus) // When the search field is active
  const [typeSearch, setTypeSearch] = useState([])  // This is when the user has typed for what they are searching for

  // Get the Current State of the search button
  useEffect(() => {
    const intervalId = setInterval(() => {
      const newStatus = window.localStorage.getItem('openSearchStatus') === 'true';
      if (newStatus !== openSearchStatus) {
        setOpenSearchStatus(newStatus);
        setSearch(newStatus);
      }
    }, 100); // Check every 100ms

    return () => {
      clearInterval(intervalId);
    };
  }, [openSearchStatus]);


  // const filterCourses = () =>{
  //   searchedCourses.filter(courses =>{
  //     console.log(courses)
  //   })
  // }

  useEffect(()=>{
    setTypeSearch(searchedCourses)
  }, [])


  return (
    <div className='relative h-[77vh]'>

    {search === true ? 
    (
        <div>
        <RecentSearch />
      </div>
      )

      :
      (
        <div className="top-0 w-full h-full relative flex flex-col ">
          {typeSearch.length <= 0 ? 
          (
            <>
              
            <div className="relative z-50 space-y-12 rounded-lg bg-white p-6">
                <p className="text-[14px] font-[600]">Search Result</p>
            </div>
            
            <div className="h-full flex flex-col justify-center items-center text-center">
              <img src="/assets/mockups/no_course.png" alt="" />
              <p className='lg:w-[36%] mt-2 mb-4 font-inter text-[#808080] font-[400]'>Oops! We couldn't find your search in the collection. Please check for typos or try again.</p>
              <button className='border-2 border-[#F7AE30] px-4 py-1 rounded-xl font-san text-[#F7AE30] font-[600] '>Go back</button>
            </div>
            </>
          )
           : (
              <SearchedCourse />
            )}
        </div>
      )}
      {/* Main search */}

    </div>
  )
}
