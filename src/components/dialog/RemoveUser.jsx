import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'


export function RemoveUser() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="w-full px-2 py-3 text-base text-left text-red-600 hover:bg-gray-100">
          Remove Selected
        </button>
      </DialogTrigger>
      <DialogContent style={{ zoom: 0.8 }} className="w-[35%]">
        <div className="mb-[-12px] flex w-full justify-end">
          <DialogClose asChild>
            <button className="rounded-full bg-[#F7F7F7] p-2">
              <img
                src="\assets\closeIcon.svg"
                alt="icon"
                className="size-[15px]"
              />
            </button>
          </DialogClose>
        </div>
        <div className="rounded-[10px] bg-[#FFFFFF] p-7">
          <div>
            <h1 className="text-center font-san text-[24px] font-medium leading-7 text-black">
              Are you sure you want to remove selected user(s)
            </h1>
            <p className="mt-5 px-11 text-center font-san text-xl font-normal leading-6 text-[#848484]">
              You can not redo this action, and the user will be taken out of
              the platform
            </p>
            <DialogClose asChild>
              <button className="mt-8 w-full rounded-[10px] bg-[#F7AE30] px-[11px] py-3 font-san text-lg font-semibold text-white">
                No, go back
              </button>
            </DialogClose>

            <button className="mt-3 w-full rounded-[10px] border-[1px] border-[#F7AE30] px-[11px] py-3 font-san text-lg font-semibold text-[#F7AE30]">
              Yes, remove user
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
