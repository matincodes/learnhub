import { ViewMore } from '@/components/dialog/ViewMore'
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
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { RemoveUser } from '@/components/dialog/RemoveUser'
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

  const totalPages = Math.ceil(data.length / USERS_PER_PAGE)
  const startIndex = (page - 1) * USERS_PER_PAGE
  const paginatedData = data.slice(startIndex, startIndex + USERS_PER_PAGE)

  const handleNext = () => {
    if (page < totalPages) setPage(prev => prev + 1)
  }

  const handlePrevious = () => {
    if (page > 1) setPage(prev => prev - 1)
  }

  return (
    <div className=" px-16 ">
      <div className='fixed top-0 w-full bg-gray-100 py-3'>
        <h1 className='font-san text-[32px] font-semibold'>User management</h1>
      </div>
      <div className="mt-[100px] flex h-full w-full flex-col rounded-lg bg-white px-10 py-7">
        <form className="flex w-[400px] items-center gap-3 rounded-lg border-[2px] border-[#F7F7F7] px-4 py-2">
          <img
            src="/assets/search.svg"
            alt="icon"
            className="size-[20px] cursor-pointer"
          />
          <input
            placeholder="Search for users by name or email"
            className="font-Nunito w-full text-base font-medium text-[#848484] outline-0"
          />
        </form>
        <div className="mt-10 h-full w-full rounded-lg border-[2px] border-[#F7F7F7]">
          <Table className="font-sans !text-xl font-normal text-[#303031]">
            <TableHeader className="h-[70px] border-b-[2px] border-[#F7F7F7]">
              <TableRow>
                <TableHead className="px-5">
                  <Checkbox.Root
                    className="flex size-[25px] cursor-pointer items-center justify-center rounded-[5px] border-[2px] border-[#F7F7F7] bg-white data-[state=checked]:bg-[#F7AE30]"
                    id="c1"
                  >
                    <Checkbox.Indicator className="text-white">
                      <CheckIcon className="size-6 text-[#F7F7F7]" />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                </TableHead>
                <TableHead className="px-0 font-normal">Name</TableHead>
                <TableHead className="px-0 font-normal">
                  Email address
                </TableHead>
                <TableHead className="px-10 font-normal">XP</TableHead>
                <TableHead className="px-7 text-center font-normal">
                  Courses
                </TableHead>
                <TableHead className="px-0">
                  <Popover>
                    <PopoverTrigger>
                      <img
                        src="/assets/dot.svg"
                        alt="icon"
                        className="w-7 cursor-pointer"
                      />
                    </PopoverTrigger>
                    <PopoverContent
                      style={{
                        transform: 'translateX(240px) translateY(90px)',
                      }}
                      className="z-50 w-48 rounded-md bg-white shadow-lg"
                    >
                      <RemoveUser />
                    </PopoverContent>
                  </Popover>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {paginatedData.map(item => (
                <TableRow
                  key={item.id}
                  className="border-b-[2px] border-[#F7F7F7]"
                >
                  <TableCell className="px-5">
                    <Checkbox.Root
                      className="flex size-[25px] cursor-pointer items-center justify-center rounded-[5px] border-[2px] border-[#F7F7F7] bg-white data-[state=checked]:bg-[#F7AE30]"
                      id="c1"
                    >
                      <Checkbox.Indicator className="">
                        <CheckIcon className="size-6 text-[#F7F7F7]" />
                      </Checkbox.Indicator>
                    </Checkbox.Root>
                  </TableCell>
                  <TableCell className="px-0 py-6">
                    <div className="flex items-center gap-3">
                      <img
                        src="/assets/avatar.svg"
                        alt="icon"
                        className="size-[40px]"
                      />
                      {item.name}
                    </div>
                  </TableCell>
                  <TableCell className="">{item.email}</TableCell>
                  <TableCell className="px-10">{item.xp}</TableCell>
                  <TableCell className="text-center">{item.courses}</TableCell>
                  <TableCell className="">
                    <Popover>
                      <PopoverTrigger>
                        <img
                          src="/assets/dot.svg"
                          alt="icon"
                          className="w-7 cursor-pointer"
                        />
                      </PopoverTrigger>
                      <PopoverContent
                        style={{
                          transform: 'translateX(240px) translateY(90px)',
                        }}
                        className="z-50 rounded-md bg-white shadow-lg"
                      >
                        <div className="flex flex-col">
                          <ViewMore />
                          <RemoveUser />
                        </div>
                      </PopoverContent>
                    </Popover>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination Controls */}
          <div className="mt-4 flex w-full items-center justify-between border-t-[2px] border-[#F7F7F7] px-5 py-4 text-xl font-normal text-[#303031]">
            <span className="ml-14">
              Showing {page} of {totalPages}
            </span>

            <div className="flex gap-2">
              <button
                onClick={handlePrevious}
                disabled={page === 1}
                className="rounded px-4 py-2 disabled:opacity-50"
              >
                Back
              </button>
              <div className="flex w-[40px] items-center justify-center bg-[#F7F7F7] py-2">
                {' '}
                {page}
              </div>
              <button
                onClick={handleNext}
                disabled={page === totalPages}
                className="rounded px-4 py-2 disabled:opacity-50"
              >
                Next
              </button>
            </div>
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
