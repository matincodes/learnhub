const AdminInventory = ({ title, metrics, image }) => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-2 rounded-lg border-[1.5px] border-[#F2F2F2] bg-white px-4 py-3 font-san">
      <div className="flex w-full items-center gap-2">
        <div className="rounded-full border border-[#F2F2F2] p-[8px]">
          <img src={image} alt="icon" className="h-[20px] w-[20px]" />
        </div>
        <h4 className="text-[20px] font-[500] text-[#848484]">{title}</h4>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="flex items-center text-xl font-bold sm:text-2xl">
          {metrics}
        </div>
      </div>
    </div>
  )
}

export default AdminInventory
