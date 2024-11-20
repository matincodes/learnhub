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
        <thead className="w-full">
          <tr className="mb-3 grid w-full grid-cols-6">
            <td className="text-[13px] font-semibold uppercase text-gray-400">
              Rank
            </td>
            <td className="col-span-2 text-[13px] font-semibold uppercase text-gray-400">
              Name
            </td>
            <td className="text-[13px] font-semibold uppercase text-gray-400">
              Quiz Attempt
            </td>
            <td className="text-[13px] font-semibold uppercase text-gray-400">
              Total Hours
            </td>
            <td className="text-[13px] font-semibold uppercase text-gray-400">
              Point(XP)
            </td>
          </tr>
        </thead>
        <tbody className="w-full">
          {leaderboardData.map((value, index) => (
            <tr className="mb-3 grid w-full grid-cols-6 items-center rounded-md bg-gray-100 p-4 font-medium">
              <td>
                {index + 1 === 1 ? (
                  <img src="/assets/goldbadge.svg" alt="" />
                ) : index + 1 === 2 ? (
                  <img src="/assets/silverbadge.svg" alt="" />
                ) : index + 1 === 3 ? (
                  <img src="/assets/bronzebadge.svg" alt="" />
                ) : (
                  index + 1
                )}
              </td>
              <td className="col-span-2 grid grid-cols-6 items-center gap-2">
                <img
                  src={value.image}
                  alt=""
                  className="h-10 w-10 rounded-full"
                />
                <p className="col-span-5">{value.name}</p>
              </td>
              <td>{value.quizAttempts}</td>
              <td>{value.totalHours}</td>
              <td>{value.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
