import React from 'react'
import { Button } from '../ui/button'

function NoCourse({ handleNavigate }) {
    return (
        <div className='w-full h-screen overflow-hidden  flex flex-col justify-center items-center text-center gap-5'>
            <div>
                <h1 className='text-2xl font-medium'>No Course Available</h1>
                <p className='text-sm text-[#808080]'>Start by creating a new course!</p>
            </div>
            <Button className="bg-[#F7AE30] w-fit py-1 px-2 text-white" onClick={handleNavigate}>Create new Course</Button>
        </div>
    )
}

export default NoCourse