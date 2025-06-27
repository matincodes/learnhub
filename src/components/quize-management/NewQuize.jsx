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

function NewQuize() {
  const handleSelect = item => {
    console.log('Selected category:', item.name)
  }
  return (
    <form className="h-full w-[550px] space-y-[50px]">
      <div className="flex w-full flex-col gap-[10px]">
        <label htmlFor="Course title" className="text-[16px] font-[400]">
          Quiz title
        </label>
        <Input className="" placeHolder="Enter Title" />
      </div>
      <div className="flex w-full flex-col gap-[10px]">
        <label htmlFor="Description" className="text-[16px] font-[400]">
          Description
        </label>
        <Textarea
          className="h-[159px] outline-none focus:border-none focus:outline-none"
          placeHolder="Enter description"
        />
      </div>
      <div className="flex w-full flex-col gap-[10px]">
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
      </div>
      <div>
        <div className="flex items-center justify-between gap-5">
          <div className="">
            <p className="mt-6 font-san text-base font-normal text-black">
              Time Limit
            </p>
            <span className="flex w-full items-center justify-between rounded-[10px] border-[1px] border-[#3333331A] px-2 py-2">
              <input placeholder="Select Time frame" className="outline-0" />
              <img
                src="\assets\quiz\clock.svg"
                alt="icon"
                className="size-[20px]"
              />
            </span>
          </div>
          <div>
            <p className="mt-6 font-san text-base font-normal text-black">
              Passing Criteria
            </p>
            <DropdownSelect
              className="w-full"
              options={DROPDOWNCONTENT}
              defaultLabel="Select Passing Score"
              onSelect={handleSelect}
              labelColor="text-[#AAAAAA]"
            />
          </div>
        </div>
      </div>
      <div className="flex h-auto w-full flex-col gap-[10px]">
        <label htmlFor="Description" className="text-[16px] font-[400]">
          Difficulty
        </label>
        <DropdownSelect
          className="w-full"
          options={DROPDOWNCONTENT}
          defaultLabel="Select Difficulty"
          onSelect={handleSelect}
          labelColor="text-[#AAAAAA]"
        />
      </div>
    </form>
  )
}

export default NewQuize
