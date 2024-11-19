import { createFileRoute } from '@tanstack/react-router'
import { leaderboardData } from '../../../../data/leaderboard'

export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/leaderboard',
)({
  component: LeaderBoard,
})

function LeaderBoard() {
  return (
    <div className="mx-auto w-full max-w-[1300px] rounded-xl bg-white p-4 sm:p-6">
      <h2 className="mb-4 text-base font-semibold sm:mb-6 sm:text-2xl">
        Rankings
      </h2>

      <table className="w-full">
        <thead className="mb-3 grid w-full grid-cols-6">
          <tr className="text-[13px] font-semibold uppercase text-gray-400">
            Rank
          </tr>
          <tr className="col-span-2 text-[13px] font-semibold uppercase text-gray-400">
            Name
          </tr>
          <tr className="text-[13px] font-semibold uppercase text-gray-400">
            Quiz Attempt
          </tr>
          <tr className="text-[13px] font-semibold uppercase text-gray-400">
            Total Hours
          </tr>
          <tr className="text-[13px] font-semibold uppercase text-gray-400">
            Point(XP)
          </tr>
        </thead>
        {leaderboardData.map((value, index) => (
          <tbody className="mb-3 grid w-full grid-cols-6 items-center rounded-md bg-gray-100 p-4 font-medium">
            <tr>
              {index + 1 === 1 ? (
                <img src="/assets/goldbadge.svg" alt="" />
              ) : index + 1 === 2 ? (
                <img src="/assets/silverbadge.svg" alt="" />
              ) : index + 1 === 3 ? (
                <img src="/assets/bronzebadge.svg" alt="" />
              ) : (
                index + 1
              )}
            </tr>
            <tr className="col-span-2 grid grid-cols-6 items-center gap-2">
              <img
                src={value.image}
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <p className="col-span-5">{value.name}</p>
            </tr>
            <tr>{value.quizAttempts}</tr>
            <tr>{value.totalHours}</tr>
            <tr>{value.points}</tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
