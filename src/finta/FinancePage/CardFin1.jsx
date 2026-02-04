import NormalCardContain from '../NormalCardContain'
import { useEffect, useState } from 'react'
import {motion} from 'motion/react'

const cards=[
  {text:"Cash",amount:"$453,900",message:"updated 1m ago"},
  {text:"MRR",amount:"$124,800",message:"updated 2hr ago"},
  {text:"Burn",amount:"$234,050",message:"updated 3m ago"}
]
const variants = {
  center: { x: 0, y: 0, opacity: 1, scale: 1, zIndex: 10 },
  right: { x: 300, y: 16, opacity: 0.6, scale: 0.95, zIndex: 5 },
  left: { x: -300, y: 16, opacity: 0.6, scale: 0.95, zIndex: 5 },
  hidden: { opacity: 0 }
}



const CardFin1 = () => {
  const [index,setIndex]=useState(0)
  

  useEffect(()=>{
    const id=setInterval(()=>{
      setIndex((prev)=>(prev+1)% cards.length)
    },3000)

    return ()=>clearInterval(id)
  },[])
 

  return (
 <NormalCardContain heading={"INVESTOR-READY METRICS"} text={"Send investor updates with real-time access to cash, burn rate, runway, and MRR."} logo={""}>

      <div className='relative w-full h-40 flex justify-center overflow-hidden'>
      <div className=' relative w-72 my-4 h-full '>

        {cards.map((card,i)=>{

          const pos=(i-index+cards.length) % cards.length

          return(
          <motion.div
          key={i}
          variants={variants}
          animate={
            pos===0 ?"center" :pos===1?"right":"left"
          }
          transition={{type:"spring",stiffness:200,damping:40}}
         
          className='absolute inset-0'>

            <SmallCard {...card}/>
          </motion.div>
          )


         
        })}
    
      </div>
      </div>
   </NormalCardContain>
  )
}

export default CardFin1


const SmallCard=({text,amount,message,className=''})=>{

  return(
    <div
          className= {`absolute inset-0 rounded-md w-full bg-white  p-4 shrink-0 ${className}`}>
            <div className='flex flex-col gap-3 shadow-weird rounded-xl py-2 px-4 bg-card'>
              <h3 className='text-sm text-neutral-800 font-sans'>{text}</h3>

              <h2 className='text-[25px] leading-tight font-semibold'>{amount}</h2>

              <div className='px-2 py-1 rounded-xl bg-neutral-200 text-sec text-neutral-500 w-fit'>{message}</div>

            </div>
          </div>
  )
}


//mask-x-from-90% mask-x-to-100%
