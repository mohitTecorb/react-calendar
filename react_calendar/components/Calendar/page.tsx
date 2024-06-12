/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import TableSection from '../TableForm/page'
import moment from 'moment'
import { useRouter } from 'next/navigation'
const Calendar = () => {
  const route = useRouter()
  const [view, setView] = useState("Week")
  const [selectedDate, setSelectedDate] = useState<any>(new Date())
  const handleDate = () => {
    if (view == "Day") {
      return moment(selectedDate).format("MMMM DD YYYY")
    } else if (view == "Week") {
      return moment(selectedDate).format("MMM DD") + " - " + moment(selectedDate).add(7, 'days').format("MMM DD") + ", " + moment(selectedDate).format("YYYY")
    } else {
      return moment(selectedDate).format("MMMM YYYY")
    }
  }

  const handleDateChange = (type: any) => {
    const currentDate = moment();
    // Get the number of days in the current month
    const daysInCurrentMonth = currentDate.daysInMonth();

    if (view == "Day" && type == "Prev") {
      let newDate = moment(selectedDate).subtract(1, "day").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setSelectedDate(formatDate)
    } else if (view == "Day" && type == "Next") {
      let newDate = moment(selectedDate).add(1, "day").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setSelectedDate(formatDate)
    } else if (view == "Week" && type == "Prev") {
      let newDate = moment(selectedDate).subtract(7, "days").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setSelectedDate(formatDate)
    } else if (view == "Week" && type == "Next") {
      let newDate = moment(selectedDate).add(7, "days").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setSelectedDate(formatDate)
    } else if (view == "Month" && type == "Prev") {
      let newDate = moment(selectedDate).subtract(daysInCurrentMonth, "days").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setSelectedDate(formatDate)
    } else if (view == "Month" && type == "Next") {
      let newDate = moment(selectedDate).add(daysInCurrentMonth, "days").format("YYYYY MM DD")
      let formatDate = new Date(newDate)
      setSelectedDate(formatDate)
    } else if (type == "Today") {
      setSelectedDate(new Date())
    }
  }
  const handleAddEvent = () => {
    route.push("/AddNewEvents")
  }
  return (
    <>
      <div className='flex g-slate-400 w-full mt-5 relative'>
        <div className='flex justify-between items-center flex-wrap w-full mx-10 sm:mx-5 xs:mx-5'>
          <div className='flex flex-wrap mt-5'>
            <button onClick={() => { handleDateChange("Prev") }}
              className='px-7 xss:px-4 py-1 h-10 border border-slate-200 rounded-md bg-slate-100 '>
              <img src='/left-arrowcircle .svg' alt='left arrow icon' className='hover:scale-150 scale-100' />
            </button>
            <button onClick={() => { handleDateChange("Today") }} className='px-7 xss:px-4 py-1 h-10 border border-slate-200 rounded-md ml-5 bg-slate-100 hover:bg-orange-400'>Today</button>
            <button onClick={() => { handleDateChange("Next") }}
              className='px-7 xss:px-4 py-1 h-10 border border-slate-200 rounded-md ml-5 bg-slate-100'>
              <img src='/rightarrow .svg' alt='right arrow' className='hover:scale-150 scale-100' />
            </button>
          </div>
          <div className='mt-5 mx-4 xss:mx-2'>
            <h1 className='text-2xl xss:text-xl'> {handleDate()}</h1>
          </div>
          <div className='mt-5'>
            <button onClick={() => { setView("Month") }}
              className={`px-7 xss:px-2 py-2  rounded-md  hover:bg-orange-400 ${view == "Month" ? "bg-orange-400 border border-slate-100 " : "border border-orange-200 bg-slate-100"}`}>Month</button>
            <button onClick={() => { setView("Week") }}
              className={`px-7 xss:px-2 py-2  rounded-md ml-5  hover:bg-orange-400 ${view == "Week" ? "bg-orange-400 border border-slate-100 " : "border border-orange-200 bg-slate-100"}`}>Week</button>
            <button onClick={() => { setView("Day") }}
              className={`px-7 xss:px-2 py-2  rounded-md ml-5  hover:bg-orange-400 ${view == "Day" ? "bg-orange-400 border border-slate-100 " : "border border-orange-200 bg-slate-100"}`}>Day</button>

            <button onClick={() => { handleAddEvent() }}
              className="px-7 xss:px-2 py-2  rounded-md ml-5  hover:bg-orange-400  border border-orange-200 bg-slate-100">+ Add Events</button>
          </div>
        </div>
      </div>
      <div className=' h-full mt-10 bg-gray-100 w-full'>
        <TableSection view={view} selectedDate={selectedDate} />
      </div>
    </>
  )
}

export default Calendar