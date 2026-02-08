
import {AnimatePresence, motion,useAnimate} from 'motion/react'
import { useEffect, useState } from 'react'

const Data=[
  {id:1,text:"102939", date:"Dec 23",span:"Completed",load: <i className='bx bx-loader-dots bx-spin '></i>, check:<i className='bx bx-check-circle'></i>},
  {id:2,text:"340539", date:"Jan 22",span:"Pending",load: <i className='bx bx-loader-dots bx-spin'></i>, check:<i className='bx bx-check-circle'></i>},
  {id:3,text:"224239", date:"Mar 18",span:"Completed",load: <i className='bx bx-loader-dots bx-spin'></i>, check:<i className='bx bx-check-circle'></i>}
]


const Cardo = () => {

  const row={
    hidden:{opacity:0,y:10,x:0},
    visible:(i)=>({
      opacity:1,
      y:0,
      x:0,  
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
   
    className='shadow-soft rounded-md w-90 h-auto bg-card mt-10  divide-y divide-neutral-200 dark:divide-neutral-600'
    key={cycle}>

        {Data.map((item,index)=>(
          <motion.div
          className='relative flex justify-between w-full items-center py-2 '
          key={index}
          variants={row}
          initial="hidden"
          animate="visible"
          custom={index}>
          
            <motion.div 
            className='absolute left-5 flex items-center justify-center '>
              
              <motion.h2 className='absolute text-neutral-600 dark:text-neutral-300 text-md'
              initial={{opacity:1,scale:0.8}}animate={{opacity:0,scale:1}}transition={{duration:1.5,delay:index * 2.4+0.6}}>
                {item.load}
              </motion.h2>
              
              <motion.h2 className='absolute   text-lime-600 text-md'
              initial={{opacity:0,scale:0.4}}
              animate={{opacity:1,scale:1}}
              transition={{duration:0.5,delay:index*2.4+1.6
              }}>
                {item.check}
              </motion.h2>
              
             
              
            </motion.div>
             <h2 className='text-sm text-neutral-700 dark:text-white px-10'>{item.text}</h2>

          <motion.div
          initial={{opacity:1}}
          animate={{opacity:0}}
          transition={{delay:index*2.4+2,duration:0.4}}
          
          className='showntext px-3 py-0.5 rounded-md border border-neutral-200 text-sm text-neutral-400 mx-5'>{item.date}</motion.div>

          <motion.div
          initial={{opacity:0,x:6}}
          animate={{opacity:1,x:0}}
          transition={{delay:index*2.4+2.4,duration:0.4}}
          
          className='hiddentext absolute py-1 px-2 text-sm text-blue-600 bg-blue-200 border-0 rounded-md right-5'>{item.span}</motion.div>

        </motion.div>
        ))}

    </motion.div>
    </AnimatePresence>
  )
}

export default Cardo