import { achievements } from '@/data/dashboard'
import { useUpdateProfile, useUserProfile } from '@/hooks/use-user-profile'
import { createFileRoute } from '@tanstack/react-router'
import { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/profile',
)({
  component: Profile,
})

function Profile() {
  const [profileImageFile, setProfileImageFile] = useState(null) // <-- Store the file object
  const [profileImageUrl, setProfileImageUrl] = useState('')
  const [editFormState, setEditFormState] = useState(false)
  const userprofile = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()

  const { data: userProfile } = useUserProfile()
  const updateProfileMutation = useUpdateProfile()

  // Change Image
  const handleImageChange = () => {
    const image = userprofile.current.files[0]
    if (image) {
      setProfileImageFile(image) // <-- Store the actual file
      console.log(image)
      setProfileImageUrl(URL.createObjectURL(image)) // <-- Create a temporary URL for preview
    }
  }

  const handleInputText = () => {
    setEditFormState(true)
  }

  const handlebackState = () => {
    setEditFormState(false)
  }

  function HandleSubmit(e) {
    e.preventDefault()

    // Use FormData to send the data
    const formData = new FormData()

    const firstName = firstNameRef.current.value.trim()
    const lastName = lastNameRef.current.value.trim()
    const email = emailRef.current.value.trim()

    // Append fields that have a value
    if (firstName) formData.append('first_name', firstName)
    if (lastName) formData.append('last_name', lastName)
    if (email) formData.append('email', email)
    if (profileImageFile) {
      console.log('Profile Image File:', profileImageFile)
      formData.append('profile_image', profileImageFile)
    }

    console.log('Submitting FormData...')
    updateProfileMutation.mutate(formData) // Send only the fields that are filled in
  }

  return (
    <div className="relative grid gap-6 lg:flex">
      {/* Left */}
      <div
        className={`space-y-[50px] overflow-hidden lg:basis-[50%] ${editFormState ? 'hidden lg:grid' : ''} z-20 rounded-2xl bg-white p-1 lg:p-5`}
      >
        {/* User Profile */}

        <div className="relative flex flex-col space-y-5 p-2">
          <button
            className="absolute right-3 flex items-center justify-center gap-3 rounded-2xl bg-[#ebe9e9f8] px-3 py-2 font-san text-[#bbbbbbaf] lg:-right-2"
            onClick={() => handleInputText(lastNameRef)}
          >
            <img
              src="/assets/mockups/edit.svg"
              alt=""
              width={'13px'}
              className="cursor-pointer text-[#bbbbbbaf]"
            />
            Edit Details
          </button>

          {/* Image and name */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="grid h-[100px] w-[100px] justify-center overflow-hidden rounded-full">
              <img
                src={
                  profileImageUrl ||
                  userProfile?.profile_image ||
                  '/assets/profile.png'
                }
                alt=""
                className="w-full bg-red-500 object-cover"
              />
            </div>
            <p className="text-center font-san text-[18px] font-medium">
              {userProfile?.first_name} {userProfile?.last_name}
            </p>
          </div>
          {/* Image and name */}

          {/* Cards */}
          <div className="flex justify-center space-x-5">
            <div className="space-y-2 rounded-2xl border p-2 font-san lg:basis-[45%]">
              <p className="text-[13px] font-[500] text-[#989494]">
                Course Completed
              </p>
              <h2 className="text-[20px] font-bold">
                {userProfile?.completed_courses}
              </h2>
            </div>
            <div className="space-y-2 rounded-2xl border p-2 font-san lg:basis-[45%]">
              <p className="text-[13px] font-[500] text-[#989494]">
                On Going Courses
              </p>
              <h2 className="text-[20px] font-bold">
                {userProfile?.ongoing_courses}
              </h2>
            </div>
          </div>
          {/* Cards */}
        </div>
        {/* User Profile */}

        {/* Achievememts */}
        <div className="flex flex-col space-y-5 p-2">
          <p className="font-san text-[18px] font-medium">Achievements</p>

          <div className="grid grid-cols-3 items-center gap-x-4 gap-y-7 lg:grid-cols-4">
            {achievements.map(achievement => (
              <div
                key={uuidv4()}
                className="flex flex-col items-center justify-center space-y-2 p-0 text-center"
              >
                <img src={achievement.image} alt="" className="w-[60px]" />
                <p className="font-montserrat text-[14px] font-semibold lg:text-[14px]">
                  {achievement.title}
                </p>

                <p className="font-montserrat text-[4px] font-medium lg:text-[7px]">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Achievememts */}
      </div>
      {/* Left */}

      {/* ## Right */}

      {editFormState === false ? (
        <div className="basis-[60%] place-content-center space-y-3 text-center font-san lg:grid">
          <p className="text-[20px] font-[500] text-[#37495780]">
            No Information Available
          </p>
          <p className="text-[15px] text-[#37495780]">Click Edit Details</p>
        </div>
      ) : (
        <div
          className={`absolute left-0 top-0 z-50 grid w-[100%] space-y-4 rounded-2xl bg-white p-5 lg:relative lg:z-0 lg:basis-[60%] lg:space-y-24`}
        >
          <p className="hidden p-3 font-san text-[25px] font-medium lg:flex">
            My Details
          </p>
          <p
            className="flex cursor-pointer items-center space-x-2 p-2 font-san text-[18px] font-medium lg:hidden"
            onClick={handlebackState}
          >
            {' '}
            <img src="/assets/mockups/angle-left.png" alt="" /> Back
          </p>

          <div className="relative flex items-center justify-center">
            <div className="grid h-[200px] w-[200px] justify-center overflow-hidden rounded-full lg:absolute">
              <img
                src={
                  profileImageUrl ||
                  userProfile?.profile_image ||
                  '/assets/profile.png'
                }
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* Change Image */}
            <input
              type="file"
              name="changeUserImage"
              accept="image/*"
              id="file-input"
              className="hidden"
              ref={userprofile}
              onChange={handleImageChange}
            />
            <label
              htmlFor="file-input"
              className="relative bottom-[-70px] right-[60px] lg:right-[-60px]"
            >
              <div className="z-30 flex h-[50px] w-[50px] cursor-pointer place-content-center items-center overflow-hidden rounded-full bg-[#F7F7F7]">
                <img
                  src="/assets/mockups/edit.svg"
                  alt=""
                  className="object-cover"
                  width={'20px'}
                />
              </div>
            </label>
            {/* Change Image */}
          </div>

          <form
            onSubmit={HandleSubmit}
            className="left-0 w-full space-y-7 p-2 pb-[90px] lg:space-y-[60px] lg:p-6"
          >
            {/* FirstName */}
            <div className="grid space-y-3">
              <label
                htmlFor="firstName"
                className="basis-[40%] pb-3 font-san text-[17px] tracking-wide text-[#000] lg:basis-0 lg:p-0 lg:font-medium"
              >
                First Name
              </label>
              <div className="flex basis-full justify-between gap-4">
                <input
                  id="firstName"
                  defaultValue={userProfile?.first_name}
                  type="text"
                  ref={firstNameRef}
                  // readOnly = {inputFocusState}
                  className="outline-none] flex w-full items-center rounded-xl p-2 font-san text-[17px] font-semibold placeholder:text-[#000] placeholder:text-[#aaaa] lg:text-[20px] lg:font-medium lg:text-[#AAAAAA]"
                />
              </div>
            </div>
            {/* FirstName */}
            {/* LastName */}
            <div className="grid space-y-3">
              <label
                htmlFor="lastName"
                className="basis-[40%] pb-3 font-san text-[17px] tracking-wide text-[#000] lg:basis-0 lg:p-0 lg:font-medium"
              >
                Last Name
              </label>

              <div className="flex basis-full justify-between gap-4">
                <input
                  id="lastName"
                  defaultValue={userProfile?.last_name}
                  type="text"
                  ref={lastNameRef}
                  // readOnly = {inputFocusState}
                  className="outline-none] flex w-full items-center rounded-xl p-2 font-san text-[17px] font-semibold placeholder:text-[#000] placeholder:text-[#aaaa] lg:text-[20px] lg:font-medium lg:text-[#AAAAAA]"
                />
              </div>
            </div>
            {/* LastName */}
            {/* Email */}
            <div className="grid space-y-3">
              <label
                htmlFor="email"
                className="basis-[40%] pb-3 font-san text-[17px] tracking-wide text-[#000] lg:basis-0 lg:p-0 lg:font-medium"
              >
                Email
              </label>
              <div className="flex basis-full justify-between gap-4">
                <input
                  id="email"
                  defaultValue={userProfile?.email}
                  type="email"
                  ref={emailRef}
                  // readOnly = {inputFocusState}
                  className="outline-none] flex w-full items-center rounded-xl p-2 font-san text-[17px] font-semibold placeholder:text-[#000] placeholder:text-[#aaaa] lg:text-[20px] lg:font-medium lg:text-[#AAAAAA]"
                />
              </div>
            </div>
            {/* Email */}

            <button
              className={`rounded-lg border-none ${updateProfileMutation.isPending ? 'cursor-not-allowed bg-[#FDE6BF]' : 'bg-normal_yellow'} px-[35px] py-[18px] text-[20px] font-medium text-white outline-none`}
            >
              {updateProfileMutation.isPending
                ? 'Please wait...'
                : 'Save Changes'}
            </button>
          </form>
        </div>
      )}
      {/* Right */}
    </div>
  )
}
