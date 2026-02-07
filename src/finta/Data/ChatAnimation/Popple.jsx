import React from 'react'
import {motion} from 'motion/react'

const Popple = () => {
  return (
    <div className=' w-6 h-6 flex items-center justify-center relative'>
  
  <div className="relative flex items-center">

  <motion.svg width="44" height="33">
    <ellipse cx="14.5" cy="14" rx="2.5" ry="2" fill="#D9D9D9" />
    <ellipse cx="22.5" cy="14" rx="2.5" ry="2" fill="#D9D9D9" />
    <ellipse cx="30.5" cy="14" rx="2.5" ry="2" fill="#D9D9D9" />
  </motion.svg>

  <motion.svg
    className="absolute left-[12px] top-[12px]"
    animate={{opacity:[0,1,0]}}
    transition={{duration:1,repeat:Infinity,delay:0}}
    width="5"
    height="4"
  >
    <ellipse cx="2.5" cy="2" rx="2.5" ry="2" fill="gray" />
  </motion.svg>

  <motion.svg
    className="absolute left-[28px] top-[12px] "
    animate={{opacity:[0,1,0]}}
    transition={{duration:1,repeat:Infinity,delay:0.3}}
    width="5"
    height="4"
  >
    <ellipse cx="2.5" cy="2" rx="2.5" ry="2" fill="gray" />
  </motion.svg>

  <motion.svg
    className="absolute left-[20px] top-[12px] "
    animate={{opacity:[0,1,0]}}
    transition={{duration:1,repeat:Infinity,delay:0.6}}
    width="5"
    height="4"
  >
    <ellipse cx="2.5" cy="2" rx="2.5" ry="2" fill="gray" />
  </motion.svg>

</div>

      





    </div>
  )
}

export default Popple