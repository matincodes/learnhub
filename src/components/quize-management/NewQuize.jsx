import DropdownSelect from '@/components/ui/dropdownselect'
import { useAdmin } from '@/context/admin-context'

const Difficulty = [
  { key: 1, name: 'Easy' },
  { key: 2, name: 'Medium' },
  { key: 3, name: 'Hard' },
]

const passingCriteria = [
  { key: 1, name: 50 },
  { key: 2, name: 70 },
  { key: 3, name: 90 },
]

function NewQuize({ handleSelect }) {
  const { dispatch, state, category } = useAdmin()
  // console.log(selectedCategory)
  const {
    quize_category,
    quize_title,
    quize_description,
    quize_time_limit,
    quize_passingCriteria,
  } = state
  const categoryData = category.map(item => ({
    key: item.id,
    name: item.title,
  }))
  return (
    <div className="h-full w-[550px] space-y-[50px]">
      <div className="flex w-full flex-col gap-[10px]">
        <label htmlFor="Course title" className="text-[16px] font-[400]">
          Quiz title
        </label>
        <input
          value={quize_title}
          onChange={e =>
            dispatch({ type: 'QUIZE_TITLE', payload: e.target.value })
          }
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter Title"
        />
      </div>
      <div className="flex w-full flex-col gap-[10px]">
        <label htmlFor="Description" className="text-[16px] font-[400]">
          Description
        </label>
        <textarea
          value={quize_description}
          onChange={e =>
            dispatch({ type: 'QUIZE_DESCRIPTION', payload: e.target.value })
          }
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-[159px] w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Enter description"
        />
      </div>
      <div className="flex w-full flex-col gap-[10px]">
        <label htmlFor="Description" className="text-[16px] font-[400]">
          Category
        </label>
        <DropdownSelect
          className="w-full"
          options={categoryData}
          value={quize_category}
          defaultLabel={`${quize_category ? quize_category : 'All Categories'}`}
          onSelect={value =>
            dispatch({ type: 'QUIZE_CATEGORY', payload: value.name })
          }
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
              <input
                value={quize_time_limit}
                onChange={e =>
                  dispatch({
                    type: 'QUIZE_TIME_LIMIT',
                    payload: e.target.value,
                  })
                }
                placeholder="20:00 Time frame"
                className="outline-0"
              />
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
              options={passingCriteria}
              value={quize_passingCriteria}
              defaultLabel={`${quize_passingCriteria ? quize_passingCriteria : 'Select Passing Score'}`}
              onSelect={value =>
                dispatch({
                  type: 'QUIZE_PASSING_CRITERIA',
                  payload: value.name,
                })
              }
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
