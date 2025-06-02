import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@radix-ui/react-popover'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

const data = [
  {
    id: 1,
    name: 'Effiong Divine',
    email: 'effiongdivine45@gmail.com',
    xp: 45,
    courses: 9,
  },
  { id: 2, name: ' Divine', email: 'divine45@gmail.com', xp: 3745, courses: 9 },
  { id: 3, name: 'new user', email: 'effiongd@gmail.com', xp: 305, courses: 9 },
  {
    id: 4,
    name: 'Effiong Divine',
    email: 'effiongdivine45@gmail.com',
    xp: 245,
    courses: 9,
  },
  {
    id: 5,
    name: 'Effiong Divine',
    email: 'effiongdivine45@gmail.com',
    xp: 345,
    courses: 9,
  },
  {
    id: 6,
    name: 'Effiong Divine',
    email: 'effiongdivine45@gmail.com',
    xp: 3145,
    courses: 9,
  },
  {
    id: 7,
    name: 'Effiong Divine',
    email: 'effiongdivine45@gmail.com',
    xp: 12,
    courses: 9,
  },
  { id: 8, name: 'jame user', email: 'jame@gmail.com', xp: 100, courses: 9 },
  {
    id: 9,
    name: 'Effiong Divine',
    email: 'effiongdivine45@gmail.com',
    xp: 345,
    courses: 9,
  },
  { id: 10, name: 'lucy ', email: 'lucy45@gmail.com', xp: 345, courses: 9 },
]

const USERS_PER_PAGE = 5

const ManageUsers = () => {
  const [page, setPage] = useState(1)
  const [selectedUsers, setSelectedUsers] = useState([])

  const totalPages = Math.ceil(data.length / USERS_PER_PAGE)
  const startIndex = (page - 1) * USERS_PER_PAGE
  const paginatedData = data.slice(startIndex, startIndex + USERS_PER_PAGE)

  const handleNext = () => {
    if (page < totalPages) setPage(prev => prev + 1)
  }

  const handlePrevious = () => {
    if (page > 1) setPage(prev => prev - 1)
  }

  const toggleUserSelection = id => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(userId => userId !== id) : [...prev, id],
    )
  }

  const isUserSelected = id => selectedUsers.includes(id)

  return (
    <div className="">
      <div className="mt-[100px] flex h-full w-full flex-col rounded-lg bg-white px-3 py-7">
        <form className="flex w-[400px] items-center gap-1 rounded-lg border-[4px] border-[#F7F7F7] px-1 py-2">
          <img src="/assets/search.svg" alt="icon" className="w-5" />
          <input
            placeholder="Search for users by name or email"
            className="font-Nunito w-full text-base font-medium text-[#848484] outline-0"
          />
        </form>
        <div className="mt-4 h-full w-full rounded-lg border-[4px] border-[#F7F7F7]">
          <Table className="font-sans !text-lg font-normal text-[#303031]">
            <TableHeader>
              <TableRow>
                <TableHead className="px-2">
                  {/* You can implement 'select all' if desired here */}
                  <input type="checkbox" className="scale-150 cursor-pointer" />
                </TableHead>
                <TableHead className="px-5">Name</TableHead>
                <TableHead className="px-0">Email address</TableHead>
                <TableHead className="px-10">XP</TableHead>
                <TableHead className="px-0">Courses</TableHead>
                <TableHead className="px-0">
                  <img src="/assets/dot.svg" alt="icon" className="w-7" />
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedData.map(item => (
                <TableRow key={item.id}>
                  <TableCell className="px-2 py-5">
                    <input
                      type="checkbox"
                      className="scale-150 cursor-pointer"
                      checked={isUserSelected(item.id)}
                      onChange={() => toggleUserSelection(item.id)}
                    />
                  </TableCell>
                  <TableCell className="px-5 py-7">
                    <div className="flex items-center gap-2">
                      <img
                        src="/assets/avatar.svg"
                        alt="icon"
                        className="w-7"
                      />
                      {item.name}
                    </div>
                  </TableCell>
                  <TableCell className="py-5">{item.email}</TableCell>
                  <TableCell className="px-10 py-5">{item.xp}</TableCell>
                  <TableCell className="py-5">{item.courses}</TableCell>
                  <TableCell className="py-5">
                    
                    <Popover>
                      <PopoverTrigger>
                        <img
                          src="/assets/dot.svg"
                          alt="icon"
                          className="w-7 cursor-pointer"
                        />
                      </PopoverTrigger>
                      <PopoverContent className="bg-white drop-shadow-md rounded-lg mr-10 ">
                        <span className="flex flex-col gap-3 font-normal text-base items-start ">
                          <button className='text-[#303031] hover:bg-[#FAFAFA]  w-full py-2 px-5 text-left'>
                         
                         View more
                          </button>
                          <button className=' hover:bg-[#FAFAFA] text-[#FF0000]  w-full py-2 px-5 text-left'>Remove Selected</button>
                        </span>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination Controls */}
        <div className="mt-4 flex w-full items-center justify-between">
          <span className="text-sm font-medium">
            Page {page} of {totalPages}
          </span>

          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={page === 1}
              className="rounded bg-gray-200 px-4 py-2 text-sm font-medium disabled:opacity-50"
            >
              Back
            </button>
            {page}
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="rounded bg-gray-200 px-4 py-2 text-sm font-medium disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/users')(
  {
    component: ManageUsers,
  },
)

export default ManageUsers
