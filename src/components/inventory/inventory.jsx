const Inventory = ({ title, image, metrics, analytics }) => {
  return (
    <div className="flex w-full flex-col items-start justify-start gap-y-3 rounded-lg bg-white p-3 sm:gap-y-6 sm:p-6">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-xs font-medium sm:text-xl">{title}</h3>
        <img src={image} alt="" className="hidden sm:block" />
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="flex items-center text-xl font-bold sm:text-2xl">
          {metrics}
        </div>

        {analytics && <div className="hidden sm:block">{analytics}</div>}
      </div>
    </div>
  )
}

export default Inventory
