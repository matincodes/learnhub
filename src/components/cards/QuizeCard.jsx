import { useCallback } from 'react'
import QuizePopper from '../ui/QuizePopper'

const QuizeCard = ({ e, openId, setOpenId }) => {
  const { id, title, thumbnail, time_limit, total_questions } = e

  const togglePopper = useCallback(() => {
    setOpenId(prev => (prev === e.id ? null : e.id))
  }, [e.id, setOpenId])
  return (
    <div className=" ">
      <div
        style={{ backgroundImage: `url(${thumbnail})` }}
        className={`flex h-[170px] w-full items-start justify-end rounded-[8px] bg-cover bg-center p-2`}
      >
        <img
          onClick={togglePopper}
          src="\assets\quiz\menu-dot.svg"
          alt="icon"
          className="size-6 cursor-pointer"
        />
        {openId === id && <QuizePopper />}
      </div>
      <div className="relative mt-[10px]">
        <h2 className="font-san text-base font-semibold leading-[19px]">
          {title}
        </h2>
        <p className="mt-[17px] flex items-center gap-3">
          No of Questions - {total_questions}{' '}
          <img src="\assets\quiz\dot.svg" alt="icon" className="size-1" />
          Time limit - {time_limit}
        </p>
      </div>
    </div>
  )
}

export default QuizeCard
