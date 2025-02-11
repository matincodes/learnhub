import SearchCourseCard from '@/components/widgets/couse_search_card'
import { searchedCourses } from '@/data/dashboard'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'




const SearchedCourse = (e) => {

     const [searchedCourse, setSearchedCourses] = useState([])
   
     useEffect(() => {
          setSearchedCourses(e.courseResult)
     }, [e.courseResult])


     return (
          <div className="relative z-10 space-y-12 rounded-lg bg-white p-6">
          <div className="flex justify-between">
            <p className="text-[14px] font-[600]">Search Result</p>
          </div>
          <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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