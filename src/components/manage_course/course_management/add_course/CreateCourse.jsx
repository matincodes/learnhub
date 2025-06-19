import UploadFile from './uploadFiles/UploadFile'

function CreateCourse() {
  return (
    <div className="flex h-[464px] w-full items-start justify-start gap-[50px] bg-white px-4 py-3">
      <UploadFile />
    </div>
  )
}

export default CreateCourse
