'use client'

import { Area, Bar, CartesianGrid, ComposedChart, XAxis, YAxis } from 'recharts'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

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

const mainChart = () => {
  return (
    <Card className="w-full bg-white font-san">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base font-[700] p-[20px] relative">
          <p className='leading-[20px] font-san absolute bottom-[2px]'>Activities</p>
        </CardTitle>
        <select className="rounded-md px-2 py-2 text-sm">
          <option>This Year</option>
        </select>
      </CardHeader>

      <CardContent className="p-0 ">
        <ChartContainer config={chartConfig} className="h-[246px] w-full p-0">
          <ComposedChart
            data={chartData}
            margin={{
              left: 0,
              // right: 2,
              top: 10,
              // bottom: 20,
            }}
          >
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              padding={{
                left: -24,
                right: 0
              }}
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
            <Bar
              dataKey="bar"
              fill="#FAFAFA"
              fillOpacity={1}
              radius={13}
              activeBar
              barSize={46}
            />
            <Area
              type="natural"
              dataKey="value"
              stroke="#F7AE30"
              // fill="#F7AE30"
              fill="url(#colorUv)"
              fillOpacity={0.2}
            />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default mainChart
