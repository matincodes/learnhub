import SearchCourseCard from '@/components/widgets/couse_search_card'
import { recentSearchedCourses } from '@/data/dashboard'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'




const RecentSearch = () => {

     const [recentCourses, setRecentCourses] = useState([])

    const clearRecentSearch = () =>{
       setRecentCourses([])
       
    }
   
     useEffect(() => {
       setRecentCourses(recentSearchedCourses)
     }, [])

     return (
          <div className="relative z-50 space-y-12 rounded-lg bg-white p-6">
          <div className="flex justify-between">
            <p className="text-[14px] font-[600]">Recent Searches</p>

            <button onClick={clearRecentSearch} className="text-[13px] font-[600] transition-all ease-in-out hover:text-red-700">
              Clear recent searches
            </button>
          </div>
          <div className="relative grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
            {recentCourses.map(courses => (
              <SearchCourseCard
                key={uuidv4()}
                title={courses.title}
                image={courses.image}
                lesson={courses.lesson}
                duration={courses.duration}
              />
            ))}
          </div>
        </div>
     )
}

export default RecentSearch