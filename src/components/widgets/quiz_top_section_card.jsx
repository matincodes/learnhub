import { LuClock12 } from "react-icons/lu";
import { cn } from '../../lib/utils'
import { Button } from '@/components/ui/button'
const QuizTopSectionCard = ({  image, title, date, topic }) => {
  return (
    <div className={cn('grid w-full grid-cols-1 gap-y-3')}>
      <div className="h-[120px] relative w-full sm:h-[170px] 2xl:h-[250px]">
        <img
          src={image}
          className="h-full w-full rounded-lg object-cover"
          alt=""
        />
        <div className='w-full absolute h-full rounded-lg inset-0 bg-gradient-to-b from-white/10 to-black/80'>
        
        <p className='flex text-white font-medium absolute bottom-2 left-2 items-center gap-x-2'>
            <LuClock12 size={18}/>
            <span>Starts {date}</span>
        </p>
        </div>
      </div>
      <div className="flex w-full  items-end justify-between">
        <div className="space-y-3">
          <h3 className="text-base font-semibold">{title}</h3>
          <p>
            Topic: <span>{topic}</span>
          </p>
        </div>
        <Button className="flex h-12 items-center justify-center gap-x-2 rounded-lg bg-normal_yellow px-4 text-white">
          <p className="font-medium ">
            Start Quiz
          </p>
         
        </Button>
      </div>
    </div>
  )
}

export default QuizTopSectionCard
