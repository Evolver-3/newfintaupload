import {AnimatePresence, motion,useAnimate,useInView} from 'motion/react'
import { useEffect } from 'react';


const Cardo = () => {
  const [scope,animate]=useAnimate();

  const startAnimation=async()=>{
    await animate(".bx-loader-dots",{opacity:1,rotate:360*3
    },{duration:1})

    await animate(".bx-loader-dots",{opacity:0,scale:0.8,filter:"blur(4px)"},{duration:1})

     animate(".bx-check-circle",{opacity:1,scale:[.5,1]},{duration:.6})

    await animate(".showntext",{opacity:0,scale:0.8, filter:"blur(1px)"},
      {duration:.2}
    )

     animate(".hiddentext",{opacity:1,x:[3,1,0]},{ease:"easeIn"})
  }

  
  useEffect(() => {
    startAnimation();

  }, []);
 

  return (
    <AnimatePresence>
    <motion.div
      ref={scope}
    className='shadow-soft rounded-md w-80 h-43'>

      <div
    
      className='relative flex justify-between mx-4 items-center py-3'>

        <motion.div 
         className='relative flex items-center justify-center '>

         <motion.i
         style={{opacity:1}}
         className='bx bx-loader-dots'></motion.i> 

         <motion.i
         style={{opacity:0}}
         className='absolute bx  bx-check-circle left-0 '></motion.i> 

        
        <h2 className='text-md text-neutral-700 '>10292</h2>

        </motion.div>

        <motion.div className='showntext px-3 py-1 rounded-md border border-neutral-200 text-sm text-neutral-400'>Jan 21</motion.div>

        <motion.div
        style={{opacity:0}}
        className='hiddentext absolute py-1 px-2 text-sm text-blue-600 bg-blue-200 border-0 rounded-md right-0'>Completed</motion.div>


      </div>
      
      <div
      
      className='relative flex justify-between mx-4 items-center py-3'>

        <motion.div 
         className='relative flex items-center justify-center '>

         <motion.i
         style={{opacity:1}}
         className='bx bx-loader-dots'></motion.i> 

         <motion.i
         style={{opacity:0}}
         className='absolute bx  bx-check-circle left-0 '></motion.i> 

        
        <h2 className='text-md text-neutral-700 '>10292</h2>

        </motion.div>

        <motion.div className='showntext px-3 py-1 rounded-md border border-neutral-200 text-sm text-neutral-400'>Jan 21</motion.div>

        <motion.div
        style={{opacity:0}}
        className='hiddentext absolute py-1 px-2 text-sm text-blue-600 bg-blue-200 border-0 rounded-md right-0'>Completed</motion.div>


      </div>

      <div
      
      className='relative flex justify-between mx-4 items-center py-3'>

        <motion.div 
         className='relative flex items-center justify-center '>

         <motion.i
         style={{opacity:1}}
         className='bx bx-loader-dots'></motion.i> 

         <motion.i
         style={{opacity:0}}
         className='absolute bx  bx-check-circle left-0 '></motion.i> 

        
        <h2 className='text-md text-neutral-700 '>10292</h2>

        </motion.div>

        <motion.div className='showntext px-3 py-1 rounded-md border border-neutral-200 text-sm text-neutral-400'>Jan 21</motion.div>

        <motion.div
        style={{opacity:0}}
        className='hiddentext absolute py-1 px-2 text-sm text-blue-600 bg-blue-200 border-0 rounded-md right-0'>Completed</motion.div>


      </div>


     
    </motion.div>
    </AnimatePresence>
  )
}

export default Cardo