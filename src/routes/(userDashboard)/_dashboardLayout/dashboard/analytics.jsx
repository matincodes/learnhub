import { createFileRoute } from '@tanstack/react-router'
import Inventory from '@/components/inventory/inventory'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { analyticsData, shortMonthsArray } from '../../../../data/analytics'
import { getYear, format } from 'date-fns'
import { useState, useEffect } from 'react'
import {
  monthsArray,
  yearsArray,
  getDaysInMonth,
  getWeeksAndDaysInMonth,
} from '../../../../data/analytics'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

export const Route = createFileRoute(
  '/(userDashboard)/_dashboardLayout/dashboard/analytics',
)({
  component: Analytics,
})

function Analytics() {
  const [selectedValue, setSelectedValue] = useState('Yearly')

  const [selectedList, setSelectedList] = useState([])
  const [selectedItem, setSelectedItem] = useState('')
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [selectedMonth, setSelectedMonth] = useState(format(new Date(), 'MMMM'))
  const [selectedYear, setSelectedYear] = useState(getYear(new Date()))
  const [chartData, setChartData] = useState([])

  useEffect(() => {
    switch (selectedValue) {
      case 'Yearly':
        setSelectedList(yearsArray)
        setSelectedYear(yearsArray[0])

        break
      case 'Monthly':
        setSelectedList(monthsArray)
        setSelectedMonth(monthsArray[0])

        break
      case 'Weekly':
        const res = getWeeksAndDaysInMonth(selectedMonth, selectedYear, 1)
        setSelectedList(res.weeks)
        break
      // case 'Daily':
      //   setSelectedList([])
        break
      default:
        setSelectedList([])
    }
  }, [selectedValue])

  // console.log(selectedValue ,selectedList)

  useEffect(() => {
    setSelectedItem(selectedList[0])
  }, [selectedList])

  useEffect(() => {
    switch (selectedValue) {
      case 'Yearly':
        const xAxisY = shortMonthsArray

        const dataY = xAxisY.map(i => {
          return {
            xAxis: i,
            yAxis: Math.random() * 10,
          }
        })
        setChartData(dataY)
        break
      case 'Monthly':
        const xAxisM = getDaysInMonth(selectedMonth, selectedYear)
        const dataM = xAxisM.map(i => {
          return {
            xAxis: i,
            yAxis: Math.random() * 10,
          }
        })
        setChartData(dataM)
        break
      case 'Weekly':
        const res = getWeeksAndDaysInMonth(selectedMonth, selectedYear, selectedWeek)
      
        const dataW = res.days.map(i => {
          return {
            xAxis: i,
            yAxis: Math.random() * 10,
          }
        })
        setChartData(dataW)
        break
      // case 'Daily':
      //   break
      default:
    }
  }, [selectedList, selectedValue, selectedMonth, selectedYear, selectedWeek])


  function previous() {
    const currentValueIndex = selectedList.findIndex(
      v => v === selectedItem,
    )
    if (currentValueIndex > 0)
      setSelectedItem(selectedList[currentValueIndex - 1])
    if (selectedValue === 'Monthly')
      setSelectedMonth(selectedList[currentValueIndex - 1])
    if (selectedValue === 'Yearly')
      setSelectedYear(selectedList[currentValueIndex - 1])
    if (selectedValue === "Weekly") {
      const selList = selectedList[currentValueIndex - 1]
      const weekNumber = selList.split(" ")[1]
      setSelectedWeek(parseInt(weekNumber))
    }
  }

  function next() {
    const currentValueIndex = selectedList.findIndex(
      v => v === selectedItem,
    )
    if (currentValueIndex < selectedList.length - 1)
      setSelectedItem(selectedList[currentValueIndex + 1])
    if (selectedValue === 'Monthly')
      setSelectedMonth(selectedList[currentValueIndex + 1])
    if (selectedValue === 'Yearly')
      setSelectedYear(selectedList[currentValueIndex + 1])
    if (selectedValue === "Weekly") {
      const selList = selectedList[currentValueIndex + 1]
      const weekNumber = selList.split(" ")[1]
      setSelectedWeek(parseInt(weekNumber))
    }
  }
  return (
    <div className="flex w-full flex-col items-start justify-start gap-6 rounded-xl bg-white p-4 sm:p-6">
      <div className="mb-6 flex w-full items-center justify-between">
        <div className="flex items-center gap-x-3">
          <button
            onClick={previous}
          >
            <img
              src="/assets/fi-br-angle-small-left.png"
              className="cursor-pointer"
              alt="arrow left"
            />
          </button>
          <p className="text-lg font-medium"> {selectedItem}</p>
          <button
            onClick={next}
          >
            <img
              src="/assets/fi-br-angle-small-right.png"
              className="cursor-pointer"
              alt="arrow right"
            />
          </button>
          <img
              src="/assets/notification.png"
              className=""
              alt="nti"
            />
        </div>
        <Select
          onValueChange={value => {
            setSelectedValue(value)
          }}
        >
          <SelectTrigger className="h-12 w-[180px]">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectGroup>
              {analyticsData.map(({ value, label }, index) => (
                <SelectItem
                  key={index}
                  className="h-12 items-center justify-start focus:bg-gray-100"
                  value={value}
                >
                  {label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={chartData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="xAxis" />
            <YAxis />

            <Bar dataKey="yAxis" radius={6} fill="#f7ae30" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        <Inventory
          title={'Total Hours'}
          metrics={'48hrs 34min'}
          image={'/assets/fi-br-clock.png'}
        />
        <Inventory
          title={'Average per Month'}
          metrics={'4hrs 4min'}
          image={'/assets/fi-br-clock.png'}
        />
        <Inventory
          title={'Completed Courses'}
          metrics={'5'}
          image={'/assets/fi-br-list-check.png'}
        />
        <Inventory
          title={'Productivity'}
          metrics={'76%'}
          image={'/assets/fi-br-bulb.png'}
          analytics={
            <div className="flex items-center gap-x-2 text-sm font-semibold sm:text-base">
              <p>+ 2.345</p>
              <img src="/assets/fi-br-chat-arrow-grow.png" alt="" />
            </div>
          }
        />
      </div>
    </div>
  )
}
