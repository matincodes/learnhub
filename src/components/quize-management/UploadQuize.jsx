import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import * as Progress from '@radix-ui/react-progress'

function UploadQuize({ openCourseLoading, onOpen }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 50) {
          clearInterval(interval)
          return 50
        }
        return prev + 1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <Dialog open={openCourseLoading}>
      <DialogContent className="w-[396px] bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-[34px] font-[600] text-[#303031]">
            Uploading Quiz
          </DialogTitle>
        </DialogHeader>

        <div className="">
          <img
            src="/assets/coursesImages/imgaeuploading.svg"
            alt="preview image uploading"
            className="w-full rounded-t-[15px]"
          />
          <h2 className="text-[20px] font-[500] text-black">
            Test your coding skills
          </h2>
          <p className="font-san text-[10px] font-normal text-[#303031]">
            No of Questions - 10
          </p>

          <div className="mt-[31px] space-y-1">
            <Progress.Root
              className="relative h-2 w-full overflow-hidden rounded-full bg-[#f2f2f2]"
              value={progress}
            >
              <Progress.Indicator
                className="h-full bg-[#F7AE30] transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${100 - progress}%)` }}
              />
            </Progress.Root>
            <span className="text-[14.3px] font-[400] text-[#303031]">
              Progress - {progress}% Complete
            </span>
          </div>
        </div>

        <DialogFooter className="w-full sm:justify-start">
          <DialogClose
            className="w-full"
            onClick={() => {
              onOpen(false)
            }}
          >
            <Button
              type="button"
              className="w-full rounded-[11.44px] border border-[#3333331A] py-7"
            >
              <span className="text-[22.87px] font-[400] text-[#AAAAAA]">
                Go Home
              </span>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default UploadQuize
