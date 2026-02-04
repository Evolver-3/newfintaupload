
import {AnimatePresence, motion,useAnimate} from 'motion/react'
import { useEffect, useState } from 'react'

const Data=[{id:1,text:"102939", date:"Dec 23",span:"Completed",load: <i className='bx bx-loader-dots bx-spin '></i>, check:<i className='absolute bx bx-check-circle left-0'></i>},
  {id:1,text:"340539", date:"Jan 22",span:"Pending",load: <i className='bx bx-loader-dots bx-spin'></i>, check:<i className='absolute bx bx-check-circle left-0'></i>},
  {id:1,text:"224239", date:"Mar 18",span:"Completed",load: <i className='bx bx-loader-dots bx-spin'></i>, check:<i className='absolute bx bx-check-circle left-0'></i>}
]


const Cardo = () => {


  const row={
    hidden:{opacity:0,y:10},
    visible:(i)=>({
      opacity:1,
      y:0,
      transition:{
        delay:i*2.4,
        duration:1
      }
    })
  }

  const [cycle,setCycle]=useState(0)

  useEffect(()=>{
    const interval=setTimeout(()=>{
      setCycle((c)=>c+1)
    },Data.length*2400+2400)

    return ()=>clearTimeout(interval)
  },[cycle])

 

  return (
    <AnimatePresence mode='wait'>
    <motion.div
   
    className='shadow-soft rounded-md w-75 h-auto bg-card mt-10'
    key={cycle}>

        {Data.map((item,index)=>(
          <motion.div
      
        className='relative flex justify-between mx-4 items-center py-2'
        key={index}
        variants={row}
        initial="hidden"
        animate="visible"
       
        custom={index}

        >
        
          <motion.div 
          className='relative flex items-center justify-center '>

          <motion.h2 className='absolute inset-0 text-neutral-600 text-md'
          initial={{opacity:1,scale:0.8}}
          animate={{opacity:0,scale:1}}
          transition={{duration:1.5,delay:index * 2.4+0.6}}
          >
            {item.load}
          </motion.h2>

          <motion.h2 className='inset-0 absolute text-lime-600 text-md'
          initial={{opacity:0,scale:0.4}}
          animate={{opacity:1,scale:1}}
          transition={{duration:0.5,
            delay:index*2.4+1.6
          }}>
            {item.check}
          </motion.h2>
          
          
          <h2 className='text-sm  text-neutral-700 px-10'>{item.text}</h2> 

          </motion.div>

          <motion.div
          initial={{opacity:1}}
          animate={{opacity:0}}
          transition={{delay:index*2.4+2,duration:0.4}}
          
          className='showntext px-3 py-0.5 rounded-md border border-neutral-200 text-sm text-neutral-400'>{item.date}</motion.div>

          <motion.div
          initial={{opacity:0,x:6}}
          animate={{opacity:1,x:0}}
          transition={{delay:index*2.4+2.4,duration:0.4}}
          
          className='hiddentext absolute py-1 px-2 text-sm text-blue-600 bg-blue-200 border-0 rounded-md right-0'>{item.span}</motion.div>

          


        </motion.div>
        ))}

  


     
    </motion.div>
    </AnimatePresence>
  )
}

export default Cardo