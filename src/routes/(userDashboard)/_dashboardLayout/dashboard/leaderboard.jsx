import NullState from '@/components/nullState/nullState'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
// import { leaderboardData } from '@/data/leaderboard'
import { fetchLeaderBoard } from '@/lib/apiFunctions'
import { createFileRoute } from '@tanstack/react-router'
import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useEffect, useState } from 'react'
import { IoArrowBack, IoArrowForward } from 'react-icons/io5'
import { getAuthData } from '@/lib/tokenStorage'

export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/leaderboard',
)({
  component: LeaderBoard,
})



function DataTable({ data, columns }) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    // onRowSelectionChange: setRowSelection,
    //  state: { rowSelection },
    // getRowId: row => (row?.id ? row?.id.toString() : ''),
    // enableRowSelection: canSelectRow || true,
    getPaginationRowModel: getPaginationRowModel(),
  })
  return (
    <Table className="w-full">
      <TableHeader className="w-full">
        {table.getHeaderGroups().map(headerGroup => (
          <TableRow
            style={{ border: 0 }}
            key={headerGroup.id}
            className="grid w-full grid-cols-6 border-b-0 px-4"
          >
            {headerGroup.headers.map(header => {
              return (
                <TableHead
                  key={header.id}
                  className="px-0 text-start text-[13px] font-semibold text-gray-400"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="w-full">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map(row => (
            <TableRow
              className="mb-3 grid w-full grid-cols-6 items-center rounded-md border-b-0 bg-gray-100 px-4 font-medium"
              key={row.id}
            >
              {row.getVisibleCells().map(cell => (
                <TableCell
                  key={cell.id}
                  className="px-1 py-4 text-sm font-medium text-gray-600"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              colSpan={columns.length}
              className="flex h-fit w-full items-center justify-center"
            >
              <img src="/assets/emptyleaderboard.svg" alt="" className="" />
            </TableCell>
          </TableRow>
        )}

        <div className="my-4 flex w-full items-end justify-end">
          <div className="flex w-fit items-center gap-3 rounded-xl bg-[#F7F7F7] p-1">
            <Button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="h-11 rounded-xl bg-white px-6"
            >
              <IoArrowBack size={22} />
            </Button>
            <div className="flex items-center gap-1 font-medium text-gray-500">
              <span>{table.getState().pagination.pageIndex + 1}</span>
              <span>of</span> <span>{table.getPageCount()}</span>
            </div>
            <Button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="h-11 rounded-xl bg-white px-6"
            >
              <IoArrowForward size={22} />
            </Button>
          </div>
        </div>
      </TableBody>
    </Table>
  )
}

const columns = [
  {
    header: 'Rank',
    accessorKey: 'rank',
    cell: ({ row }) => {
      const index = row.index + 1
      return (
        <p>
          {index === 1 ? (
            <img src="/assets/goldbadge.svg" alt="" />
          ) : index === 2 ? (
            <img src="/assets/silverbadge.svg" alt="" />
          ) : index === 3 ? (
            <img src="/assets/bronzebadge.svg" alt="" />
          ) : (
            index + 1
          )}
        </p>
      )
    },
  },
  {
    header: 'Name',
    accessorKey: 'name',
    cell: ({ row }) => {
      const image = row.original.image
      const name = row.original.name
      return (
        <div className="col-span-2 grid grid-cols-6 items-center gap-2">
          <img src={image} alt="" className="rounded-full" />
          <p className="col-span-5">{name}</p>
        </div>
      )
    },
  },
  {
    header: 'Quiz Attempt',
    accessorKey: 'quizAttempts',
    cell: ({ row }) => {
      return <p>{row.original.quizAttempts}</p>
    },
  },
  {
    header: 'Total Hours',
    accessorKey: 'totalHours',
    cell: ({ row }) => {
      return <p>{row.original.totalHours}</p>
    },
  },
  {
    header: 'Points (XP)',
    accessorKey: 'points',
    cell: ({ row }) => {
      return <p>{row.original.points}</p>
    },
  },
]

function LeaderBoard() {
  const [leaderboardData, setLeaderBoardData] = useState([])

  const { accessToken } = getAuthData()

  
    useEffect(() => {
      const getLeaderboard = async () => {
        const leaderboardData = await fetchLeaderBoard(accessToken)
        console.log(leaderboardData)
        setLeaderBoardData(leaderboardData)
      }
  
      getLeaderboard()
    }, [accessToken])

  return (
    <div className="mx-auto w-full max-w-[1300px] rounded-xl bg-white p-4 sm:p-6">
      <h2 className="mb-4 text-base font-semibold sm:mb-6 sm:text-2xl">
        Rankings
      </h2>

      {leaderboardData.length <= 0 ? (
        <NullState
          image={'/assets/trophy.png'}
          mainText="Leaderboard is Empty"
          miniText="No rankings yet. Take quizzes and check again."
        />
      ) : (
        <DataTable data={leaderboardData} columns={columns} />
      )}
    </div>
  )
}
