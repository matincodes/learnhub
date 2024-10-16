import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { achievements } from '@/data/dashboard'
import { v4 as uuidv4 } from 'uuid'


export const Route = createFileRoute('/dashboard/profile')({
  component: () => Profile(),
})

const Profile = () => {
  const [profile, setProfile] = useState(null)
  const [buttonState, setButtonState] = useState(false)
  const [inputFocusState, setInputFocusState] = useState(true)
  const userProfileImage = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()

  const handleImageChange = () =>{
    setProfile(userProfileImage.current.files[0])
  }

  const handleInputText = (inputRef) =>{
    setInputFocusState(false)
    inputRef.current.focus()
  }
  
  const handleInputTextChange = (inputRef) =>{
    const inputLength = inputRef.current.value
    if(inputLength.length > 0){
      setButtonState(true)
    }
    else if(inputLength.length === 0){
      setInputFocusState(true)
      setButtonState(false)
    }
  }
  
  
  // Set the profile Image
  window.localStorage.setItem('userProfile', profile ?  URL.createObjectURL(profile) : '/assets/profile.png') 
  const profileImage = window.localStorage.getItem('userProfile')




  return (
    <div className="lg:flex grid gap-6 ">
      {/* Left */}
      <div className="left basis-[40%] space-y-[50px] overflow-hidden rounded-2xl border bg-white p-5">
        {/* User Profile */}
        <div className="flex flex-col space-y-5 p-2">
          {/* Image and name */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="grid h-[100px] w-[100px] justify-center overflow-hidden rounded-full ">
              <img
                src={profileImage}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center font-san text-[18px] font-medium">
              Abisola Elizabeth
            </p>
          </div>
          {/* Image and name */}

          {/* Cards */}
          <div className="flex justify-evenly">
            <div className="lg:basis-[35%] space-y-2 rounded-2xl border p-2 font-san">
              <p className="text-[14px] font-[500] text-[#989494]">
                Course Completed
              </p>
              <h2 className="text-[20px] font-bold">15</h2>
            </div>
            <div className="lg:basis-[35%] space-y-2 rounded-2xl border p-2 font-san">
              <p className="text-[14px] font-[500] text-[#989494]">
                On Going Courses
              </p>
              <h2 className="text-[20px] font-bold">20</h2>
            </div>
          </div>
          {/* Cards */}
        </div>
        {/* User Profile */}

        {/* Achievememts */}
        <div className="flex flex-col space-y-5 p-2">
          <p className="font-san text-[18px] font-medium">Achievements</p>

          <div className="grid grid-cols-4 gap-x-10 gap-y-7 items-center place-content-center">  
          {achievements.map(achievement => (
              <div key={uuidv4()} className="flex flex-col items-center justify-center text-center space-y-2 p-0">
                
                  <img
                    src={achievement.image}
                    alt=""
                    className="w-[60px]"
                  />
                  <p className="text-[16px] font-semibold font-montserrat">{achievement.title}</p>
                
                <p className="text-[7px] font-medium font-montserrat">{achievement.description}</p>
              </div>
            )
          )}

          </div>
        </div>
        {/* Achievememts */}
      </div>
      {/* Left */}



      {/* ## Right */}
      <div className="left basis-[60%] lg:space-y-24 space-y-4 rounded-2xl border bg-white p-5">
        <p className="font-san text-[25px] font-medium p-3">My Details</p>

        <div className="relative lg:flex hidden items-center justify-center">
          <div className="absolute grid h-[200px] w-[200px] justify-center overflow-hidden rounded-full ">
            <img
              src={profileImage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* Change Image */}
          <input type="file" name="changeUserImage" id="file-input" className='hidden' ref={userProfileImage} onChange={handleImageChange} />
          <label htmlFor="file-input">
          <div className="relative bottom-[-70px] right-[-70px] z-30 flex h-[50px] w-[50px] place-content-center items-center overflow-hidden rounded-full bg-[#F7F7F7] cursor-pointer">
            <img
              src="/assets/mockups/camera.svg"
              alt=""
              className="object-cover"
              width={'20px'}
            />
          </div>
          </label>
          {/* Change Image */}
        </div>

        <form className="space-y-[60px] lg:p-6 lg:pb-[90px] p-2">
          {/* FirstName */}
          <div className="space-y-7 lg:border lg:border-l-0 lg:border-r-0 lg:border-t-0 lg:grid flex items-end">
            <label
              htmlFor="firstName"
              className="font-san text-[17px] lg:font-medium tracking-wide lg:text-[#000] text-[#AAAAAA] lg:basis-0 basis-[40%] lg:p-0 pb-3"
            >
              First Name
            </label>
            <div className="basis-full flex justify-between p-3 gap-4">
            <input
              id="firstName"
              placeholder="Abisola"
              type="text"
              ref={firstNameRef}
              onChange={() => handleInputTextChange(firstNameRef)}
              readOnly = {inputFocusState}
              className="lg:w-full  lg:pb-1 font-san lg:text-[20px] text-[17px] lg:font-medium placeholder:text-[#000] lg:placeholder:text-[#aaaa] font-semibold text-[#000] lg:text-[#AAAAAA] outline-none "
            />
            <img src="/assets/mockups/edit.svg" alt="" width={'18px'} className='cursor-pointer' onClick={ () => handleInputText(firstNameRef)}/>
            </div>
          </div>
          {/* FirstName */}
          {/* LastName */}
          <div className="space-y-7 lg:border lg:border-l-0 lg:border-r-0 lg:border-t-0 lg:grid flex items-end">
            <label
              htmlFor="firstName"
              className="font-san text-[17px] lg:font-medium tracking-wide lg:text-[#000] text-[#AAAAAA] lg:basis-0 basis-[40%] lg:p-0 pb-3"
            >
              Last Name
            </label>
            
            <div className="basis-full flex justify-between p-3 gap-4">
            <input
              id="lastName"
              placeholder="Elizabeth"
              type="text"
              ref={lastNameRef}
              onChange={() => handleInputTextChange(lastNameRef)}
              readOnly = {inputFocusState}
              className="lg:w-full  lg:pb-1 font-san lg:text-[20px] text-[17px] lg:font-medium placeholder:text-[#000] lg:placeholder:text-[#aaaa] font-semibold text-[#000] lg:text-[#AAAAAA] outline-none "
            />
            <label htmlFor="lastName">
            <img src="/assets/mockups/edit.svg" alt="" width={'18px'} className='cursor-pointer' onClick={ () => handleInputText(lastNameRef)}  />
            </label>
            </div>

          </div>
          {/* LastName */}
          {/* Email */}
          <div className="space-y-7 lg:border lg:border-l-0 lg:border-r-0 lg:border-t-0 lg:grid flex items-end">
            <label
              htmlFor="email"
              className="font-san text-[17px] lg:font-medium tracking-wide lg:text-[#000] text-[#AAAAAA] lg:basis-0 basis-[40%] lg:p-0 pb-3"
            >
              Email
            </label>
          <div className="basis-full flex justify-between p-3 gap-4">
            <input
              id="email"
              placeholder="Anifowsekb@gmail.com"
              type="email"
              ref={emailRef}
              onChange={() => handleInputTextChange(emailRef)}
              readOnly = {inputFocusState}
              className="lg:w-full  lg:pb-1 font-san lg:text-[20px] text-[17px] lg:font-medium placeholder:text-[#000] lg:placeholder:text-[#aaaa] font-semibold text-[#000] lg:text-[#AAAAAA] outline-none "
            />
            <img src="/assets/mockups/edit.svg" alt="" width={'18px'} className='cursor-pointer' onClick={ () => handleInputText(emailRef)}  />
            </div>

          </div>
          {/* Email */}

          <button className={`rounded-lg border-none ${buttonState ? 'bg-normal_yellow' : 'bg-[#FDE6BF]' } px-[35px] py-[18px] text-[20px] font-medium text-white outline-none`}>
            Save Changes
          </button>
        </form>
      </div>
      {/* Right */}
    </div>
  )
}
