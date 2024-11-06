import { createFileRoute, useNavigate, useRouter } from '@tanstack/react-router'
import { MdNavigateBefore } from 'react-icons/md'
import { notifications } from '@/data/notificationData'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { NotificationWidget } from '@/components/topNav/notificationModal'

export const Route = createFileRoute('/(userDashboard)/_dashboardLayout/dashboard/notifications')({
  component: NotificationsPage,
})

function NotificationsPage() {
const navigate = useNavigate()
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
    <div className="w-full">
      <div className="mb-4 flex items-center">
        <button onClick={() => navigate(-1)}>
          <MdNavigateBefore size={22} />
        </button>
        <p className="font-medium">Notifications</p>
      </div>

      <div className="w-full rounded-xl bg-white py-5">
        <div className="mb-3 flex w-full items-center justify-between border-b px-3 pb-2">
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
