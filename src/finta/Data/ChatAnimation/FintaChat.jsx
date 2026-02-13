import { motion} from 'motion/react'
import Popple from './Popple'
import { forwardRef} from 'react'

const FintaChat = () => {

  const MotionChatUi=motion(ChatUi)

  const container={
    hidden:{},
    show:{
      transition:{
        staggerChildren:.6,
      }
    }
  }

const firstBlock = {
  hidden: { y: 150, opacity: 1 },
  show: {
    y: [150,80,40],
    opacity: 1,
    transition: { duration: 3,
      times:[0,0.5,1],ease:"easeInOut"
     }
  }
}
const secondBlock={
  hidden:{},
  show:{opacity:1,
    transition:{
      staggerChildren:0.9
    }
  }
}

const profile = {
  hidden: { opacity: 0, x: -5, filter: "blur(3px)" },
  show: { opacity: 1, x: 0, filter: "blur(0px)" }
}


const popple = {
  hidden: { opacity: 0, filter: "blur(5px)" },
  show: { opacity: 1, filter: "blur(0px)" }
}


const text = {
  hidden: { opacity: 0, filter: "blur(5px)" },
  show: { opacity: 1, filter: "blur(0px)"}
}


  return (
    <div className='w-full h-80 flex items-center justify-center mask-y-from-90% mask-y-to-0%'>

      <motion.div className='w-85  h-full flex flex-col justify-around shadow-weird px-5 py-5'
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 1 }}>

        <motion.div className='flex flex-col gap-2 mt-5'
        variants={firstBlock}>

          <ChatUi className='ml-auto py-1 px-2 rounded-bl-xl rounded-br-lg' text={"Hey, is it possible to expense office rent through my startup?"}/>

          <div className='flex ml-auto mr-5 text-first items-center text-gray-600 dark:text-white '>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M13.29 7.29 7 13.58l-2.29-2.29L3.3 12.7l3 3c.2.2.45.29.71.29s.51-.1.71-.29l7-7-1.41-1.41Zm-.29 6.3-.79-.79-1.41 1.41 1.5 1.5c.2.2.45.29.71.29s.51-.1.71-.29l7-7-1.41-1.41-6.29 6.29Z"></path>
            </svg>
            <h2>
              12:34AM
            </h2>
          </div>

        </motion.div>

        <motion.div className='flex gap-2 opacity-0'
        variants={secondBlock} >

          <motion.div
          className='size-7 bg-neutral-700 rounded-full mt-auto mb-6'
          variants={profile}></motion.div>

          <div className='flex flex-col gap-2'>

            <div className='relative'>
              <MotionChatUi
              variants={popple}
              className=' absolute bottom-0 w-fit rounded-br-xl rounded-bl-lg px-2 py-1' text={<Popple/>}/>


              <MotionChatUi
              variants={text}
              className=' w-fit rounded-br-xl rounded-bl-lg px-2 py-1' text={"Yes, if your business rents a dedicated office space, the entire rental cost can be claimed as a business expense."}/>
            </div>

            <h2 className='text-first items-center text-gray-600 dark:text-white '>
              Andy from finta
            </h2>

          </div>

        </motion.div>

      </motion.div>

    </div>
  )
}

export default FintaChat

const ChatUi = forwardRef(({text,className='',...props}, ref) => {
  return (
    <div
    ref={ref}
    {...props}
    className={`shadow-finta border border-neutral-100 rounded-t-xl text-[15px] text-neutral-800 dark:text-shadow-gray-200 max-w-55 bg-neutral-50 dark:bg-neutral-500 dark:border-neutral-500  ${className}`}>
      {text}
    </div>
  )
})