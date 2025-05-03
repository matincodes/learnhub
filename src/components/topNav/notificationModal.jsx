import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { PiDotOutlineFill } from 'react-icons/pi'
import { notifications, adminNotification } from '../../data/notificationData'
import { /*Link*/ useLocation, /*useRouteContext*/ } from '@tanstack/react-router'

export function NotificationWidget({
  message,
  description,
  image,
  date,
  unread,
}) {
  return (
      <div
      className={`${unread === false ? 'bg-[#f4f4f4a6] text-[#848484]' : ''} grid w-full grid-cols-5 items-start gap-1 border-b p-3`}
    >
      <img src={image} alt="" />
      <div className="col-span-3 flex w-full flex-col items-start justify-start gap-y-1">
        <h3 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-start font-semibold">
          {message}
        </h3>
        <p className="line-clamp-3 w-full text-start">{description}</p>
      </div>
      <div className="flex items-center">
        <p className="text-[13px] font-medium">{date}</p>
        {unread && (
          <PiDotOutlineFill className="text-normal_yellow" size={24} />
        )}
      </div>
    </div>
    
  )
}

const NotificationModal = ({ close }) => {
  const pathname = useLocation({ select: s => s.pathname.replace(/\/$/, '') })
  const role = 'admin'
  const [active, setActive] = useState(1)
  const [filteredData, setFilteredData] = useState(
    pathname.includes('/admin/dashboard') && role == 'admin'
      ? adminNotification
      : notifications,
  )
  const unreadNotifications = filteredData.filter(v => v?.unread).length

  useEffect(() => {
    if (active === 2) {
      setFilteredData(filteredData.filter(v => v?.unread))
      console.log('unread', filteredData)
    } else {
      setFilteredData(
        pathname.includes('/admin/dashboard') && role == 'admin'
          ? adminNotification
          : notifications,
      )
      console.log('all notification', filteredData)
    }
  }, [active])


  return (
    <div
      onClick={e => e.stopPropagation()}
      className="absolute lg:top-14 top-16 sm:block lg:"
    >
      <div
        onClick={close}
        className="absolute inset-0 h-full w-full"
      ></div>
      <div
        onClick={e => e.stopPropagation()}
        className="oveflow-y-auto fixed z-[100] h-[100vh] w-[370px] rounded-xl bg-white py-5 lg:max-h-[85%] lg:w-[450px] lg:right-[15px] right-[10px]"
      >
        <h2 className="mb-4 px-3 text-start font-medium">Notifications</h2>
        <div className="flex w-full items-center justify-between border-b px-3 pb-2">
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
              Unread({unreadNotifications})
            </button>
          </div>
          <button className="font-medium text-red-500">Clear All</button>
        </div>

        <div className="no-scrollbar flex h-[64vh] w-full flex-col items-start justify-start overflow-y-auto">
          {unreadNotifications <= 0 && active === 2 ? (
            <div className=' h-full w-full flex flex-col justify-center items-center'>
            <img src="/assets/notification2.png" alt="" className='w-[150px]'/>
              <h1 className='font-inter text-[#303031] font-[700] text-[17px]'>No Notifications Yet</h1>
              <p className='text-[#808080] '>Stay tuned! Updates will appear here.</p>
            </div>
           
          ) : (
            <>
          {filteredData.map((item, index) => (
            <NotificationWidget {...item} key={index}  />
          ))}
            </>
          )}

        </div>
      </div>
    </div>
  )
}

export default NotificationModal
