import React, {
  useState,
  createContext,
  useContext,
  useRef,
  useEffect,
} from 'react'
import { PiDotOutlineFill } from 'react-icons/pi'
import { cn } from '../../lib/utils'

// --- CONTEXT ---
const NotificationContext = createContext()

export function NotificationRoot({ children, className = '' }) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef(null)
  const toggle = () => setIsOpen(p => !p)
  const close = () => setIsOpen(false)

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        close()
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <NotificationContext.Provider value={{ isOpen, toggle, close }}>
      <div ref={containerRef} className={`relative ${className}`}>
        {children}
      </div>
    </NotificationContext.Provider>
  )
}

const NotificationTrigger = ({ children, className }) => {
  const { toggle } = useContext(NotificationContext)
  return (
    <button onClick={toggle} className={className}>
      {children}
    </button>
  )
}

// --- ITEM ---
const NotificationItem = ({ message, description, image, date, unread }) => {
  return (
    <div
      className={cn(
        'grid w-full grid-cols-5 items-start gap-1 border-b p-3 transition-colors hover:bg-gray-50',
        !unread ? 'bg-[#f4f4f4a6] text-[#848484]' : 'bg-white',
      )}
    >
      <img src={image} alt="" className="h-10 w-10 rounded-full object-cover" />
      <div className="col-span-3 flex w-full flex-col items-start justify-start gap-y-1">
        <h3 className="w-full overflow-hidden text-ellipsis whitespace-nowrap text-start font-semibold">
          {message}
        </h3>
        <p className="line-clamp-3 w-full text-start text-sm">{description}</p>
      </div>
      <div className="flex flex-col items-end gap-1">
        <p className="text-[11px] font-medium text-gray-500">{date}</p>
        {unread && (
          <PiDotOutlineFill className="text-normal_yellow" size={24} />
        )}
      </div>
    </div>
  )
}

// --- CONTENT ---
// Now accepts children, and controlled props for tabs
const NotificationContent = ({
  children,
  activeTab = 1,
  onTabChange,
  unreadCount = 0,
  onClearAll,
}) => {
  const { isOpen } = useContext(NotificationContext)

  // Check if children exist to determine empty state
  const hasNotifications = React.Children.count(children) > 0

  if (!isOpen) return null

  return (
    <div className="absolute right-[-80px] top-12 z-[100] w-[370px] rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 sm:right-0 lg:w-[450px]">
      {/* Header & Tabs */}
      <div className="pt-5">
        <h2 className="mb-4 px-3 text-start text-[14px] font-[500] text-[#848484]">
          Notifications
        </h2>
        <div className="flex w-full items-center justify-between border-b px-3 pb-2">
          <div className="flex items-center gap-x-3">
            <button
              onClick={() => onTabChange?.(1)}
              className={cn(
                'text-[13px] font-[700] transition-colors',
                activeTab === 1 ? 'text-normal_yellow' : 'text-gray-600',
              )}
            >
              All
            </button>
            <button
              onClick={() => onTabChange?.(2)}
              className={cn(
                'text-[13px] font-[400] transition-colors',
                activeTab === 2 ? 'text-normal_yellow' : 'text-[#848484]',
              )}
            >
              Unread ({unreadCount})
            </button>
          </div>
          <button
            onClick={onClearAll}
            className="text-[13px] font-[500] text-[#848484] hover:text-red-500"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* List Area - Renders Children Here */}
      <div className="no-scrollbar flex max-h-[60vh] w-full flex-col overflow-y-auto rounded-b-xl bg-white">
        {!hasNotifications ? (
          <div className="flex h-64 w-full flex-col items-center justify-center p-6 text-center">
            <img
              src="/assets/notification2.png"
              alt="Empty"
              className="w-[120px] opacity-80"
            />
            <h1 className="mt-4 font-inter text-[16px] font-[700] text-[#303031]">
              {activeTab === 2 ? 'No unread messages' : 'No Notifications Yet'}
            </h1>
            <p className="text-sm text-[#808080]">
              Stay tuned! Updates will appear here.
            </p>
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  )
}

// Export
const Notification = Object.assign(NotificationRoot, {
  Trigger: NotificationTrigger,
  Content: NotificationContent,
  Item: NotificationItem,
})

export default Notification
