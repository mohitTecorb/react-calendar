import { TimeSlots } from '@/components/TimeSlots'
import moment from 'moment'
import React from 'react'
import demoEvents from '@/components/eventsData'
const SingleDayView = ({ selectedDate }: any) => {

  let eventData = demoEvents?.map((date) => { return ({ ...date, start: moment(date.start).format("YYYY/MM/DD"), end: moment(date.end).format("YYYY/MM/DD") }) })
  let selectedEventDate = moment(selectedDate).format("YYYY/MM/DD")
  // console.log("event",eventData);

  const hours = Array.from({ length: 24 }, (_, index) => index);
  // console.log("mohit",hours);

  return (
    <table className='border border-white w-full'>
      <thead>
        <tr className='border border-gray-200'>
          <th className='border border-gray-200 w-32 text-center'>Time</th>
          <th className='border border-gray-200'>Event</th>
        </tr>
      </thead>
      <tbody>
        {hours.map((hour) => (
          <tr key={hour} className='border border-gray-200'>
            <td className='border border-gray-200 w-32 text-center'>{hour}:00</td>
            <td className='border border-gray-200 text-center'>
              {demoEvents?.map((event: any, index) => {
                event = moment(event).format("YYYY/MM/DD")
                const eventStartHour = event?.start?.getHours();
                const eventEndHour = event?.end?.getHours();
                if (eventStartHour <= hour && hour < eventEndHour) {
                  return <div key={index}>{event.title}</div>;
                }
                return null;
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default SingleDayView