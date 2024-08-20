const TestimonialCard = (e) => (
     <div className='bg-[#F9FBFA] rounded-xl font-san flex flex-col item-center justify-around p-[20px] lg:p-[40px] space-y-4'>
          <i className="font-normal text-[20px] text-dark_green tracking-tight"> “{e.testimony}”</i>
          
          <div className="flex items-center gap-4 border-0 border-t-2 pt-5 ">
               <div className="w-[60px] h-[60px] text-white bg-dark_green rounded-full grid place-content-center"> <p className="font-extrabold tracking-wide text-[30px]"> {e.author.split(' ').map(text=>(text.charAt(0)))} </p> </div>
               <h3 className="text-[#12141D]"> {e.author} </h3>
          </div>
     </div>
)

export default TestimonialCard