import React from 'react'
import CallLista from '@/components/ui/CallLista'

function Upcoming() {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>
        Upcoming
      </h1>

      <CallLista type="upcoming" />
    </section>
  )
}

export default Upcoming