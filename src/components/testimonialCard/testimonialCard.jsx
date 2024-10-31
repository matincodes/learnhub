const TestimonialCard = e => (
  <div className="item-center flex flex-col justify-around space-y-4 rounded-xl bg-[#F9FBFA] p-[20px] lg:p-[40px]">
    <i className="text-[20px] font-normal font-san tracking-tight text-dark_green">
      {' '}
      “{e.testimony}”
    </i>

    <div className="flex items-center gap-4 border-0 border-t-2 pt-5">
      <div className="grid h-[60px] w-[60px] place-content-center rounded-full bg-dark_green text-white">
        {' '}
        <p className="text-[30px] font-extrabold tracking-wide">
          {' '}
          {e.author.split(' ').map(text => text.charAt(0))}{' '}
        </p>{' '}
      </div>
      <h3 className="text-[#12141D]"> {e.author} </h3>
    </div>
  </div>
)

export default TestimonialCard
