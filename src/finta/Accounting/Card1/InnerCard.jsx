import {motion} from 'motion/react'

import React from 'react'

const DataCard=[
  {time:"1m age",text:"Slack",span:"Software",amount:"-$25",icon:<i className='bx  bx-laptop-alt'></i>,status:"expense"},
  {time:"Just now",text:"Airbnb",span:"Hotel",amount:"-$200",icon:<i className='bx  bx-business'></i> ,status:"spend"},
  {time:"Just now",text:"Stripe",span:"SAFE",amount:"$20,000",icon:<i className='bx  bx-safe'></i>,status:"income" },
  {time:"Just now",text:"Y Combinator",span:"Revenue",amount:"$15,000",icon:<i className='bx  bx-currency-notes'></i>,status:"pending" }
]

const statusStyles={
  expense:{
    amount:"text-sky-600",
    span:"bg-sky-100 text-sky-600 border-sky-200"
  },
  spend:{
    amount:"text-blue-600",
    span:"bg-blue-100 text-blue-600 border-blue-200"
  },
  income:{
    amount:"text-green-600",
    span:"bg-green-100 text-green-600 border-green-200"
  },
  pending:{
    amount:"text-yellow-600",
    span:"bg-yellow-100 text-yellow-600 border-yellow-200"
  }
}

const InnerCard = () => {
  return (
  <div className='shadow-finta px-5 py-4 rounded-md flex flex-col gap-5 w-120 ' >

    <div className='flex flex-col gap-5'>

    {DataCard.map((data,index)=>((
      <div className='grid grid-cols-2 gap-10  border-b border-black/10 pb-3' key={data.text}>

      <div className='flex text-nowrap items-center gap-x-6 '>

      <div className='w-10 '>
       <h2 className='text-sec text-neutral-400 leading-tight max-w-xs'> {data.time}</h2>
      </div>
       <h2 className='text-sm text-neutral-600 '>{data.text}</h2>
      </div>

      <div className='flex items-center gap-10 justify-end'>

        <div className={`flex items-center gap-2 rounded-md px-2 justify-end ${statusStyles[data.status].span}`}>
          <h2 className='text-first'>{data.icon}</h2>
          <h2 className='text-[14px]'>{data.span}</h2>
         
        </div>

        
         <div className='w-10 flex justify-end'>
            <h2 className='text-sm text-neutral-700 leading-tight max-w-xs'> {data.amount}</h2>
          </div>
      </div>

    </div>

    )))}
    </div>
    
  </div>
  )
}

export default InnerCard