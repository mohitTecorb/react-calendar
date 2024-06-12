'use client'
import MonthView from './MonthView/page'
import SingleDayView from './SingleDayView'
import WeekView from './Weekview/page'
const TableSection = ({ view, selectedDate }: any) => {

    return (
        <div className='mx-2 h-screen overflow-y-scroll , scrollbar-thin , scrollbar-thumb-gray-400 , and scrollbar-track-gray-300 '>
            {view == "Week" && <WeekView selectedDate={selectedDate} />}
            {view == "Month" && <MonthView selectedDate={selectedDate} />}
            {view == "Day" && <SingleDayView selectedDate={selectedDate} />}
        </div >
    )
}

export default TableSection