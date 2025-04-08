import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '../../ui/table'
import randomImage from "../../../../public/assets/programming image.png"
import Image1 from "../../../../public/assets/Ellipse 4022.png"
import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';

//Generating random date for the table data flow
const generateRandomDate = () => {
    // Random date between 2020-01-01 and the current date
    return new Date(new Date() - Math.random() * (new Date() - new Date(2020, 0, 1))).toDateString();
};



function Option({ onClick, className, }) {
    const navigate = useNavigate()
    const handleNavigate = (id) => {
        navigate({ to: '/admin/dashboard/course-details' })
    }
    const handleDelete = () => {
        console.log("Delete confirmed!")
        // your delete logic here
    }
    return (
        <div className={className}>
            <div className="flex flex-row gap-2 items-center w-32 bg-[#f8f6f6] rounded-lg px-1 py-2 cursor-pointer" onClick={() => handleNavigate()}
            >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_9238_60844)">
                        <path d="M13.4389 5.18191C12.0223 2.9963 9.60384 1.66701 6.9994 1.64258C4.39498 1.66701 1.97647 2.9963 0.559892 5.18191C-0.186631 6.27748 -0.186631 7.7183 0.559892 8.8139C1.97567 11.0009 4.39432 12.3315 6.99942 12.3568C9.60384 12.3323 12.0223 11.003 13.439 8.81742C14.187 7.72102 14.187 6.27828 13.4389 5.18191ZM11.9894 7.82058C10.9079 9.53602 9.02727 10.5826 6.9994 10.5976C4.97155 10.5826 3.09092 9.53602 2.00937 7.82058C1.6722 7.32522 1.6722 6.67408 2.00937 6.17875C3.0909 4.46331 4.97152 3.41673 6.9994 3.40169C9.02724 3.4167 10.9079 4.46331 11.9894 6.17875C12.3266 6.67408 12.3266 7.32522 11.9894 7.82058Z" fill="#374957" />
                        <path d="M6.99928 9.34524C8.29465 9.34524 9.34476 8.29514 9.34476 6.99977C9.34476 5.7044 8.29465 4.6543 6.99928 4.6543C5.70391 4.6543 4.65381 5.7044 4.65381 6.99977C4.65381 8.29514 5.70391 9.34524 6.99928 9.34524Z" fill="#374957" />
                    </g>
                    <defs>
                        <clipPath id="clip0_9238_60844">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span className='text-xs font-medium'>View Details</span>
            </div>
            <div className="flex flex-row gap-2 items-center w-32 rounded-lg px-1 py-2 cursor-pointer">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_9238_60838)">
                        <path d="M13.4166 2.625C13.4166 2.14175 13.0248 1.75 12.5416 1.75H10.3389C9.97033 0.704293 8.98369 0.00355469 7.87493 0H6.12493C5.01617 0.00355469 4.02952 0.704293 3.66093 1.75H1.45825C0.975006 1.75 0.583252 2.14175 0.583252 2.625C0.583252 3.10825 0.975006 3.5 1.45825 3.5H1.74993V10.7917C1.74993 12.5636 3.18635 14 4.95825 14H9.04158C10.8135 14 12.2499 12.5636 12.2499 10.7917V3.5H12.5416C13.0248 3.5 13.4166 3.10825 13.4166 2.625ZM10.4999 10.7917C10.4999 11.5971 9.84701 12.25 9.0416 12.25H4.95825C4.15284 12.25 3.49993 11.5971 3.49993 10.7917V3.5H10.4999V10.7917Z" fill="#FF0000" fill-opacity="0.5" />
                        <path d="M5.5415 10.5C6.02475 10.5 6.4165 10.1082 6.4165 9.625V6.125C6.4165 5.64175 6.02475 5.25 5.5415 5.25C5.05826 5.25 4.6665 5.64175 4.6665 6.125V9.625C4.6665 10.1082 5.05826 10.5 5.5415 10.5Z" fill="#FF0000" fill-opacity="0.5" />
                        <path d="M8.45825 10.5C8.9415 10.5 9.33325 10.1082 9.33325 9.625V6.125C9.33325 5.64175 8.9415 5.25 8.45825 5.25C7.97501 5.25 7.58325 5.64175 7.58325 6.125V9.625C7.58325 10.1082 7.97501 10.5 8.45825 10.5Z" fill="#FF0000" fill-opacity="0.5" />
                    </g>
                    <defs>
                        <clipPath id="clip0_9238_60838">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <span className='text-xs font-medium text-[#FF0000]'>Delete</span>
            </div>
        </div>
    )
}

export default Option


