import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { PiDotOutlineFill } from "react-icons/pi";
import { notifications } from '../../data/notificationData'

export function NotificationWidget({ message, description, image, date, unread }) {
  return (
    <div className="w-full grid grid-cols-5 items-start gap-1  border-b p-3">
      <img src={image} alt="" />
      <div className="flex w-full flex-col col-span-3 items-start justify-start gap-y-1">
        <h3 className="w-full text-start overflow-hidden text-ellipsis whitespace-nowrap font-semibold">
          {message}
        </h3>
        <p className="line-clamp-3 text-start w-full">{description}</p>
      </div>
      <div className="flex items-center">
        <p className="font-medium text-[13px]">{date}</p>
        {unread && <PiDotOutlineFill className="text-normal_yellow" size={24} />}
      </div>
    </div>
  )
}

const NotificationModal = ({ close }) => {
  const [active, setActive] = useState(1)
  const [filteredData, setFilteredData] = useState(notifications)

  useEffect(() => {
    if (active === 2) {
      setFilteredData(notifications.filter(v => !v?.unread))
    } else {
      setFilteredData(notifications)
    }
  }, [active])

  return (
    <div
    onClick={e => e.stopPropagation()}
    className="absolute right-3 top-16 hidden sm:block">
      <div
      onClick={close}
      className="fixed inset-0 z-50 h-full w-full"></div>
      <div
        onClick={e => e.stopPropagation()}
        className="oveflow-y-auto relative z-[100] max-h-[85%] w-[450px] rounded-xl bg-white py-5"
      >
        <h2 className="mb-4 text-start font-medium px-3">Notifications</h2>
        <div className="mb-3 px-3 border-b flex w-full items-center justify-between pb-2">
          <div className="flex items-center gap-x-3">
            <button
              onClick={() => setActive(1)}
              className={cn('font-medium', active == 1 && 'text-normal_yellow')}
            >
              All
            </button>
            <button
              onClick={() => setActive(2)}
              className={cn('font-medium', active == 2 && 'text-normal_yellow')}
            >
              Unread
            </button>
          </div>
          <button className="font-medium text-red-500">Clear All</button>
        </div>

        <div className="flex w-full flex-col items-start justify-start">
          {filteredData.map((item, index) => (
            <NotificationWidget {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default NotificationModal
