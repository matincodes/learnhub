import { Button } from '@/components/ui/button'
import LecturerForm from './lecturerForm/lecturerForm'
import { Link } from '@tanstack/react-router'
function CreateCourseLecturer() {
  return (
    <div className="w-full space-y-7">
      <LecturerForm />
      <div className="flex h-[72px] w-full items-center justify-between rounded-[8px] bg-white px-3 py-3">
        <Button className="px-8 py-2">
          <span className="text-[#F7AE30]">Go back</span>
        </Button>
        <Link to="/admin/dashboard/preview-courses">
          <Button className="bg-[#F7AE30] px-8 py-2">
            <span className="text-white">Preview</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CreateCourseLecturer
