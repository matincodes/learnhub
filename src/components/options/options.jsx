const CourseOption = (e) =>{
     return (
          <>
               <div className="grid place-content-center">
            <label
              htmlFor={e.category}
              className={`w-fit rounded-full border-2 border-normal_green px-[30px] lg:px-[20px] py-[10px] cursor-pointer text-center font-san lg:text-[15px] text-[8px] grid place-content-center text-normal_green ${e.category == e.active ? 'bg-normal_green text-white' : ''}`}
            >
              {e.category}
            </label>
            <input type="radio" name="options" value={e.category} id={e.category} className="hidden" onClick={e.getOptionValue} />
          </div>
          </>
     )
}

export default CourseOption