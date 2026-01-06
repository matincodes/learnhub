import { Input } from '@/components/ui/input'
import useTopNavLogic from '@/hooks/use-top-nav'
import { memo, useCallback, useMemo, useState } from 'react'
import { HiXMark } from 'react-icons/hi2'
import { adminNotification, notifications } from '../../data/notificationData'
import Notification from './notification'

const TopNav = () => {
  const { state, actions } = useTopNavLogic()

  // Common Elements
  const actionsGroup = useMemo(
    () => (
      <div className="flex items-center gap-3 md:gap-4">
        {state.showSearch && (
          <>
            <NavSearch
              value={state.searchInputValue}
              isSearchOpen={state.isSearchOpen}
              onFocus={actions.handleOpenSearch}
              onChange={actions.handleSearchInput}
              onClose={actions.handleCloseSearch}
            />
            <StreakBadge />
          </>
        )}
        <NotificationMenu
          isAdmin={
            state.pathname.includes('/admin/dashboard') &&
            state.role === 'admin'
          }
        />
      </div>
    ),
    [
      actions.handleCloseSearch,
      actions.handleOpenSearch,
      actions.handleSearchInput,
      state.pathname,
      state.isSearchOpen,
      state.role,
      state.searchInputValue,
      state.showSearch,
    ],
  )

  return (
    <div className="flex w-full items-center justify-between bg-gray-100 px-3 py-3 sm:px-6 sm:py-4 lg:fixed lg:right-0 lg:z-50 lg:w-[calc(100%-280px)] lg:px-6 min-[1024px]:float-right">
      {/* --- Mobile Layout --- */}
      <div className="flex w-full flex-col gap-y-4 lg:hidden">
        {/* Mobile Header: Logo & Actions */}
        <div className="flex w-full items-center justify-between">
          {!state.isSearchOpen && (
            <img
              src="/assets/learnhub-nobg.png"
              alt="LearnHub"
              className="h-8 w-auto"
            />
          )}

          <div className={state.isSearchOpen ? 'w-full' : 'flex justify-end'}>
            {state.isSearchOpen ? (
              <NavSearch
                value={state.searchInputValue}
                onFocus={actions.handleOpenSearch}
                onChange={actions.handleSearchInput}
                onClose={actions.handleCloseSearch}
              />
            ) : (
              <NotificationMenu
                isAdmin={
                  state.pathname.includes('/admin/dashboard') &&
                  state.role === 'admin'
                }
              />
            )}
          </div>
        </div>

        {/* Mobile Title Section */}
        <div className="my-2">
          <NavTitle
            title={state.displayTitle}
            showBack={state.showBackButton}
            showWelcome={state.showWelcomeMessage}
            userName={state.userProfile?.first_name}
            onBack={actions.handleGoBack}
          />
        </div>
      </div>

      {/* --- Desktop Layout --- */}
      <div className="hidden w-full items-center justify-between gap-4 lg:flex">
        <NavTitle
          title={state.displayTitle}
          showBack={state.showBackButton}
          showWelcome={state.showWelcomeMessage}
          userName={state.userProfile?.first_name}
          onBack={actions.handleGoBack}
        />

        <div className="flex items-center justify-end gap-x-4 lg:basis-[45%]">
          {actionsGroup}
        </div>
      </div>
    </div>
  )
}

// --- Sub-Components ---

function BackButton({ onClick }) {
  return (
    <img
      src="/assets/arrow-left-01.svg"
      onClick={onClick}
      className="mr-2 cursor-pointer"
      alt="Go back"
    />
  )
}

function StreakBadge({ streak = 12 }) {
  return (
    <button className="flex h-8 items-center justify-center gap-1 rounded-full bg-white p-3">
      <p className="font-semibold">{streak}</p>
      <img src="/assets/fire.svg" alt="Streak" className="h-5 w-5" />
    </button>
  )
}

function NavTitle({ title, showBack, showWelcome, userName, onBack }) {
  return (
    <div className="relative flex flex-col items-start justify-start">
      <h2 className="flex items-center text-nowrap text-lg font-semibold capitalize sm:text-2xl lg:text-2xl">
        {showBack && <BackButton onClick={onBack} />}
        {title}
      </h2>
      {showWelcome && (
        <p className="mt-1 text-sm capitalize text-gray-500">
          Welcome Back, {userName} 👋
        </p>
      )}
    </div>
  )
}

function NavSearch({ value, isSearchOpen, onFocus, onChange, onClose }) {
  return (
    <div className="flex h-10 w-full items-center justify-between overflow-hidden rounded-lg border bg-white pr-2 focus-within:border-normal_yellow">
      {!isSearchOpen && (
        <img src="/assets/search-01.svg" alt="Search" className="ml-3" />
      )}
      <Input
        type="text"
        placeholder="Search for courses in your collection"
        className="border-none outline-none placeholder:font-['Nunito'] placeholder:text-sm placeholder:font-light placeholder:leading-5 placeholder:text-zinc-500"
        value={value}
        onFocus={onFocus}
        onChange={onChange}
      />
      {isSearchOpen && (
        <HiXMark
          size={28}
          className="cursor-pointer text-[#303031]"
          onClick={onClose}
        />
      )}
    </div>
  )
}

const NotificationMenu = memo(function NotificationMenu({ isAdmin }) {
  const [activeTab, setActiveTab] = useState(1)

  const handleClearAll = useCallback(() => {
    console.log('Clear logic here')
  }, [])

  // 2. Calculate data based on props
  const sourceData = isAdmin ? adminNotification : notifications

  const unreadCount = sourceData.filter(v => v?.unread).length

  // 3. Filter data for display
  const displayData =
    activeTab === 2 ? sourceData.filter(v => v?.unread) : sourceData

  return (
    <Notification>
      {/* Trigger */}
      <Notification.Trigger className="relative grid size-8 place-content-center rounded-full bg-white p-2 hover:bg-gray-100">
        <img src="/assets/Vector.svg" alt="Bell" />
      </Notification.Trigger>

      {/* Content - Now we pass data INTO it */}
      <Notification.Content
        activeTab={activeTab}
        onTabChange={setActiveTab}
        unreadCount={unreadCount}
        onClearAll={handleClearAll}
      >
        {/* We map the items HERE, giving us full control */}
        {displayData.map((item, index) => (
          <Notification.Item key={index} {...item} />
        ))}
      </Notification.Content>
    </Notification>
  )
})

NotificationMenu.displayName = 'NotificationMenu'

TopNav.displayName = 'TopNav'
export default memo(TopNav)