//PAGINATION COMPONENT
export const Pagination = () => {
    return (
        <div className="w-[170px] h-[40px] rounded-2xl flex flex-row justify-between items-center bg-[#faf8f8] py-1 px-1">
            <div className="bg-white h-8 w-12 flex justify-center items-center rounded-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 10.5001H10.207L12.646 8.06113C12.9274 7.77986 13.0855 7.39834 13.0856 7.00048C13.0857 6.60262 12.9277 6.22102 12.6465 5.93963C12.3652 5.65823 11.9837 5.50009 11.5858 5.5C11.188 5.49991 10.8064 5.65786 10.525 5.93913L6.93896 9.52513C6.28373 10.1822 5.91577 11.0722 5.91577 12.0001C5.91577 12.928 6.28373 13.8181 6.93896 14.4751L10.525 18.0611C10.8064 18.3424 11.188 18.5003 11.5858 18.5003C11.9837 18.5002 12.3652 18.342 12.6465 18.0606C12.9277 17.7792 13.0857 17.3976 13.0856 16.9998C13.0855 16.6019 12.9274 16.2204 12.646 15.9391L10.207 13.5001H19C19.3978 13.5001 19.7793 13.3421 20.0606 13.0608C20.3419 12.7795 20.5 12.398 20.5 12.0001C20.5 11.6023 20.3419 11.2208 20.0606 10.9395C19.7793 10.6582 19.3978 10.5001 19 10.5001Z" fill="#303031" />
                </svg>
            </div>
            <span className='text-sm text-[#848484] font-medium'>1 of 15</span>
            <div className="bg-white h-8 w-12 flex justify-center items-center rounded-lg cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.061 9.52513L13.475 5.93913C13.1936 5.65786 12.812 5.49991 12.4141 5.5C12.0163 5.50009 11.6348 5.65823 11.3535 5.93963C11.0722 6.22102 10.9143 6.60262 10.9144 7.00048C10.9145 7.39834 11.0726 7.77986 11.354 8.06113L13.793 10.5001H5C4.60218 10.5001 4.22064 10.6582 3.93934 10.9395C3.65804 11.2208 3.5 11.6023 3.5 12.0001C3.5 12.398 3.65804 12.7795 3.93934 13.0608C4.22064 13.3421 4.60218 13.5001 5 13.5001H13.793L11.354 15.9391C11.0726 16.2204 10.9145 16.6019 10.9144 16.9998C10.9143 17.3976 11.0722 17.7792 11.3535 18.0606C11.6348 18.342 12.0163 18.5002 12.4141 18.5003C12.812 18.5003 13.1936 18.3424 13.475 18.0611L17.061 14.4751C17.7162 13.8181 18.0842 12.928 18.0842 12.0001C18.0842 11.0722 17.7162 10.1822 17.061 9.52513Z" fill="#303031" />
                </svg>
            </div>
        </div>
    )
}


//Loading Dynamic data into the table 
const TABLEDATA = [
    {
        id: 1,
        course_title: "Advanced Web Design",
        category: "Programming",
        status: "Published",
        students: 150,
        last_updated: generateRandomDate(),
    },
    {
        id: 2,
        course_title: "Advanced Web Design",
        category: "Data science",
        status: "Archived",
        students: 150,
        last_updated: generateRandomDate(),
    },
    {
        id: 3,
        course_title: "Advanced Web Design",
        category: "Design",
        status: "Archived",
        students: 150,
        last_updated: generateRandomDate(),
    },
    {
        id: 4,
        course_title: "Advanced Web Design",
        category: "Programming",
        status: "Published",
        students: 150,
        last_updated: generateRandomDate(),
    },
    {
        id: 5,
        course_title: "Advanced Web Design",
        category: "programming",
        status: "Archived",
        students: 150,
        last_updated: generateRandomDate(),
    },
];

