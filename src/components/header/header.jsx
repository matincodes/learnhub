import { useLocation } from "@tanstack/react-router"

const Header = e => {
  const location = useLocation()

  return (
    <div className={`relative ${location.pathname === '/pricing' ? 'lg:mt-[40px] space-y-2 ' : 'lg:mt-[190px] mt-[90px] space-y-[30px]'}  flex flex-col items-center p-4`}>
        <h1 className={`text-center font-san text-[40px] font-bold leading-[38px] lg:leading-[52px] text-[#051911] lg:text-[50px] lg:w-[50%] w-[${e.min_width}]`}>
          {e.main_text}
        </h1>
      <p className="mt-2  text-center font-san text-[#848484] lg:w-[40%]">
        {' '}
        {e.paragraph}{' '}
      </p>
    </div>
  )
}

export default Header
