import { Button } from '@/components/ui/button'
import DropdownSelect from '@/components/ui/dropdownselect'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
const DROPDOWNCONTENT = [
  { key: 1, name: 'Front-end Development' },
  { key: 2, name: 'Back-end Development' },
  { key: 3, name: 'Programming/Coding' },
  { key: 4, name: 'Foundational Skills' },
  { key: 5, name: 'Digital Skills' },
]

function CourseForm() {
  const handleSelect = item => {
    console.log('Selected category:', item.name)
  }
  return (
    <form className="h-full w-[450px] space-y-[50px]">
      <div className="flex h-[72px] w-full flex-col gap-[10px]">
        <label htmlFor="Course title" className="text-[16px] font-[400]">
          Course title
        </label>
        <Input className="" placeHolder="Enter a course title" />
      </div>
      <div className="flex h-[188px] w-full flex-col gap-[10px]">
        <label htmlFor="Description" className="text-[16px] font-[400]">
          Description
        </label>
        <Textarea
          className="h-[159px] outline-none focus:border-none focus:outline-none"
          placeHolder="Enter description"
        />
      </div>
      <div className="flex h-[171px] w-full flex-col gap-[10px]">
        <label htmlFor="Description" className="text-[16px] font-[400]">
          Category
        </label>
        <DropdownSelect
          className="w-full"
          options={DROPDOWNCONTENT}
          defaultLabel="All Categories"
          onSelect={handleSelect}
          labelColor="text-[#AAAAAA]"
        />
        <Input className="" placeHolder="Add new category" />
        <Button className="w-fit space-x-2 rounded-full border border-[#3333331A]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 3V15"
              stroke="#F7AE30"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 9H15"
              stroke="#F7AE30"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-[#F7AE30]">Add new category</span>
        </Button>
      </div>
      <div className="flex h-auto w-full flex-col gap-[10px]">
        <label htmlFor="Description" className="text-[16px] font-[400]">
          Difficulty
        </label>
        <DropdownSelect
          className="w-full"
          options={DROPDOWNCONTENT}
          defaultLabel="All Categories"
          onSelect={handleSelect}
          labelColor="text-[#AAAAAA]"
        />
      </div>
    </form>
  )
}

export default CourseForm
