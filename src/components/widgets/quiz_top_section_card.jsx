import { LuClock12 } from 'react-icons/lu'
import { cn } from '../../lib/utils'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'

const ExpiredModal = ({ close }) => {
  return (
    <div
      onClick={close}
      className="fixed inset-0 z-[100] h-full w-full bg-black/50"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="absolute inset-0 m-auto flex h-fit w-[95%] max-w-xl flex-col items-start gap-y-10 rounded-xl bg-white"
      >
        <div className="flex w-full items-center justify-between border-b p-4">
          <h2 className="text-base font-semibold sm:text-lg">Quiz Expired</h2>
          <button onClick={close}>
            <MdClose size={22} />
          </button>
        </div>
        <p className="p-4">
          In the meantime, you can take other available quizzes, you’ll be
          notified when the Monthly quiz is back!
        </p>
        <div className="flex w-full p-4 items-center rounded-b-xl gap-x-2 bg-gray-200 font-semibold">
          <LuClock12 size={16} />
          <p className="text-sm">Next Monthly Quiz Starts November 1st</p>
        </div>
      </div>
    </div>
  )
}

const QuizTopSectionCard = ({ image, title, date, topic }) => {
  const [isExpired, setIsExpired] = useState(false)
  return (
    <div
      onClick={() => setIsExpired(true)}
      className={cn('grid w-full grid-cols-1 gap-y-3')}
    >
      <div className="relative h-[120px] w-full sm:h-[170px] 2xl:h-[250px]">
        <img
          src={image}
          className="h-full w-full rounded-lg object-cover"
          alt=""
        />
        <div className="absolute inset-0 h-full w-full rounded-lg bg-gradient-to-b from-white/10 to-black/80">
          <p className="absolute bottom-2 left-2 flex items-center gap-x-2 font-medium text-white">
            <LuClock12 size={18} />
            <span>Starts {date}</span>
          </p>
        </div>
      </div>
      <div className="flex w-full items-end justify-between">
        <div className="space-y-3">
          <h3 className="text-base font-semibold">{title}</h3>
          <p>
            Topic: <span>{topic}</span>
          </p>
        </div>
        {/* <Button className="flex h-12 items-center justify-center gap-x-2 rounded-lg bg-normal_yellow px-4 text-white">
          <p className="font-medium ">
            Start Quiz
          </p>
         
        </Button> */}
      </div>
      {isExpired && <ExpiredModal close={() => setIsExpired(false)} />}
    </div>
  )
}

export default QuizTopSectionCard
