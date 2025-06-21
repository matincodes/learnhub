const CourseCard = ({e}) => {
  return (
    <div className=" ">
      <div  style={{ backgroundImage: `url(${e.src})` }} className={` bg-cover bg-center flex h-[120px] w-full items-start justify-end rounded-t-[8px]  p-2`}>
        <img
          src="\assets\dots-vertical.svg"
          alt="icon"
          className="cursor-pointer"
        />
      </div>
      <p className="font-san mt-2 text-base font-semibold leading-[19px]">
        {e.title}
      </p>
    </div>
  )
}

export default CourseCard
