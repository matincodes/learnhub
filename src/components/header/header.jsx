const Header = (e) =>{
     return(
          <div className="p-4 flex flex-col mt-16 items-left relative" >

          <div className="lg:ml-14 lg:w-[40%] w-full">

               <h1 className="font-san text-[#12141D] lg:text-[50px] text-[30px] leading-[52px] font-bold"> {e.main_text} </h1>
          </div>
               {/* <h2 className="font-san text-normal_green lg:text-[56px] text-[40px] font-bold lg:leading-loose leading-[40px] lg:-mt-5 mt-4 "> {e.mini_text} </h2> */}
               {/* <p className="lg:w-[40%] font-inter text-paragraph mt-5"> {e.paragraph} </p> */}
          </div>
     )
}

export default Header
