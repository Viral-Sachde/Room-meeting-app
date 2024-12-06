import React from 'react'
import CallLista from '@/components/ui/CallLista'

function Recordings() {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
      <h1 className='text-3xl font-bold'>
        Recordings
      </h1>

      <CallLista type="recordings" />
    </section>
  )
}

export default Recordings