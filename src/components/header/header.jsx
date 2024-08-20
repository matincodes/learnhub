const Header = e => {
  return (
    <div className="relative mt-16 flex flex-col items-center p-4 text-center">
      <h1 className="font-san text-[40px] font-semibold leading-[40px] text-[#12141D] lg:text-[50px]">
        {' '}
        {e.main_text}{' '}
      </h1>
      <h2 className="mt-4 font-san text-[40px] font-bold leading-[40px] text-normal_green lg:-mt-5 lg:text-[56px] lg:leading-loose">
        {' '}
        {e.mini_text}{' '}
      </h2>
      <p className="mt-5 font-inter text-paragraph lg:w-[40%]">
        {' '}
        {e.paragraph}{' '}
      </p>
    </div>
  )
}

export default Header
