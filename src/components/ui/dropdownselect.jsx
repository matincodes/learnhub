'use client'

import { useState, useRef, useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu'

const DropdownSelect = ({
  options = [],
  defaultLabel = 'Select an option',
  onSelect = () => {},
  className = '', // allows custom sizing like w-full or w-[200px]
  labelColor = 'text-black',
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState(defaultLabel)
  const triggerRef = useRef(null)
  const [contentWidth, setContentWidth] = useState('')

  const handleSelect = item => {
    setSelected(item.name)
    onSelect(item)
  }

  useEffect(() => {
    if (triggerRef.current) {
      const width = triggerRef.current.offsetWidth
      setContentWidth(`${width}px`)
    }
  }, [isOpen])

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <button
          ref={triggerRef}
          className={`flex h-fit flex-row items-center justify-between rounded-[8px] border border-[#3333331A] bg-white px-4 py-2 outline-none ${className}`}
        >
          <span className={`font-san text-sm font-medium ${labelColor}`}>
            {selected}
          </span>
          {isOpen ? (
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
              <path
                d="M14.25 11.875C14.25 11.875 10.7517 7.12501 9.49996 7.125C8.24826 7.12499 4.75 11.875 4.75 11.875"
                stroke="#374957"
                strokeWidth="1.55"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
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

      <DropdownMenuContent
        style={{ width: contentWidth }}
        className="flex flex-col gap-3 bg-white px-3 py-2"
      >
        {options.map(item => (
          <DropdownMenuItem
            key={item.key}
            onSelect={() => handleSelect(item)}
            className={`w-full cursor-pointer rounded-lg outline-none hover:bg-[#f0eded] ${
              selected === item.name ? 'bg-[#f0eded]' : ''
            }`}
          >
            <span className="font-san text-sm font-medium text-[#303031]">
              {item.name}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownSelect
