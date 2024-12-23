import { Input } from '@/components/ui/input'
import { createFileRoute } from '@tanstack/react-router'
import { Mentors } from '@/data/mentors'
import { useState } from 'react'
import { HiXMark } from 'react-icons/hi2'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PopupButton } from 'react-calendly'

export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/mentor',
)({
  component: Mentor,
})

function Mentor() {
  const [selectedMentor, setSelectedMentor] = useState(null)
  const [mentorTab, setMentorTab] = useState('book')

  const handleMentorClick = mentor => {
    setSelectedMentor(mentor)
  }

  const closeSearchButton = () => {
    setSelectedMentor(null)
  }


  const getValue = (e) =>{
    console.log(e)
    switch(e){
      case 'book':
        setMentorTab('book')
        break;
      case 'about':
        setMentorTab('about')
        break
      default:
        break;
    }
  }

  console.log(selectedMentor)

  return (
    <div className="flex flex-col space-y-[40px]">
      {/* Mentors */}
      <div
        className={`grid  ${selectedMentor == null ? 'grid-cols-1' : 'lg:grid-cols-2 overflow-hidden relative'} gap-4 relative`}
      >
        {/* Left */}
        <div className={`${selectedMentor == null ? '' : 'lg:grid hidden overflow-y-auto lg:h-[490px] no-scrollbar'} space-y-6 p-4 bg-white rounded-3xl relative`}>
          {/* Search part */}
            <div>
            <Input
              type="text"
              id="search"
              placeholder="Search for mentor"
              className={`w-full outline-none placeholder:text-[14px] placeholder:font-medium placeholder:text-[#848484] ${selectedMentor == null ? 'lg:w-[40%]' : 'lg:w-[80%]'}`}
            />
          </div>
          {/* Search part */}

          <div
            className={`grid gap-4  ${selectedMentor == null ? 'lg:grid-cols-4' : 'lg:grid-cols-2 lg:relative absolute '} `}
          >
            {Mentors.map(mentor => (
              <>
                <div
                  onClick={() => handleMentorClick(mentor)}
                  className="flex cursor-pointer flex-col justify-center rounded-[10px] border p-1 space-y-3"
                  key={mentor.name}
                >
                  <div className="relative overflow-hidden rounded-[5px] lg:grid  lg:h-[200px] ">
                    <img
                      src={mentor.image}
                      alt=""
                      className="object-cover w-full h-full"
                    />
                    {mentor.active ? (
                      <p className="absolute bottom-0 m-2 flex items-center gap-2 rounded-lg border bg-[#00000087] p-1 px-3 text-[#37e937]">
                        {' '}
                        <span className="lg:h-[15px] lg:w-[15px] w-[10px] h-[10px] rounded-full bg-green-500"></span>{' '}
                        Available today
                      </p>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="w-full">
                    <p className="text-[18px] font-semibold lg:text-[16px]">
                      {mentor.name}
                    </p>
                    <p className="flex items-center gap-2 text-[18px] lg:text-[16px]">
                      <img
                        src={`/assets/work.png`}
                        alt=""
                        className="w-[20px] lg:w-4"
                      />{' '}
                      {mentor.title}
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        {/* Left */}

        {/* Right */}
        <div className="lg:relative w-full   overflow-hidden">
          {selectedMentor == null ? (
            ''
          ) : (
            <div className='bg-white p-2 rounded-3xl lg:h-fit w-full'>
            <div className="relative flex w-full flex-col items-center  p-4 text-center ">
              <HiXMark
                size={20}
                strokeWidth={2}
                color="#374957"
                className="absolute right-5 h-6 w-6 cursor-pointer rounded-full  bg-[#F7F7F7] p-1 font-bold"
                onClick={closeSearchButton}
              />
              <div className="relative mb-2 overflow-hidden rounded-[5px] lg:grid lg:h-[210px] lg:place-content-center">
                <img
                  src={selectedMentor.image}
                  alt=""
                  className="h-full w-full rounded-md object-cover"
                />
                {selectedMentor.active ? (
                  <p className="absolute bottom-0 m-2 flex items-center gap-2 rounded-lg border bg-[#00000087] p-1 px-3 text-[#37e937]">
                    <span className="lg:h-[15px] lg:w-[15px] w-[10px] h-[10px] rounded-full bg-green-500"></span>
                    Available today
                  </p>
                ) : (
                  ''
                )}
              </div>

              <p className=" p-0 font-extrabold lg:text-[23px]">
                {selectedMentor.name}
              </p>
              <p className="flex items-center  lg:text-[16px]">
                {selectedMentor.title}
              </p>
            </div>

            <div className="">
            <Tabs onValueChange={getValue} value={mentorTab} className="w-full p-0 space-y-5">
                <TabsList className='border-b rounded-none  w-full gap-9 p-0'>
                  <TabsTrigger value="book" mentor>Book Mentor</TabsTrigger>
                  <TabsTrigger value="about" mentor>About Mentor</TabsTrigger>
                </TabsList>

                <TabsContent value="book" className="font-san">
                  <div className="">
                    <p className='text-[#000] font-semibold '>Availability</p>
                    <p className='text-[#848484] text-[13px]'>Check out the tutor's availability below and choose a slot to book.</p>

                    <br />

                    <PopupButton 
                    url={`${selectedMentor.meetingLink}`}
                    text="Book Mentor"
                    rootElement={document.getElementById("root")}
                     className=" w-full bg-[#F7AE30] text-white rounded-[8px] p-[10px] text-[16px]" 
                     />

                  </div>
                </TabsContent>
                <TabsContent value="about">
                  Change your password here.
                </TabsContent>
              </Tabs>
            </div>

            </div>
          )}
        </div>
        {/* Right */}
      </div>

      {/* Mentors */}
    </div>
  )
}
