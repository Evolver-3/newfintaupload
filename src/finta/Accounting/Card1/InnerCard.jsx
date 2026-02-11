import CategorySpan from "./CategorySpan"
import {motion} from 'motion/react'

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

const bodyElementVariant={
  hidden:{opacity:0,y:10,filter:"blur(5px)"},
  show:(i)=>({
    opacity:1,
    y:0,
    filter:"blur(0px)",
    transition:{
      delay:i === 0? 0:1.2,
      duration:0.5
    }
  })
}

const spanVariant={
  hidden:{opacity:1,y:-20,x:10,filter:"blur(0px)"},
  show:(i)=>({
    opacity:0,
    y:-20,
    x:20,
    filter:"blur(4px)",
    transition:{duration:2,delay:i === 0? 0.6 :1.8}
  })
}

const mainVariant={
  hidden:{
    opacity:0,x:20,filter:"blur(4px)"
  },
  show:(i)=>({
    opacity:1,
    x:0,
    filter:"blur(0px)",
    transition:{duration:1,delay:i===0?0.6:1.8}
  })
}

const InnerCard = () => {
  return (
  <div className='shadow-finta rounded-md flex flex-col gap-1 w-full bg-card' >

    <div className='flex flex-col gap-y-3 divide-y divide-neutral-200 dark:divide-neutral-600 py-3'>

    {DataCard.map((data,index)=>((
      <motion.div
      key={index}
      variants={bodyElementVariant}
      initial="hidden"
      whileInView="show"
      custom={index}
     
      className='grid grid-cols-2 gap-10 w-full px-4 py-1' >

      <div className='flex text-nowrap items-center gap-x-6 '>

      <div className='w-10 '>
       <h2 className='text-sec text-neutral-400 leading-tight max-w-xs'> {data.time}</h2>
      </div>
       <h2 className='text-sm text-neutral-600 '>{data.text}</h2>
      </div>

      <div className='flex items-center gap-10 justify-end '>

        <div className='relative justify-end '>
          <motion.div
          variants={mainVariant}
          custom={index}
          className={`relative flex items-center rounded-md gap-2 py-auto px-2 ${statusStyles[data.status].span}`}>

          <h2 className='text-first'>{data.icon}</h2>
          <h2 className='text-[14px]'>{data.span}</h2>
          </motion.div>

          <motion.div
          variants={spanVariant}
          custom={index}>
            <CategorySpan/>
          </motion.div>
          

        </div>

        
         <div className='w-10 flex justify-end'>
            <h2 className='text-sm text-neutral-700 leading-tight max-w-xs'> {data.amount}</h2>
          </div>
      </div>

      </motion.div>

    )))}
    </div>
    
  </div>
  )
}

export default InnerCard