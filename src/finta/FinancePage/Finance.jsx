import Container from '../Container'
import React from 'react'
import CardFin1 from './CardFin1'
import CardFin2 from './CardFin2'
import CardFin3 from './CardFin3'
import CardFin4 from './CardFin4'


const Finance= () => {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center'>
       <h2 class="text-2xl sm:text-3xl lg:text-4xl font-medium text-center tracking-tight mb-6">
       Real-time 
        <strong class="text-blue-500 font-medium"> financial clarity</strong>
      </h2>

      <p className='max-w-150 text-center text-sm text-neutral-800'>Real-time dashboards and Slack alerts so you get answers and avoid surprises.</p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-8 '>
        <CardFin1/>
        <CardFin2/>
        <CardFin3/>
        <CardFin4/>
     
        
      </div>
      <div className='flex flex-col my-20 gap-10'>
        <h2 className='text-2xl lg:text-3xl border-spacing-0.5 font-extrlight max-w-180'>“Finta surfaces the exact numbers we need in real‑time. I can check the dashboard any day of the month, and it's ready.”</h2>

        <div className='flex gap-5'>
          <div className='h-10 w-10 rounded-full bg-amber-400'></div>
          <div className='flex flex-col'>
            
            <h2 className="text-[14px] text-neutral-700 font-semibold">Zeno Goku</h2>
            <h3 className="text-neutral-500  font-semibold text-xs ">Founder of DB Super</h3>
          </div>
        </div>
      </div>

      
      </div>
    </Container>
  )
}

export default Finance