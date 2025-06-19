'use client'

import {
  Area,
  Bar,
  ComposedChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

// Chart Data
const chartData = [
  { month: 'Jan', value: 20, bar: 30 },
  { month: 'Feb', value: 21, bar: 30 },
  { month: 'Mar', value: 18, bar: 30 },
  { month: 'Apr', value: 15, bar: 30 },
  { month: 'May', value: 26, bar: 30 },
  { month: 'Jun', value: 21, bar: 30 },
  { month: 'Jul', value: 24, bar: 30 },
  { month: 'Aug', value: 27, bar: 30 },
  { month: 'Sep', value: 23, bar: 30 },
  { month: 'Oct', value: 20, bar: 30 },
  { month: 'Nov', value: 15, bar: 30 },
]

// Chart config
const chartConfig = {
  value: {
    label: 'Activities',
    color: 'hsl(var(--primary))',
  },
  bar: {
    label: 'Monthly Activities',
    color: 'hsl(var(--primary))',
  },
}

// ✅ Custom dashed bar shape
const CustomDashedBar = props => {
  const { x, y, width, height } = props

  return (
    <g>
      {/* Right dashed line only */}
      <line
        x1={x + width}
        y1={y}
        x2={x + width}
        y2={y + height}
        stroke="#F7F7F7"
        strokeWidth={2}
        strokeDasharray="4 2"
      />

      {/* Bottom solid line */}
      <line
        x1={x}
        y1={y + height}
        x2={x + width}
        y2={y + height}
        stroke="#F7F7F7"
        strokeWidth={2}
      />
    </g>
  )
}

const mainChart = () => {
  return (
    <Card className="w-full bg-white font-san">
      <CardHeader className="flex flex-row items-center justify-between !p-4">
        <CardTitle className="relative text-base font-[700]">
          <div className="flex flex-row items-center gap-[8px]">
            <div className="w-fit rounded-full border border-[#F2F2F2] p-[8px]">
              <img
                src="/assets/user.svg"
                alt="icon"
                className="h-[20px] w-[20px]"
              />
            </div>
            <h1 className="text-[20px] font-[600] text-[#000000]">
              Users Engagement
            </h1>
          </div>
        </CardTitle>
        <div className="flex w-auto items-center gap-[20px]">
          <img
            src="/assets/back-arrow.svg"
            alt="back arrow icon"
            className="h-[20px] w-[20px] cursor-pointer"
          />
          <p className="text-[17px] font-[600] text-[#868C98]">16 - 22 Feb</p>
          <img
            src="/assets/forward-arrow.svg"
            alt="forward arrow icon"
            className="h-[20px] w-[20px] cursor-pointer"
          />
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <ChartContainer
          config={chartConfig}
          className="h-[246px] w-full rounded-[16px] p-4"
        >
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ left: 0, top: 10 }}
              className="border-[red]"
              barGap={0}
              barCategoryGap="0%"
            >
              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={30}
                ticks={[0, 5, 10, 15, 20, 25, 30]}
              />

              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f7ae30" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#f7ae30" stopOpacity={0} />
                </linearGradient>
              </defs>

              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="bar" shape={<CustomDashedBar />} />

              <Area
                type="natural"
                dataKey="value"
                stroke="#F7AE30"
                fill="url(#colorUv)"
                fillOpacity={0.2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default mainChart
