import { Button } from '@/components/ui/button'

function UploadFile() {
  return (
    <div className="w-[356px]">
      <h1 className="text-[16px] font-[400]">Course Thumbnail</h1>
      <div className="dotted flex flex-col items-center justify-center border border-[#3333331A]">
        <img src="/assets/file.svg" alt="file icon" />
        <h3 className="text-[14px] font-[400]">
          Drag and drop your file here, or
        </h3>
        <Button className="bg-[#F7AE30]">Upload from computer</Button>
      </div>
    </div>
  )
}

export default UploadFile
