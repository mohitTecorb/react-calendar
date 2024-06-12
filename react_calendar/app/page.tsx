import Calendar from '@/components/Calendar/page'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='mt-2 mx-40 2xl:mx-40 xl:mx-28 sm:mx-5 xs:mx-5 border-4 border-orange-300 rounded-md bg-stone-300'>
      <Calendar />
    </div>
  )
}
