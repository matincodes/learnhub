import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-[#F7F7F7]', className)}
      {...props}
    />
  )
}

export { Skeleton }
