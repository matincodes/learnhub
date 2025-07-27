'use client'
import { Input } from '@/components/ui/input'
import DropdownSelect from '@/components/ui/dropdownselect'

const DROPDOWNCONTENT = [
  { key: 1, name: 'Front-end Development' },
  { key: 2, name: 'Back-end Development' },
  { key: 3, name: 'Programming/Coding' },
  { key: 4, name: 'Foundational Skills' },
  { key: 5, name: 'Digital Skills' },
]

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
  const handleSelect = item => {
    console.log('Selected category:', item.name)
  }

  return (
    <div className="flex w-full flex-row items-center justify-between gap-4">
      <DropdownSelect
        options={DROPDOWNCONTENT}
        defaultLabel="All Categories"
        onSelect={handleSelect}
        className="w-[226px]"
      />
      <SearchInput />
    </div>
  )
}

export default Filter
