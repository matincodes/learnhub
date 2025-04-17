import { Button } from '@/components/ui/button'
import { FiPlus } from 'react-icons/fi'

function NullState(e) {
  return (
    <div className="col-span-full flex w-full flex-col items-center justify-center gap-y-5">
      <img src="/assets/empty.png" alt="" />

      <div className="space-y-2">
        <h2 className="text-center text-sm font-semibold">
          {e.mainText}
        </h2>
        <p className="text-center text-sm text-gray-500">
          {e.miniText}
        </p>
      </div>

     {e.button ? 
      <Button className="h-12 items-center justify-center gap-x-2 rounded-xl border border-normal_yellow bg-none px-4 text-normal_yellow">
        <FiPlus size={24} />
        <p>Add Courses</p>
      </Button>
      :
      ''
     }
    </div>
  )
}

export default NullState
