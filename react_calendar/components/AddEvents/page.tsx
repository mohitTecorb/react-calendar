'use client'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const AddEventsSection = () => {
    const route = useRouter()
    const [data, setData] = useState({
        startDate: "",
        endDate: "",
        startTime: "",
        endTime: "",
        title: "",
        description: ""
    })
    const handleChange = (e: any) => {
        let { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const handleSubmit = (e: any) => {
        e.preventDefault()
        let newData = ""
        if (localStorage.eventsData) {
            let fetchPrevData = JSON.parse(localStorage?.eventsData);
            newData = JSON.stringify([...fetchPrevData, data])
        } else {
            newData = JSON.stringify([data])
        }
        localStorage.setItem("eventsData", newData)
        setData({
            ...data,
            startDate: "",
            endDate: "",
            startTime: "",
            endTime: "",
            title: "",
            description: ""
        })
        route.push("/")
    }
    return (
        <>
            <div className="bg-blue-200 min-h-screen flex items-center">
                <div className="w-full">
                    <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Add new event</h2>
                    <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5 flex justify-between">
                                <div className="w-2/5">
                                    <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600">Start date</label>
                                    <input onChange={(e) => { handleChange(e) }} type="date" id="twitter" name="startDate" value={data.startDate} placeholder="Start date" className="border  shadow p-3 w-full rounded mb-" />
                                    {/* <p className="text-sm text-red-400 mt-2"></p> */}
                                </div>
                                <div className="w-2/5">
                                    <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600">End date</label>
                                    <input onChange={(e) => { handleChange(e) }} type="date" id="twitter" name="endDate" value={data.endDate} placeholder="End date" className="border  shadow p-3 w-full rounded mb-" />
                                    {/* <p className="text-sm text-red-400 mt-2"></p> */}
                                </div>
                            </div>
                            <div className="mb-5 flex justify-between">
                                <div className="w-2/5">
                                    <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600">Start time</label>
                                    <input onChange={(e) => { handleChange(e) }} type="time" id="twitter" name="startTime" value={data.startTime} placeholder="start time" className="border  shadow p-3 w-full rounded mb-" />
                                    {/* <p className="text-sm text-red-400 mt-2"></p> */}
                                </div>
                                <div className="w-2/5">
                                    <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600">End time </label>
                                    <input onChange={(e) => { handleChange(e) }} type="time" id="twitter" name="endTime" value={data.endTime} placeholder="end time" className="border  shadow p-3 w-full rounded mb-" />
                                    {/* <p className="text-sm text-red-400 mt-2"></p> */}
                                </div>
                            </div>
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 font-bold text-gray-600">Title</label>
                                <input onChange={(e) => { handleChange(e) }} type="text" id="name" name="title" value={data.title} placeholder="event name" className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="twitter" className="block mb-2 font-bold text-gray-600">Description</label>
                                <textarea onChange={(e) => { handleChange(e) }} id="twitter" name="description" value={data.description} placeholder="event description" className="border  shadow p-3 w-full rounded mb-" />
                                {/* <p className="text-sm text-red-400 mt-2"></p> */}
                            </div>
                            <button type='submit' className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddEventsSection