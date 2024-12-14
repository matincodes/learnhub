import { Dot } from 'lucide-react'
import { cn } from '../../lib/utils'
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from 'react';

const RecentCourseCard = ({ className, image, title, id, isQuiz }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  return (
    <div
      className={cn(
        'grid w-[15rem] grid-cols-1 gap-y-2 sm:w-[19rem]',
        className,
      )}
    >
      <div className="h-[120px] relative w-full sm:h-[141px] 2xl:h-[180px]">
        <img
          src={image}
          className="h-full w-full rounded-t-lg object-cover"
          alt=""
        />
       {!isQuiz && <button
        onClick={() => setIsFavorite(!isFavorite)}
        className='absolute top-2 right-2 text-white'
        >
          {isFavorite ?<IoMdHeart size={22}/> : <IoMdHeartEmpty size={22}/>}
        </button>}
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

       
      </div>
      {isQuiz && (
          <button
            onClick={() => window.open(`/dashboard/quizzes/${id}`, '_self')}
            className="text-xs font-medium border border-normal_yellow rounded-lg w-full h-12 mt-2 text-normal_yellow sm:text-[13px]"
          >
            Start Quiz
          </button>
        )}
    </div>
  )
}

export default RecentCourseCard
