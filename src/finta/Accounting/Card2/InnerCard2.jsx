import React from 'react'
import {motion} from 'motion/react'

const tickVariants={
  hidden:{pathLength:0,opacity:0},
  show:{
    pathLength:1,opacity:1,
    transition:{duration:.5,delay:0.4}
  }
}

const btnVariants={
  hidden:{scale:1,opacity:1},
  show:{
    scale:0.95,opacity:0.95,
    transition:{duration:0.5,delay:1}
  }
}
const btnCircle={
  hidden:{scale:1,opacity:1},
  show:{
    scale:1,opacity:1,backgroundColor:"blue-600",
    transition:{duration:0.5,delay:1.6}
  }
}

const InnerCard2 = () => {
  return (
    <div className='shadow-finta px-5 py-4 rounded-md flex flex-col gap-5 w-full bg-card'>
      <div className='flex flex-col gap-2 w-full '>
        <h2 className='text-sm font-semibold text-neutral-800'>Categorize 5 Paypal transactions as Software?</h2>
        <h3 className='text-sm text-neutral-500'>See 5 transactions.</h3>

        <div className='flex gap-5'>
          <div className='w-auto  rounded-md px-2.5 py-2.5 relative  ring-1 ring-black/10 ring-inset shadow-finta border border-neutral-300'>
            <motion.svg
            variants={tickVariants}
            initial="hidden"
            animate="show"
            className='absolute bg-blue-500  inset-0 w-full rounded-md text-white text-xl h-full '
            xmlns="http://www.w3.org/2000/svg" width="24"
            height="24"
           
            viewBox="0 0 24 24" >
              <motion.path
              
              fill="currentColor"
              d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z">
              </motion.path>
            </motion.svg>
          </div>
          <p className='text-sec text-neutral-600'>Create rule</p>
        </div>

        <div className='flex gap-2 justify-between w-full items-center'>
          <motion.div
          variants={btnVariants}
          initial="hidden"
          animate='show'
          className='bg-blue-600 text-white text-sm font-semibold px-15 py-1 rounded-md'>Categorize all</motion.div>
          <div className='flex gap-1   items-center text-sm shadow-finta px-1 py-1  rounded-md justify-around'>
            No<span className=' ring-1 ring-black/10 ring-inset shadow-weird text-sec px-1 py-0.5 rounded-md'>Esc</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default InnerCard2