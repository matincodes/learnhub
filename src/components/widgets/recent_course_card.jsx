import { Dot } from 'lucide-react'
const RecentCourseCard = ({ image, title }) => {
  return (
    <div className="grid w-[15rem] grid-cols-1 gap-y-2 sm:w-[19rem]">
      <div className="h-[120px] w-full sm:h-[141px]">
        <img
          src={image}
          className="h-full w-full rounded-t-lg object-cover"
          alt=""
        />
      </div>
      <h3 className="text-base font-semibold sm:text-xl">{title}</h3>
      <p className="mt-2 flex items-center gap-x-2 text-xs sm:text-[13px]">
        <span>Lesson(s) 10 </span>
        <Dot size={10} />
        <span> 50 minutes</span>
      </p>
    </div>
  )
}

export default RecentCourseCard
