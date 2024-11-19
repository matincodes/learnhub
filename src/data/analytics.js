import { getYear, format, startOfWeek, endOfWeek, addDays  } from 'date-fns'

export const analyticsData = [
  { value: 'Yearly', label: 'Yearly' },
  { value: 'Monthly', label: 'Monthly' },
  { value: 'Weekly', label: 'Weekly' },
  
]

const yearsAgo = getYear(new Date()) - 20 
export const yearsArray = Array.from(
  { length: 21 },
  (_, index) => yearsAgo +index,
)

export const monthsArray = Array.from({ length: 12 }, (_, index) => {
  const date = new Date(0, index)
  return date.toLocaleString('default', { month: 'long' })
})

export const shortMonthsArray = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(0, index)
    return date.toLocaleString('default', { month: 'short' })
  })
  const monthNameToNumber = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  }
export const getDaysInMonth = (monthName, year) => {
    const month = monthNameToNumber[monthName];
  const days = []
  const endOfMonth = new Date(year, month + 1, 0)

  for (let day = 1; day <= endOfMonth.getDate(); day++) {
    days.push(format(new Date(year, month, day), 'dd'))
  }

  return days
}

export const getWeeksAndDaysInMonth = (monthName, year, currentWeekNumber) => { // Added currentWeekNumber parameter
  
    const weeks = []
    const weekDays = []; 
    
    const month = monthNameToNumber[monthName];
  
    const startOfMonth = new Date(year, month, 1)
    const endOfMonth = new Date(year, month + 1, 0)
  
    let weekCount = 1
    let currentWeekStart = startOfWeek(startOfMonth, { weekStartsOn: 1 }) // Adjust week start to Monday
  
    while (currentWeekStart <= endOfMonth) {
      const monthName = startOfMonth.toLocaleString('default', { month: 'long' })
      weeks.push(`Week ${weekCount} - ${monthName} ${currentWeekStart.getDate()} ${year}`)
      currentWeekStart = addDays(currentWeekStart, 7)
      weekCount++
    }
  

    const weekStartDate = addDays(startOfMonth, (currentWeekNumber - 1) * 7);
  


    for (let i = 0; i < 7; i++) {
      const currentDate = addDays(weekStartDate, i);
      if (currentDate <= endOfMonth) {
        weekDays.push(
          currentDate.toLocaleString('en-US', { weekday: 'short' }) +
          `, ${currentDate.getMonth() + 1}/${currentDate.getDate()}`
        );
      }
    }
  
    return { weeks, days: weekDays }; 
  }
  // Usage example
 // console.log(getWeeksAndDaysInMonth(9, 2023)) // For October 2023
