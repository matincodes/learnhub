import { Dot } from 'lucide-react'
import { cn } from '../../lib/utils'

const RecentCourseCard = ({ className, image, title, id, isQuiz }) => {
  return (
    <div
      className={cn(
        'grid w-[15rem] grid-cols-1 gap-y-2 sm:w-[19rem]',
        className,
      )}
    >
      <div className="h-[120px] w-full sm:h-[141px] 2xl:h-[180px]">
        <img
          src={image}
          className="h-full w-full rounded-t-lg object-cover"
          alt=""
        />
      </div>
      <h3
        className={cn(
          'text-base font-semibold',
          isQuiz && 'line-clamp-1 w-full',
        )}
      >
        {title}
      </h3>
      <div className="flex w-full items-end justify-between">
        <p className="mt-2 flex items-center gap-x-2 text-xs sm:text-[13px]">
          <span>Lesson(s) 10 </span>
          <Dot size={10} />
          <span> 50 minutes</span>
        </p>

        {isQuiz && (
          <button
            onClick={() => window.open(`/dashboard/quizzes/${id}`, '_self')}
            className="text-xs font-medium text-normal_yellow sm:text-[13px]"
          >
            Start Quiz
          </button>
        )}
      </div>
    </div>
  )
}

export default RecentCourseCard
