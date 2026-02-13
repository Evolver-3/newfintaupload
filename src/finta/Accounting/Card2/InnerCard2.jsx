
import {motion, useAnimate} from 'motion/react'
import { useEffect } from 'react';


const InnerCard2 = () => {
  const [scope,animate]=useAnimate();

  const Animation=async()=>{
    await animate('.svgOne',{backgroundColor:"oklch(54.6% 0.245 262.881)",scale:1},{delay:1})
    await animate("path",{pathLength:1,opacity:1},{duration:0.5})
    await animate('.colored',{scale:0.95,opacity:0.95},{duration:0.5})
    
    animate('h1',{opacity:0,y:20})
    await animate('.colored',{scale:1,opacity:1},{duration:0.8})

    await animate('.svgTwo',{opacity:1,y:0,rotate:360},{duration:1 ,ease:"linear"})

    await animate('.svgTwo',{opacity:0})

    await animate(".divlast",{opacity:1,y:0,scale:1},{duration:0.5})

  }
  
  useEffect(()=>{
    Animation()
  },[])
  return (
    <div className='shadow-finta px-5 py-4 rounded-md flex flex-col gap-5 w-full bg-card'>
      <div className='flex flex-col gap-2 w-full' 
      ref={scope}
      >
        <h2 className='text-sm font-semibold text-neutral-800'>Categorize 5 Paypal transactions as Software?</h2>
        <h3 className='text-sm text-neutral-500'>See 5 transactions.</h3>

        <div className='flex gap-5'>
          
          <div className='w-auto  rounded-md px-2.5 py-2.5 relative  ring-1 ring-black/10 ring-inset shadow-finta border border-neutral-300 dark:border-neutral-600 text-white'
          >
            
            <motion.svg
            initial={{scale:0}}
            className='svgOne absolute inset-0 w-full rounded-md text-xl h-full '
            xmlns="http://www.w3.org/2000/svg" width="24"
            height="24"
           
            viewBox="0 0 24 24" >

              <motion.path
              initial={{pathLength:0,opacity:0}}
              fill="currentColor"
              d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z">
              </motion.path>
            </motion.svg>
          </div>
          <p className='text-sec text-neutral-600'>Create rule</p>
        </div>

        <div className='flex gap-2 justify-between w-full items-center'>

          <motion.div
          initial={{scale:1,opacity:1}}
          className='colored bg-blue-600 text-white text-sm font-semibold px-15 py-1 rounded-md overflow-hidden relative'>

            <motion.h1
            initial={{opacity:1,y:0}}>Categorize all</motion.h1>

           
            <motion.svg
            initial={{opacity:0,y:0}}
            className="svgTwo absolute inset-0 m-auto"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" ><path d="M12 18a2 2 0 1 0 0 4 2 2 0 1 0 0-4m0-16a2 2 0 1 0 0 4 2 2 0 1 0 0-4M7.76 19.07c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83 2.05-.78 2.83 0 .78 2.05 0 2.83M19.07 7.76c-.78.78-2.05.78-2.83 0s-.78-2.05 0-2.83 2.05-.78 2.83 0 .78 2.05 0 2.83M4 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2m16 0c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2M4.93 7.76c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0 .78 2.05 0 2.83-2.05.78-2.83 0m11.31 11.31c-.78-.78-.78-2.05 0-2.83s2.05-.78 2.83 0 .78 2.05 0 2.83-2.05.78-2.83 0"></path>

            </motion.svg>

            <motion.div className='divlast absolute inset-0 mx-auto flex items-center justify-center'
            initial={{opacity:0,y:-40,scale:0}}>
             
              <motion.svg className=''
              initial={{opacity:0,scale:0}}
              whileInView={{opacity:1,scale:1}}
              transition={{delay:0.2,duration:.4}}
              xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" >
              <path d="M13.29 7.29 7 13.58l-2.29-2.29L3.3 12.7l3 3c.2.2.45.29.71.29s.51-.1.71-.29l7-7-1.41-1.41Zm-.29 6.3-.79-.79-1.41 1.41 1.5 1.5c.2.2.45.29.71.29s.51-.1.71-.29l7-7-1.41-1.41-6.29 6.29Z"></path>
              </motion.svg>

              <motion.h2
              initial={{opacity:1,y:0}} className=''>Categorized</motion.h2>


            </motion.div>
            </motion.div>
          <div className='flex gap-1   items-center text-sm shadow-finta px-1 py-1  rounded-md justify-around'>
            No<span className=' ring-1 ring-black/10 ring-inset shadow-weird text-sec px-1 py-0.5 rounded-md'>Esc</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default InnerCard2