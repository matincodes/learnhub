import { createFileRoute, useRouteContext } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
import { achievements } from '@/data/dashboard'
import { v4 as uuidv4 } from 'uuid'


export const Route = createFileRoute('/(userDashboard)/_dashboardLayout/dashboard/profile')({
  component: Profile,
})

function Profile() {
  const [profile, setProfile] = useState('')
  const [buttonState, setButtonState] = useState(false)
  const [editFormState, setEditFormState] = useState(false)
  const userprofile = useRef()
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const emailRef = useRef()
  const firstName = useRouteContext({ select: s => s.user?.firstName })
  const lastName = useRouteContext({ select: s => s.user?.lastName })
  const email = useRouteContext({ select: s => s.user?.email })

  // Change Image
  const handleImageChange = () =>{
    const image = (userprofile.current.files[0])
    if(image){
      const reader = new FileReader()
      reader.onloadend = () =>{
        const base64String = reader.result
        setProfile(base64String)
        window.localStorage.setItem('user', JSON.stringify({ image: base64String }))
      }
      reader.readAsDataURL(image)

    }

  }

  const handleInputText = () =>{
    setEditFormState(true)
  }

  const handlebackState = () =>{
    setEditFormState(false)
  }
  
  const handleInputTextChange = (inputRef) =>{
    const inputLength = inputRef.current.value
    if(inputLength.length > 0){
      setButtonState(true)
    }
    else if(inputLength.length === 0){
      // setInputFocusState(true)
      setButtonState(false)
    }
  }
  
  
  // Initial Profile Image
  useEffect(()=>{
    const user = JSON.parse(window.localStorage.getItem('user'))
    if(user && user.image){
      setProfile(user.image)
    }
    else{
      window.localStorage.setItem('user', JSON.stringify({ image: '/assets/profile.png' }))
      const user = JSON.parse(window.localStorage.getItem('user'))
        setProfile(user.image)
    }
  }, [])





  return (
    <div className="lg:flex grid gap-6 relative">
      {/* Left */}
      <div className={`lg:basis-[50%] space-y-[50px] overflow-hidden ${editFormState ? 'lg:grid hidden' : ''} rounded-2xl bg-white lg:p-5 p-1 z-20`}>          
        {/* User Profile */}

        <div className="flex flex-col space-y-5 p-2 relative ">

        <button  className='absolute bg-[#ebe9e9f8] rounded-2xl py-2 px-3 lg:-right-2 right-3 flex items-center justify-center gap-3 font-san text-[#bbbbbbaf]' onClick={ () => handleInputText(lastNameRef)}>
        <img src="/assets/mockups/edit.svg" alt="" width={'13px'} className='cursor-pointer text-[#bbbbbbaf]' />
         Edit Details 
         </button>

          {/* Image and name */}
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="grid h-[100px] w-[100px] justify-center overflow-hidden rounded-full ">
              <img
                src={profile}
                alt=""
                className="w-full object-cover bg-red-500"
              />
            </div>
            <p className="text-center font-san text-[18px] font-medium">
              {lastName} {firstName}
            </p>
          </div>
          {/* Image and name */}

          {/* Cards */}
          <div className="flex space-x-5 justify-center">
            <div className="lg:basis-[45%] space-y-2 rounded-2xl border p-2 font-san">
              <p className="text-[14px] font-[500] text-[#989494]">
                Course Completed
              </p>
              <h2 className="text-[20px] font-bold">15</h2>
            </div>
            <div className="lg:basis-[45%] space-y-2 rounded-2xl border p-2 font-san">
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

          <div className="grid lg:grid-cols-4 grid-cols-3 gap-x-4 gap-y-7 items-center ">  
          {achievements.map(achievement => (
              <div key={uuidv4()} className="flex flex-col items-center justify-center text-center space-y-2 p-0">
                
                  <img
                    src={achievement.image}
                    alt=""
                    className="w-[60px]"
                  />
                  <p className="lg:text-[14px] text-[14px] font-semibold font-montserrat">{achievement.title}</p>
                
                <p className="lg:text-[7px] text-[4px] font-medium font-montserrat">{achievement.description}</p>
              </div>
            )
          )}

          </div>
        </div>
        {/* Achievememts */}
      </div>
      {/* Left */}



      {/* ## Right */}

      {editFormState === false ? 
      (<div className=' basis-[60%] lg:grid place-content-center font-san text-center space-y-3'>
        <p className='text-[20px] text-[#37495780] font-[500]'>No Information Available</p>
        <p className='text-[15px] text-[#37495780]'>Click Edit Details</p>
      </div>) 
      : 
      <div className={`absolute top-0 left-0 lg:relative lg:basis-[60%] grid lg:space-y-24 space-y-4 rounded-2xl  bg-white w-[100%] p-5 lg:z-0 z-50`}>
        <p className="font-san text-[25px] font-medium p-3 lg:flex hidden ">My Details</p>
        <p className="font-san text-[18px] font-medium lg:hidden flex cursor-pointer items-center p-2 space-x-2" onClick={handlebackState}> <img src="/assets/mockups/angle-left.png" alt="" />  Back</p>

        <div className="relative flex items-center justify-center">
          <div className="lg:absolute grid h-[200px] w-[200px] justify-center overflow-hidden rounded-full ">
            <img
              src={profile}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* Change Image */}
          <input type="file" name="changeUserImage" accept="image/*" id="file-input" className='hidden' ref={userprofile} onChange={handleImageChange} />
          <label htmlFor="file-input" className=' relative bottom-[-70px] lg:right-[-60px] right-[60px]'>
          <div className="z-30 flex h-[50px] w-[50px] place-content-center items-center overflow-hidden rounded-full bg-[#F7F7F7] cursor-pointer ">
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

        <form className="lg:space-y-[60px] space-y-7 left-0 lg:p-6 pb-[90px] p-2 w-full">
          {/* FirstName */}
          <div className="grid space-y-3">
            <label
              htmlFor="firstName"
              className="font-san text-[17px] lg:font-medium tracking-wide text-[#000] lg:basis-0 basis-[40%] lg:p-0 pb-3"
            >
              First Name
            </label>
            <div className="basis-full flex justify-between gap-4">
            <input
              id="lastName"
              placeholder={lastName}
              type="text"
              ref={lastNameRef}
              onChange={() => handleInputTextChange(lastNameRef)}
              // readOnly = {inputFocusState}
              className="w-full font-san lg:text-[20px] text-[17px] lg:font-medium placeholder:text-[#000] placeholder:text-[#aaaa] font-semibold lg:text-[#AAAAAA] outline-none] p-2 rounded-xl flex items-center"
            />
            </div>
          </div>
          {/* FirstName */}
          {/* LastName */}
          <div className="grid space-y-3">
            <label
              htmlFor="firstName"
              className="font-san text-[17px] lg:font-medium tracking-wide text-[#000] lg:basis-0 basis-[40%] lg:p-0 pb-3"
            >
              Last Name
            </label>
            
            <div className="basis-full flex justify-between gap-4">
            <input
              id="lastName"
              placeholder={firstName}
              type="text"
              ref={firstNameRef}
              onChange={() => handleInputTextChange(firstNameRef)}
              // readOnly = {inputFocusState}
              className="w-full font-san lg:text-[20px] text-[17px] lg:font-medium placeholder:text-[#000] placeholder:text-[#aaaa] font-semibold lg:text-[#AAAAAA] outline-none] p-2 rounded-xl flex items-center"
            />
          
            </div>

          </div>
          {/* LastName */}
          {/* Email */}
          <div className="grid space-y-3">
            <label
              htmlFor="email"
              className="font-san text-[17px] lg:font-medium tracking-wide text-[#000] lg:basis-0 basis-[40%] lg:p-0 pb-3"
            >
              Email
            </label>
          <div className="basis-full flex justify-between gap-4">
            <input
              id="email"
              placeholder={email}
              type="email"
              ref={emailRef}
              onChange={() => handleInputTextChange(emailRef)}
              // readOnly = {inputFocusState}
              className="w-full font-san lg:text-[20px] text-[17px] lg:font-medium placeholder:text-[#000] placeholder:text-[#aaaa] font-semibold lg:text-[#AAAAAA] outline-none] p-2 rounded-xl flex items-center"
            />
            
            </div>

          </div>
          {/* Email */}

          <button
          // disabled = {buttonState}
           className={`rounded-lg border-none ${buttonState ? 'bg-normal_yellow' : 'bg-[#FDE6BF] disabled:cursor-not-allowed' } px-[35px] py-[18px] text-[20px] font-medium text-white outline-none`}>
            Save Changes
          </button>
        </form>
      </div>
      }
      {/* Right */}
    </div>
  )
}
