
const Error = () => {
   function handleRefresh() {
    window.location.reload()
   }
   
    
  return (
    <main className="flex h-full w-full flex-col-reverse items-center justify-center overflow-hidden bg-[#F7F7F7] md:flex-row">
      <div>
        <img
          src="/assets/mockups/not_found.png"
          className="max-h-screen object-cover"
          alt="not found"
        />
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 max-md:mt-4 max-md:p-3">
        <p className="font-inter text-2xl font-light text-[#808080]">
          Oops! Looks like something went wrong.
        </p>
       <form onSubmit={handleRefresh}>
       <button
       
          type='submit'
          className="rounded-xl border border-normal_yellow bg-normal_yellow px-3 py-2 text-white"
        >
          Refresh
        </button>
       </form>
      </div>
    </main>
  )
}

export default Error
