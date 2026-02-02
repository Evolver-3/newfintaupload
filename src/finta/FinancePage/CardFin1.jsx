import React from 'react'
import NormalCardContain from '../NormalCardContain'
import {motion} from 'motion/react'

const CardFin1 = () => {
  
const MotionCard=motion(SmallCard)
  return (
 <NormalCardContain heading={"INVESTOR-READY METRICS"} text={"Send investor updates with real-time access to cash, burn rate, runway, and MRR."} logo={""}>

      <div className='relative w-full h-40 '>
      <div className=' relative flex items-center'>
        
          <MotionCard
          initial={{x:-200,opacity:0.5}}
          animate={{x:100,opacity:1}}
          transition={{duration:3}}
          
          
          text={"data"} amount={"$4,333,232"} time={"Updated 1m ago"}>

          </MotionCard>

          <MotionCard
          initial={{x:200,opacity:0.5}}
          
          
          text={"data"} amount={"$4,333,232"} time={"Updated 1m ago"}>

          </MotionCard>

          <MotionCard
          initial={{x:100,opacity:1}}
          
          
          text={"data"} amount={"$4,333,232"} time={"Updated 1m ago"}>

          </MotionCard>

        

       
      </div>
      </div>
   </NormalCardContain>
  )
}

export default CardFin1


const SmallCard=({text,amount,time})=>{

  return(
    <div
          className= 'rounded-md w-60 shrink-0'>
            <div className='flex flex-col gap-4 shadow-finta rounded-xl'>
              <h3>{text}</h3>

              <h2>{amount}</h2>

              <div>{time}</div>

            </div>
          </div>
  )
}