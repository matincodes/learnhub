import BackButton from '@/components/ui/BackButton'

function Nav() {

  return (
    <div className="flex h-[79px] w-full items-center justify-between">
      <h1 className="flex items-center gap-[8px] text-3xl font-[600] text-[#303031]">
        <BackButton />

        <span>New course</span>
      </h1>
    </div>
  )
}

export default Nav
