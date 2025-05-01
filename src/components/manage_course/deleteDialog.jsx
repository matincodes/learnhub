import React from 'react'
import { Button } from '../ui/button'

function DeleteDialog({ handleCloseDeleteModal }) {
    return (
        <div className='w-full h-full fixed top-0 left-0 z-[90] flex justify-center items-center'>
            {/* Semi-transparent background */}
            <div className="absolute inset-0 bg-black/20 z-[-1]"></div>

            {/* Modal content */}
            <div className="flex flex-col w-[380px] justify-between rounded-xl md:rounded-none md:w-[500px] h-[300px] md:h-auto bg-white p-4 shadow-lg z-10 relative">
                <div className="flex gap-1 items-center cursor-pointer md:hidden">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.4407 1.12844C13.4404 1.42671 13.3217 1.71266 13.1107 1.92344L7.35671 7.67744C7.18255 7.85156 7.04439 8.05828 6.95013 8.2858C6.85587 8.51331 6.80736 8.75717 6.80736 9.00344C6.80736 9.24971 6.85587 9.49357 6.95013 9.72109C7.04439 9.9486 7.18255 10.1553 7.35671 10.3294L13.1032 16.0759C13.3081 16.2881 13.4215 16.5723 13.419 16.8673C13.4164 17.1622 13.2981 17.4444 13.0895 17.653C12.8809 17.8616 12.5988 17.9799 12.3038 17.9824C12.0088 17.985 11.7246 17.8716 11.5125 17.6667L5.76596 11.9247C4.99328 11.1505 4.55933 10.1014 4.55933 9.00757C4.55933 7.91376 4.99328 6.86464 5.76596 6.09044L11.52 0.33269C11.6773 0.175253 11.8778 0.0680253 12.0961 0.0245747C12.3144 -0.0188759 12.5407 0.00340368 12.7463 0.0885943C12.9519 0.173785 13.1277 0.318058 13.2513 0.503157C13.3749 0.688256 13.4408 0.905862 13.4407 1.12844Z" fill="#374957" />
                    </svg>
                    <span>Back</span>
                </div>
                <h1 className="text-lg font-semibold mb-2">Delete Course?</h1>
                <p className="text-sm text-black font-medium py-5">
                    Are you sure you want to delete this? Once deleted, this action cannot be undone, and all associated data will be permanently lost.
                </p>
                <div className="flex items-center justify-around md:gap-4 w-full  md:justify-end">
                    <Button className="w-28 md:w-20 py-2 border border-[#F7AE30] text-[#F7AE30]" onClick={() => handleCloseDeleteModal(false)}>Cancel</Button>
                    <Button className="w-28 md:w-40 py-2 bg-[#E94343] text-white hidden md:block">Delete Course</Button>
                    <Button className="w-28 md:w-40 py-2 bg-[#E94343] text-white block md:hidden">Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default DeleteDialog
