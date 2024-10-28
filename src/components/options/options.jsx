const CourseOption = (e) =>{
     return (
          <>
               <div className="">
            <label
              htmlFor={e.category}
              className={`w-fit rounded-full border-2 border-normal_green px-[20px] py-[10px] text-center font-san text-[15px] text-normal_green ${e.category == e.active ? 'bg-normal_green text-white' : ''}`}
            >
              {e.category}
            </label>
            <input type="radio" name="options" value={e.category} id={e.category} className="hidden" onClick={e.getOptionValue} />
          </div>
          </>
     )
}

export default CourseOption