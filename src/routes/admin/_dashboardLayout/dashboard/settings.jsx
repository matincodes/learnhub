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
import { Input } from '@/components/ui/input'
import { Switch } from '@/components/ui/switch'
import { createFileRoute } from '@tanstack/react-router'
import { Ban, Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

export const Route = createFileRoute(
  '/admin/_dashboardLayout/dashboard/settings',
)({
  component: SettingsContent,
})

function SettingsContent() {
  return (
    <div className="min-h-screen w-full rounded-xl bg-white">
      <div className="mx-auto max-w-4xl space-y-8 p-4 lg:p-6">
        {/* Password Settings */}
        <div className="space-y-4 rounded-lg bg-white p-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Password Settings</h2>
            <p className="text-sm text-gray-500">
              Modify your current password.
            </p>
          </div>

          <div className="space-y-4 lg:flex lg:space-x-4 lg:space-y-0">
            <PasswordInput placeholder="Current Password" />
            <PasswordInput placeholder="New Password" />
          </div>
          <Button
            variant="outline"
            className="w-auto rounded-xl border border-normal_yellow bg-white px-3 py-2 text-normal_yellow"
          >
            Change Password
          </Button>
        </div>

        {/* Notification Settings */}
        <div className="space-y-6 rounded-lg bg-white p-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Notification Settings</h2>
            <p className="text-sm text-gray-500">
              Choose how you stay informed.
            </p>
          </div>

          <div className="space-y-6">
            <NotificationToggle
              label="Send me Email Notifications on new Courses"
              description="Note: You won't be notified through emails if you are actively in Learnhub app or on your computer"
            />
            <NotificationToggle
              label="Pop up Notifications on my phone when Learnhub is open"
              description="Note: To prevent you from being irritatingly overnotified, you will get pop-up alerts when learnhub app is open"
            />
            <NotificationToggle
              label="Remind me on deadlines and new quizzes"
              description="You will be notified on new updates/upgrades"
            />
            <NotificationToggle
              label="Mute my Notifications"
              description="All your notifications will be muted until you switch it off"
            />
            <Button className="w-auto rounded-xl border border-normal_yellow bg-normal_yellow px-3 py-2 text-white">
              Save Changes
            </Button>
          </div>
        </div>

        {/* Delete Account */}
        <div className="pt-4">
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
            <AlertDialogContent className="max-w-md bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Account?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete this? Once deleted, this
                  action cannot be undone, and all associated data will be
                  permanently lost.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <div className="flex items-center justify-end space-x-4">
                <AlertDialogCancel className="bg-white">
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
  )
}

// Password Input Component
function PasswordInput({ placeholder }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="relative flex-1">
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        className="pr-10"
      />
      <button
        className="absolute inset-y-0 right-0 flex cursor-pointer items-center pr-3 text-gray-500 hover:text-gray-700"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  )
}

// Notification Toggle Component
function NotificationToggle({ label, description }) {
  return (
    <div className="flex items-center justify-between">
      <div className="mr-4 flex-1 space-y-1">
        <h3 className="font-medium">{label}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <Switch />
    </div>
  )
}
