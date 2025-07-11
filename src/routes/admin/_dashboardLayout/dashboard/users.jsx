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
import { useState, useEffect } from 'react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'
import { RemoveUser } from '@/components/dialog/RemoveUser'
import { useAdmin } from '@/context/admin-context'
import Spinner from '@/components/spinner/Spinner'

const USERS_PER_PAGE = 5

const ManageUsers = () => {
  const { students, loadStudents, isLoadingStudents } = useAdmin()
  const [page, setPage] = useState(1)
  useEffect(() => {
    if (!students || students.length === 0) {
      loadStudents()
    }
  }, [loadStudents, students])

  const totalPages = Math.ceil((students?.length || 0) / USERS_PER_PAGE)
  const startIndex = (page - 1) * USERS_PER_PAGE
  const paginatedData = (students || []).slice(
    startIndex,
    startIndex + USERS_PER_PAGE,
  )

  const handleNext = () => {
    if (page < totalPages) setPage(prev => prev + 1)
  }

  const handlePrevious = () => {
    if (page > 1) setPage(prev => prev - 1)
  }
  if (isLoadingStudents) {
    return (
      <div className="flex h-[calc(100vh-120px)] items-center justify-center">
        <Spinner />
      </div>
    )
  }
  return (
    <>
      <div className="flex w-full items-center justify-between bg-gray-100 px-20 py-3 lg:fixed lg:right-0 lg:z-50 lg:w-[calc(100%-280px)]">
        <h1 className="font-san text-[32px] font-semibold">User management</h1>
      </div>
      <div className="px-16">
        <div className="mt-[120px] flex h-full w-full flex-col rounded-lg bg-white px-5 py-7">
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
                        <p>
                          {' '}
                          {item?.first_name} {item?.last_name}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell className="">{item.email}</TableCell>
                    <TableCell className="px-10">{item.xp}</TableCell>
                    <TableCell className="text-center">
                      {item.courses}
                    </TableCell>
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
                            <RemoveUser e={item} />
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
    </>
  )
}

export const Route = createFileRoute('/admin/_dashboardLayout/dashboard/users')(
  {
    component: ManageUsers,
  },
)

export default ManageUsers
