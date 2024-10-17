import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
export const Route = createFileRoute('/dashboard/quizzes/$id')({
  component: StartQuiz,
})

function StartQuiz() {
  const navigate = useNavigate()

  return (
    <div className="w-full rounded-xl bg-white p-4">
      <div className="h-[170px] w-full sm:h-[250px] md:h-[300px]">
        <img
          src="/assets/startQuiz.png"
          alt=""
          className="h-full w-full rounded-xl object-cover"
        />
      </div>

      <div className="mt-8 w-full space-y-6 p-4 sm:mt-16 sm:space-y-8 sm:p-6">
        <h2 className="font-semibold">UI/UX Design Quiz</h2>

        <ul className="flex w-full list-disc flex-col items-start justify-start gap-y-4 sm:gap-y-5">
          <li>10 questions</li>

          <li>5-minute time limit</li>

          <li>Click “Next” to proceed, “Submit” when finished</li>

          <li>Ranking based on cumulative score and time taken</li>

          <li>Take fresh quizzes to improve ranking</li>
        </ul>
        <div className="flex w-full items-center justify-between">
          <p>
            Click <span className="font-semibold">Start Quiz</span> to begin
          </p>

          <div className="flex  items-center gap-x-3">
            <Button className="text-gray-300">Go Back</Button>

            <Button className="flex h-12 items-center justify-center gap-x-2 rounded-lg bg-normal_yellow px-4 text-white">
              <p className="font-medium">Start Quiz</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
