import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'
import { FiPlus } from 'react-icons/fi'

function NullState(e) {
  return (
    <div className="col-span-full flex w-full flex-col items-center justify-center gap-y-5 font-inter">
      <img src={e.image} alt="" />

      <div className="space-y-1">
        <h2 className="text-center text-sm font-semibold text-[19px]">
          {e.mainText}
        </h2>
        <p className="text-center text-sm text-gray-500 font-[300]">
          {e.miniText}
        </p>
      </div>

     {e.link ? 
      <Link to={e.link} className="text-normal_green text-[14px] font-[500]">
        <p>{e.linkText}</p>
      </Link>
      :
      ''
     }
     
     {/* Button */}
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
