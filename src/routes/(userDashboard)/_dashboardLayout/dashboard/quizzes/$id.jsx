import { createFileRoute, useRouter } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import { sampleQuiz } from '@/data/quiz'
export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/quizzes/$id'
)({
  component: StartQuiz,
})

function SubmittedModal({ close }) {
  const router = useRouter()
  return (
    <div
      onClick={close}
      className="fixed inset-0 z-[100] h-full w-full bg-black/50"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="absolute inset-0 m-auto flex h-fit w-[95%] max-w-3xl flex-col items-center justify-center gap-y-16 rounded-xl bg-white p-6 sm:gap-y-20"
      >
        <h2 className="text-center text-lg font-semibold sm:text-2xl">
          Congratulations! You completed the challenges!
        </h2>
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="flex h-full flex-col items-start gap-y-3 rounded-xl border-x-4 border-normal_yellow/60 p-3">
            <p className="font-medium text-gray-400">Question Missed</p>
            <p className="font-semibold">3</p>
          </div>
          <div className="flex h-full flex-col items-start gap-y-3 rounded-xl border-x-4 border-normal_yellow/60 p-3">
            <p className="font-medium text-gray-400">Total time spent</p>
            <p className="font-semibold">3MIN</p>
          </div>
          <div className="flex h-full flex-col items-start gap-y-3 rounded-xl border-x-4 border-normal_yellow/60 p-3">
            <p className="font-medium text-gray-400">Rank</p>
            <p className="font-semibold">3rd</p>
          </div>
          <div className="flex h-full flex-col items-start gap-y-3 rounded-xl border-x-4 border-normal_yellow/60 p-3">
            <p className="font-medium text-gray-400">Percentage Score</p>
            <p className="font-semibold">30%</p>
          </div>
        </div>

        <div className="flex w-full items-center justify-center gap-x-4 sm:gap-x-6">
          <Button
            onClick={() => router.history.back()}
            className="font-semibold text-normal_yellow"
          >
            Back to HomePage
          </Button>
          <Button
            onClick={() => {
              window.location.reload()
            }}
            className="flex h-12 items-center justify-center gap-x-2 rounded-xl bg-normal_yellow px-6 text-white"
          >
            <p className="font-medium">Retake Quiz</p>
          </Button>
        </div>
      </div>
    </div>
  )
}

