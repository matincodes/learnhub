const AdminInventory = ({ title, metrics, image }) => {
     return (
       <div className="flex w-full flex-col items-start font-san justify-start gap-y-2 rounded-lg bg-white py-3 px-4">
         <div className="flex w-full items-center gap-2">
         <img src={image} alt="" className="w-[13px]" /> 
           <h3 className="text-xs font-medium sm:text-xl">{title}</h3>
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
   