import { adminDeleteQuiz } from '@/api/adminApiService'
import { useAdmin } from '@/context/admin-context'
import { toast } from '@/hooks/use-toast'
import { useState } from 'react'

const QuizePopper = ({ id }) => {
  const { loadQuizzes } = useAdmin()
  const [isLoading, setIsLoading] = useState(false)
  const handleDelete = async () => {
    if (!id) return
    setIsLoading(true)
    try {
      await adminDeleteQuiz(id)
      toast({
        variant: 'destructive',
        title: 'Quize deleted successfully.',
        description: 'Quize deletedsuccessfully.',
      })
      loadQuizzes()
    } catch (error) {
      console.log(error)
      return toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'An error occurred while deleting the quize.',
      })
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className="absolute z-30 mt-[35px] flex h-[161px] w-[176px] flex-col justify-around rounded-[10px] bg-white font-san text-base font-normal shadow-sm shadow-black/20 duration-300 ease-in-out">
      <button className="text-[#303031] outline-0">Edit</button>
      <button className="text-[#303031] outline-0">Preview</button>
      <button onClick={handleDelete} className="text-[#FF0000] outline-0">
        {isLoading ? 'Deleting...' : 'Delete'}
      </button>
    </div>
  )
}

export default QuizePopper
