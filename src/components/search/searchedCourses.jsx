import SearchCourseCard from '@/components/widgets/couse_search_card'

const SearchedCourse = ({ courseResult = [] }) => {
  return (
    <div className="relative z-10 space-y-12 rounded-lg bg-white p-6">
      <div className="flex justify-between">
        <p className="text-[14px] font-[600]">Search Result</p>
      </div>
      <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {courseResult.map((course, index) => (
          <SearchCourseCard
            key={course?.id || course?.title}
            title={course.title}
            image={course.image}
            lesson={course.lesson}
            duration={course.duration}
          />
        ))}
      </div>
    </div>
  )
}

export default SearchedCourse