//TABLET, LAPTOP VIEW FOR DISPLAYING COURSES DATA
export const CourseTable = () => {
    const [showOption, setShowOption] = useState(false);
    const [selectedOptionId, setSelectedOptionId] = useState(null);

    function handleOpenOption(id) {
        if (selectedOptionId === id && showOption) {
            setShowOption(false);
            setSelectedOptionId(null);
        } else {
            setShowOption(true);
            setSelectedOptionId(id);
        }
    }

    return (
        <div className="bg-white w-full h-full relative">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="font-extrabold text-base">Course Title</TableHead>
                        <TableHead className="font-extrabold text-base">Category</TableHead>
                        <TableHead className="font-extrabold text-base">Status</TableHead>
                        <TableHead className="font-extrabold text-base">Students</TableHead>
                        <TableHead className="font-extrabold text-base">Last Updated</TableHead>
                        <TableHead className="font-extrabold text-base">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {TABLEDATA.map((each_table) => (
                        <TableRow key={each_table.id} className="text-left relative text-sm h-20">
                            <TableCell>
                                <div className="flex flex-row items-center gap-2">
                                    <img src={randomImage} alt="random image" width={50} />
                                    <span className='text-xs'>{each_table.course_title}</span>
                                </div>
                            </TableCell>
                            <TableCell className='text-xs font-medium'>{each_table.category}</TableCell>
                            <TableCell className={`${each_table.status == 'Published' ? 'text-[#008000]' : 'text-[#B98324]'} font-semibold`}>{each_table.status}</TableCell>
                            <TableCell className="font-medium">{each_table.students}</TableCell>
                            <TableCell className="font-medium">{each_table.last_updated}</TableCell>
                            <TableCell onClick={() => handleOpenOption(each_table.id)}>
                                <svg width="18" height="5" viewBox="0 0 18 5" fill="none" xmlns="http://www.w3.org/2000/svg" className='text-center cursor-pointer'>
                                    <path d="M16.125 4.37497C17.1605 4.37497 18 3.53551 18 2.49998C18 1.46446 17.1605 0.625 16.125 0.625C15.0895 0.625 14.25 1.46446 14.25 2.49998C14.25 3.53551 15.0895 4.37497 16.125 4.37497Z" fill="#333333" className='text-center' />
                                    <path d="M8.99998 4.37497C10.0355 4.37497 10.875 3.53551 10.875 2.49998C10.875 1.46446 10.0355 0.625 8.99998 0.625C7.96446 0.625 7.125 1.46446 7.125 2.49998C7.125 3.53551 7.96446 4.37497 8.99998 4.37497Z" fill="#333333" />
                                    <path d="M1.87499 4.37497C2.91052 4.37497 3.74998 3.53551 3.74998 2.49998C3.74998 1.46446 2.91052 0.625 1.87499 0.625C0.839461 0.625 0 1.46446 0 2.49998C0 3.53551 0.839461 4.37497 1.87499 4.37497Z" fill="#333333" />
                                </svg>
                            </TableCell>
                            {each_table.id === selectedOptionId && showOption && (
                                <Option className="h-auto shadow-sm border flex flex-col gap-1 py-2 px-2 absolute right-28 top-20 bg-white z-20 rounded-md" />
                            )}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}


// MOBILE VIEW FOR DISPLAYING COURSES DATA
export const CourseCard = () => {
    const [showOption, setShowOption] = useState(false);
    const [selectedOptionId, setSelectedOptionId] = useState(null);

    function handleOpenOption(id) {
        if (selectedOptionId === id && showOption) {
            setShowOption(false);
            setSelectedOptionId(null);
        } else {
            setShowOption(true);
            setSelectedOptionId(id);
        }
    }

    return (
        <div className="flex flex-col w-full h-screen">
            {TABLEDATA.map((each_card) => (
                <div key={each_card.id} className="flex flex-col shadow-lg rounded-xl mb-4 relative">
                    <div
                        className="border-b border-[#E6E6E6] h-10 flex items-center justify-end cursor-pointer"
                        onClick={() => handleOpenOption(each_card.id)}
                    >
                        <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.50023 3.12498C8.36317 3.12498 9.06272 2.42543 9.06272 1.56249C9.06272 0.699551 8.36317 0 7.50023 0C6.63729 0 5.93774 0.699551 5.93774 1.56249C5.93774 2.42543 6.63729 3.12498 7.50023 3.12498Z"
                                fill="#374957"
                            />
                            <path
                                d="M7.50023 9.06247C8.36317 9.06247 9.06272 8.36292 9.06272 7.49999C9.06272 6.63705 8.36317 5.9375 7.50023 5.9375C6.63729 5.9375 5.93774 6.63705 5.93774 7.49999C5.93774 8.36292 6.63729 9.06247 7.50023 9.06247Z"
                                fill="#374957"
                            />
                            <path
                                d="M7.50023 15C8.36317 15 9.06272 14.3004 9.06272 13.4375C9.06272 12.5746 8.36317 11.875 7.50023 11.875C6.63729 11.875 5.93774 12.5746 5.93774 13.4375C5.93774 14.3004 6.63729 15 7.50023 15Z"
                                fill="#374957"
                            />
                        </svg>
                    </div>

                    <div className="flex flex-row justify-between py-4 px-3">
                        <div className="flex gap-3">
                            <img src={Image1} alt="image1" />
                            <span className="flex flex-col font-san">
                                <span>{each_card.course_title}</span>
                                <span>{each_card.category}</span>
                            </span>
                        </div>
                        <div
                            className={`rounded-full ${each_card.status === "Published"
                                ? "bg-[#87E587]"
                                : "bg-[#F3CB83]"
                                } w-[6.5rem] h-[2.1rem] flex gap-2 justify-center items-center`}
                        >
                            {each_card.status === "Published" ? (
                                <span>
                                    <svg
                                        width="3"
                                        height="3"
                                        viewBox="0 0 3 3"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="1.5" cy="1.5" r="1.5" fill="#008000" />
                                    </svg>
                                </span>
                            ) : (
                                <span>
                                    <svg
                                        width="3"
                                        height="3"
                                        viewBox="0 0 3 3"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="1.50024" cy="1.5" r="1.5" fill="#B98324" />
                                    </svg>
                                </span>
                            )}
                            <span>{each_card.status}</span>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between items-center py-4 px-3">
                        <div className="flex flex-col">
                            <span>Student</span>
                            <span>Last Updated</span>
                        </div>
                        <div className="flex flex-col text-right">
                            <span>{each_card.students}</span>
                            <span>{each_card.last_updated}</span>
                        </div>
                    </div>

                    {each_card.id === selectedOptionId && showOption && (
                        <div className="absolute top-8 right-2 z-20">
                            <Option className="h-auto shadow-sm border flex flex-col gap-1 py-2 px-2 bg-white rounded-md" />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
