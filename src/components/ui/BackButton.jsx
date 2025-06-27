import { useRouter } from '@tanstack/react-router'

const BackButton = () => {
  const router = useRouter()

  const handleBack = () => {
    router.history.go(-1) // Go back one page
  }

  return (
    <button
      onClick={handleBack}
      
    >
      <img src="\assets\back-arrow.svg" alt='icon' className='size-[40px]' />
    </button>
  )
}

export default BackButton
