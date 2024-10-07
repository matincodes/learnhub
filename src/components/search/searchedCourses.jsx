import SearchCourseCard from '@/components/widgets/couse_search_card'
import { searchedCourses } from '@/data/dashboard'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'




const SearchedCourse = () => {

     const [searchedCourse, setSearchedCourses] = useState([])
     console.log(searchedCourse)
   
     useEffect(() => {
          setSearchedCourses(searchedCourses)
     }, [])

     return (
          <div className="relative z-50 space-y-12 rounded-lg bg-white p-6">
          <div className="flex justify-between">
            <p className="text-[14px] font-[600]">Search Result</p>
          </div>
          <div className="relative grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
            {searchedCourse.map(courses => (
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

export default SearchedCourse