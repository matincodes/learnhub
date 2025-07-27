import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { useAdmin } from '@/context/admin-context'
import { createFileRoute } from '@tanstack/react-router'
import { Ban, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/settings',
)({
  component: SettingsContent,
})

function SettingsContent() {
  const { updatePassword, dashboard } = useAdmin()
  const { first_name } = dashboard.admin_data

  const [showPassword, setShowPassword] = useState(false)

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = async data => {
    await updatePassword(data)
    reset()
  }

  return (
    <>
      <div className="flex w-full items-center justify-between bg-gray-100 px-20 py-3 lg:fixed lg:right-0 lg:z-50 lg:w-[calc(100%-280px)]">
        <div>
          <h1 className="font-san text-[32px] font-semibold text-[#303031]">
            Settings
          </h1>
          <p className="font-sans text-xl font-normal text-[#848484]">
            Welcome Back, {first_name} 👋
          </p>
        </div>
        <img
          src="\assets\quiz\notification.svg"
          alt="icon"
          className="size-8"
        />
      </div>
      <div className="mt-[120px] px-16">
        <div className="rounded-xl bg-white">
          <div className="">
            {/* Password Settings */}
            <div className="space-y-5 rounded-lg bg-white p-6">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">Password Settings</h2>
                <p className="text-sm text-gray-500">
                  Modify your current password.
                </p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-[40px] space-y-4 lg:flex lg:space-x-4 lg:space-y-0">
                  <div className="relative flex-1">
                    <input
                      {...register('old_password', { required: true })}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Current Password"
                      className="'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring disabled:opacity-50' flex h-10 w-full rounded-md border px-3 py-2 pr-10 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed"
                    />
                    <button
                      className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>

                  <div className="relative flex-1">
                    <input
                      {...register('new_password', { required: true })}
                      type={showPassword ? 'text' : 'password'}
                      placeholder="New Password"
                      className="'border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring disabled:opacity-50' flex h-10 w-full rounded-md border px-3 py-2 pr-10 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed"
                    />
                    <button
                      className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-500 hover:text-gray-700"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-[54px] w-auto rounded-xl border border-normal_yellow bg-white px-3 py-2 text-normal_yellow"
                >
                  Save Password
                </button>
              </form>
            </div>
            <div className="mx-[25px] my-10 border-[3px] border-[#F7F7F7]" />

            {/* Notification Settings */}
            <div className="space-y-6 rounded-lg bg-white p-6">
              <div className="space-y-1">
                <h2 className="text-xl font-semibold">Notification Settings</h2>
                <p className="text-sm text-gray-500">
                  Choose how you stay informed.
                </p>
              </div>

              <div className="space-y-8">
                <NotificationToggle
                  label="Send me Email Notifications on new Learner Registration"
                  description="Note: You won’t be notified through emails if you are actively in Learnhub app or on your computer"
                />
                <NotificationToggle
                  label="Pop up Notifications on my computer when Learnhub is open"
                  description="Note: To prevent you from being irritatingly overnotified, you will get pop-up alerts when learnhub app is open "
                />
                <NotificationToggle
                  label="Notify me on New Quiz Submission"
                  description="You will be notified when a learner submits a quiz"
                />
                <NotificationToggle
                  label="Mute my Notifications"
                  description="All your notifications will be muted until you switch it off"
                />
                <Button className="mt-20 w-auto rounded-xl border border-normal_yellow bg-normal_yellow px-3 py-2 text-white">
                  Save Changes
                </Button>
              </div>
            </div>
            <div className="mx-[20px] my-10 border-[3px] border-[#F7F7F7]" />

            {/* Delete Account */}
            <div className="px-[20px] pt-4">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="p-2 font-semibold text-red-500 hover:bg-red-50 hover:text-red-600"
                  >
                    <span className="flex items-center gap-3">
                      <Ban size={14} strokeWidth={3} />
                      Delete my account
                    </span>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-md bg-white p-0 px-0">
                  <AlertDialogHeader>
                    <div className="flex items-center justify-between">
                      <AlertDialogTitle className="px-10 py-3">
                        Delete Account?
                      </AlertDialogTitle>
                      <AlertDialogCancel className="border-none">
                        <img
                          src="\assets\quiz\small-cross.svg"
                          alt="icon"
                          className="size-5"
                        />
                      </AlertDialogCancel>
                    </div>
                    <div className="my-10 border-[2px] border-[#F7F7F7]" />
                    <AlertDialogDescription className="px-10 text-[15px] font-normal leading-5">
                      Are you sure you want to delete this? Once deleted, this
                      action cannot be undone, and all associated data will be
                      permanently lost.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <div className="flex items-center justify-end space-x-4 bg-[#F7F7F7] px-5 py-4">
                    <AlertDialogCancel className="border-[1px] border-[#F7AE30] text-[#F7AE30]">
                      cancel
                    </AlertDialogCancel>
                    <AlertDialogAction className="bg-red-500 text-white hover:bg-red-600">
                      Delete
                    </AlertDialogAction>
                  </div>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

// Password Input Component

// Notification Toggle Component
function NotificationToggle({ label, description }) {
  return (
    <div className="flex items-center justify-between">
      <div className="mr-4 flex-1 space-y-1">
        <h3 className="font-medium">{label}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Switch className="data-[state=checked]:bg-[#F7AE30] data-[state=unchecked]:bg-[#808080]" />
    </div>
  )
}
