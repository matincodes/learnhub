'use client'
import { useState } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../../ui/dropdown-menu'
import { Input } from '@/components/ui/input'

const DROPDOWNCONTENT = [
  { key: 1, name: 'Front-end Development' },
  { key: 2, name: 'Back-end Development' },
  { key: 3, name: 'Programming/Coding' },
  { key: 4, name: 'Foundational Skills' },
  { key: 5, name: 'Digital Skills' },
]

const DropdownCourses = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('All category')

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button className="flex h-fit w-[220px] flex-row items-center justify-between rounded-[8px] border border-[#3333331A] bg-white px-4 py-2 outline-none">
          <span className="font-san text-sm font-medium">{selected}</span>
          {isOpen ? (
            // ⬆️ Up Arrow (open)
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.25 11.875C14.25 11.875 10.7517 7.12501 9.49996 7.125C8.24826 7.12499 4.75 11.875 4.75 11.875"
                stroke="#374957"
                strokeWidth="1.55"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            // ⬇️ Down Arrow (closed)
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.75004 7.125C4.75004 7.125 8.24834 11.875 9.50004 11.875C10.7517 11.875 14.25 7.125 14.25 7.125"
                stroke="#374957"
                strokeWidth="1.55"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="flex w-[220px] flex-col gap-3 bg-white px-3 py-2">
        {DROPDOWNCONTENT.map(course => (
          <DropdownMenuItem
            key={course.key}
            onSelect={() => setSelected(course.name)}
            className={`w-full cursor-pointer rounded-lg outline-none hover:bg-[#f0eded] ${
              selected === course.name ? 'bg-[#f0eded]' : ''
            }`}
          >
            <span className="font-san text-sm font-medium text-[#303031]">
              {course.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const SearchInput = () => {
  return (
    <div className="relative">
      <img
        src="/assets/search.svg"
        alt="search icon"
        className="absolute left-2 top-2.5 h-[21px] w-[21px]"
      />
      <Input
        type="text"
        placeholder="Search for courses "
        className="w-auto indent-5"
      />
    </div>
  )
}

function Filter() {
  return (
    <div className="flex w-full flex-row items-center justify-between gap-4">
      <DropdownCourses />
      <SearchInput />
    </div>
  )
}

export default Filter
