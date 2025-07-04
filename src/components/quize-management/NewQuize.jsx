import DropdownSelect from '@/components/ui/dropdownselect'

const Difficulty = [
  { key: 1, name: 'Easy' },
  { key: 2, name: 'Medium' },
  { key: 3, name: 'Hard' },
]

function NewQuize({handleSelect , register}) {
 
  return (
    <div className="h-full w-[550px] space-y-[50px]">
      <div className="flex w-full flex-col gap-[10px]">
        <label htmlFor="Course title" className="text-[16px] font-[400]">
          Quiz title
        </label>
        <input     {...register('title', { required: true })} className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50" placeholder="Enter Title" />
      </div>
      <div className="flex w-full flex-col gap-[10px]">
        <label htmlFor="Description" className="text-[16px] font-[400]">
          Description
        </label>
        <textarea
         {...register('description', { required: true })}
          className="h-[159px] border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex  w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter description"
        />
      </div>
      <div className="flex w-full flex-col gap-[10px]">
        <label htmlFor="Description" className="text-[16px] font-[400]">
          Category
        </label>
        <DropdownSelect
          className="w-full"
          options={Difficulty}
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
              options={Difficulty}
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
          options={Difficulty}
          defaultLabel="Select Difficulty"
          onSelect={handleSelect}
          labelColor="text-[#AAAAAA]"
        />
      </div>
    </div>
  )
}

export default NewQuize
