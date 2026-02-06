import Container from './Container'
import Downside from './Downside'
import Upside from './Upside'
import { useState } from 'react'
import {motion} from 'motion/react'


const Testimonial = () => {

  const[open ,setOpen]=useState(false);

  return (

     <Container>
      <div className=' flex flex-col gap-10 items-center justify-center text-center py-10 text-foreground'>

        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-medium text-center tracking-wide">
        Built for<strong class="text-blue-500 font-medium"> ambitious founders</strong>
        </h2>

        <p className='text-sm max-w-md'>Finta is for founders and operators. It's powerful accounting software with simplified expert tax services we wish we'd had ourselves.</p>

        <div className=' flex items-center gap-2 rounded-xl bg-neutral-300 dark:text-gray-700 px-4 py-0 text-sm'>

          <i className='bx bx-star text-indigo-800 '></i>

          <span className='font-bold'>4.8</span>
          <span> from 1,000+ founders</span>
        </div>

        <div>

        <motion.div
        animate={{height: open ? 1000:500}}
        transition={{duration:.6,ease:"easeOut"}}
        className='mask-t-from-95% mask-b-from-95%  grid md:grid-cols-3  overflow-hidden  '>

          <Upside/>
          <Downside/>
          <Upside/>

        </motion.div>

          <button onClick={()=>setOpen(!open)} className='px-3 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black text-md'>
          {open ?  "See less":"See more"}
        </button>

        </div>

      
        </div>

        

   
     </Container>

  )
}

export default Testimonial