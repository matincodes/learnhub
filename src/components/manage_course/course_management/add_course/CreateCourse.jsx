import { Button } from '@/components/ui/button'
import CourseForm from './courseForm/CourseForm'
import UploadFile from './uploadFiles/UploadFile'
import { Link } from '@tanstack/react-router'
import { useNavigate } from '@tanstack/react-router'

function CreateCourse() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate(-1) // Go back to the previous page
  }
  return (
    <div className="h-[630px] w-full overflow-auto bg-white">
      <div className="flex w-full items-start justify-start gap-[50px] rounded-[10px] px-4 py-3">
        <UploadFile />
        <CourseForm />
      </div>
      <div className="flex w-full items-center justify-between px-3 py-3">
        <Button className="px-8 py-2" onClick={handleBack}>
          <span className="text-[#F7AE30]">Go back</span>
        </Button>
        <Link to="/admin/dashboard/course-management/new-course-lec">
          <Button className="bg-[#F7AE30] px-8 py-2">
            <span className="text-white">Next</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CreateCourse
