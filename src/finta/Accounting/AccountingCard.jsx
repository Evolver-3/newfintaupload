import Container from '../Container'
import React from 'react'
import CardOne from './Card1/CardOne'
import CardTwo from './Card2/CardTwo'
import CardThree from './Card3/CardThree'
import CardFour from './Card4/CardFour'

const AccountingCard = () => {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center'>
       <h2 class="text-2xl sm:text-3xl lg:text-4xl font-medium text-center tracking-tight mb-6">
       Accounting on 
        <strong class="text-blue-500 font-medium"> Autopilot</strong>
      </h2>

      <p className='max-w-150 text-center text-sm text-neutral-800'>Your time as a founder is extremely valuable, don't waste it on emails or data entry. Set accounting on autopilot and replace QuickBooks + manual bookkeepers.</p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-8 '>
        
        <CardOne/>
        <CardTwo/>
        <CardThree/>
        <CardFour/>
        
      </div>
      <div className='flex flex-col my-20 gap-10'>
        <h2 className='text-2xl lg:text-3xl border-spacing-0.5 font-extrlight max-w-180'>“I used Quickbooks and bookkeepers but it was slow and clunky. Now Finta saves me time by auto-categorizing our transactions more accurately.”</h2>

        <div className='flex gap-5'>
          <div className='h-10 w-10 rounded-full bg-lime-400'></div>
          <div className='flex flex-col'>
            
            <h2 className="text-[14px] text-neutral-700 font-semibold">Jacob Cricket</h2>
            <h3 className="text-neutral-500  font-semibold text-xs ">Founder of Arpanet</h3>
          </div>
        </div>
      </div>

      
      </div>
    </Container>
  )
}

export default AccountingCard