const Header = e => {
  return (
    <div className="relative mt-16 flex flex-col items-center p-4">
      <div className={`lg:ml-14 lg:w-[${e.width}] w-full`}>
        <h1 className="text-center font-san text-[30px] font-bold leading-[52px] text-[#051911] lg:text-[50px]">
          {' '}
          {e.main_text}{' '}
        </h1>
      </div>
      {/* <h2 className="font-san text-normal_green lg:text-[56px] text-[40px] font-bold lg:leading-loose leading-[40px] lg:-mt-5 mt-4 "> {e.mini_text} </h2> */}
      <p className="mt-5  text-center font-san text-paragraph lg:w-[50%]">
        {' '}
        {e.paragraph}{' '}
      </p>
    </div>
  )
}

export default Header
