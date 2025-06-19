function Nav() {
  return (
    <div className="flex h-[79px] w-full items-center justify-between">
      <h1 className="flex items-center gap-[8px] text-[32px] font-[600] text-[#303031]">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.9999 10C24.9999 10 15 17.3649 15 20.0001C15 22.6353 25 30 25 30"
            stroke="#303031"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span>New course</span>
      </h1>
    </div>
  )
}

export default Nav