function StartQuiz() {
  const router = useRouter()

  const [isStartQuiz, setIsStartQuiz] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [secondsLeft, setSecondsLeft] = useState(120)
  const [minutesLeft, setMinutesLeft] = useState(Math.floor(secondsLeft / 60))
  const [selectedOptions, setSelectedOptions] = useState([])
  const [isSubmit, setIsSubmit] = useState(false)

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setSecondsLeft(prevSeconds => {
        if (prevSeconds === 0) {
          clearInterval(countdownInterval)
          setIsSubmit(true)
        }

        return Math.max(0, prevSeconds - 1)
      })
    }, 1000)

    return () => clearInterval(countdownInterval)
  }, [])

  useEffect(() => {
    setMinutesLeft(Math.floor(secondsLeft / 60))
  }, [secondsLeft])

  function answerQuestion(selected) {
    if (
      selectedOptions?.length > 0 &&
      selectedOptions.some(s => s.questionId === selected.questionId)
    ) {
      setSelectedOptions(
        selectedOptions.map(option => {
          console.log(option.questionId, selected.questionId)
          if (option.questionId === selected.questionId) {
            return {
              ...selected,
            }
          }
          return option
        }),
      )
    } else setSelectedOptions(prev => [...prev, selected])
  }

  return (
    <div className="w-full rounded-xl bg-white p-4">
      <div className={cn('w-full', isStartQuiz && 'hidden')}>
        <div className="h-[170px] w-full sm:h-[250px] md:h-[300px]">
          <img
            src="/assets/startQuiz.png"
            alt=""
            className="h-full w-full rounded-xl object-cover"
          />
        </div>

        <div className="mt-4 w-full space-y-6 p-4 sm:mt-6 sm:space-y-8 sm:p-6">
          <div className="flex w-full flex-col items-start justify-start space-y-2">
            <h2 className="text-base font-semibold capitalize sm:text-2xl">
              Test your coding skill
            </h2>
            <p>
              This quiz covers JavaScript fundamentals, advanced concepts, and
              best practices for building dynamic web applications.{' '}
            </p>
          </div>

          <ul className="flex w-full list-disc flex-col items-start justify-start gap-y-4 sm:gap-y-5">
            <li>10 questions</li>

            <li>5-minute time limit</li>

            <li>Click “Next” to proceed, “Submit” when finished</li>

            <li>Ranking based on cumulative score and time taken</li>

            <li>Take fresh quizzes to improve ranking</li>
            <li>
              {' '}
              Click <span className="font-semibold">Take Challenge</span> to
              begin
            </li>
          </ul>

          <div className="flex items-center gap-x-3 sm:gap-x-8">
            <Button
              onClick={() => router.history.back()}
              className="h-12 w-[140px] rounded-xl border border-normal_yellow text-normal_yellow"
            >
              Back
            </Button>

            <Button
              onClick={() => setIsStartQuiz(true)}
              className="flex h-12 w-[140px] items-center justify-center gap-x-2 rounded-xl bg-normal_yellow px-6 text-white"
            >
              <p className="font-medium">Take Challenge</p>
            </Button>
          </div>
        </div>
      </div>
      {/** start quiz section */}
      <div className={cn('hidden w-full py-2 sm:py-4', isStartQuiz && 'block')}>
        <div className="relative mb-6 h-[0.6rem] w-full rounded-3xl bg-gray-100">
          <span
            style={{ width: `${(currentIndex / sampleQuiz?.length) * 100}%` }}
            className="absolute inset-0 h-full rounded-xl bg-normal_yellow"
          ></span>
        </div>
        <div className="mb-4 flex w-full items-end justify-end sm:mb-8">
          <div className="flex items-start gap-x-3">
            <p className="text-sm">Time:</p>
            <div className="flex w-full">
              <div className="flex flex-col items-center">
                <p className="text-sm">
                  {minutesLeft.toString().padStart(2, '0')}
                </p>
                <span className="text-xs text-gray-400 sm:text-[13px]">
                  Mins
                </span>
              </div>
              <span className="mx-2">:</span>
              <div className="flex flex-col items-center">
                <p className="text-sm">
                  {(secondsLeft % 60).toString().padStart(2, '0')}
                </p>
                <span className="text-xs text-gray-400 sm:text-[13px]">
                  Secs
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-3">
          <p>
            Question {currentIndex} / {sampleQuiz?.length || 0}
          </p>
          <h2 className="text-base font-semibold sm:text-lg">
            {sampleQuiz[currentIndex - 1].question}
          </h2>

          {sampleQuiz[currentIndex - 1].code && (
            <div className="my-3 items-start rounded-xl bg-[#ECEFF0] p-6 text-zinc-700 sm:my-6 sm:p-8">
              {sampleQuiz[currentIndex - 1].code}
            </div>
          )}

          {/**options */}
          <div className="mt-3 flex w-full flex-col gap-3 sm:mt-5">
            {sampleQuiz[currentIndex - 1].options.map(opt => (
              <button
                onClick={() =>
                  answerQuestion({
                    questionId: sampleQuiz[currentIndex - 1].id,
                    optionId: opt.id,
                  })
                }
                key={opt.id}
                className={cn(
                  'w-full rounded-xl border border-black p-3 text-start sm:p-4',
                  selectedOptions?.length > 0 &&
                    selectedOptions.some(s => s.optionId === opt.id) &&
                    'border-2 border-normal_yellow bg-normal_yellow/10 shadow',
                )}
              >
                {opt.option}
              </button>
            ))}
          </div>

          <div className="mt-6 flex w-full items-center justify-between sm:mt-10">
            <Button
              onClick={() => {
                if (currentIndex > 1) {
                  setCurrentIndex(currentIndex - 1)
                } else {
                  router.history.back()
                }
              }}
              className="h-12 w-[140px] rounded-xl border border-normal_yellow text-normal_yellow"
            >
              {currentIndex > 1 ? 'Previous' : 'Back'}
            </Button>

            <Button
              onClick={() => {
                if (currentIndex >= sampleQuiz.length) return setIsSubmit(true)
                setCurrentIndex(currentIndex + 1)
              }}
              className="flex h-12 w-[140px] items-center justify-center gap-x-2 rounded-xl bg-normal_yellow px-6 text-white"
            >
              <p className="font-medium">
                {currentIndex >= sampleQuiz.length ? 'Submit' : 'Next Question'}
              </p>
            </Button>
          </div>
        </div>
      </div>
      {isSubmit && <SubmittedModal close={() => setIsSubmit(false)} />}
    </div>
  )
}
