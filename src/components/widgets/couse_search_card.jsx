
const SearchCourseCard = ({ image, title, lesson, duration }) => {
  return (
    <div className="flex flex-col space-y-1 lg:w-[350px]">
      <div className="h-[120px] w-full sm:h-[141px] ">
        <img
          src={image}
          className="h-full w-full rounded-t-lg object-cover "
          alt=""
        />
      </div>
      <p className="lg:text-[15px] text-[12px] font-[700] text-[#101828] ">{title}</p>
      <p className="mt-3 flex items-center gap-2 text-xs sm:text-[13px]">
        <span className='lg:text-[12px]'>Lesson(s) <span className='pl-1'>- {lesson}</span> </span>
        <span className='p-0 w-[5px] h-[5px] bg-[#303031] rounded-full' />
        <span className='lg:text-[12px]'> {duration} </span>
      </p>
    </div>
  )
}

export default SearchCourseCard
