import { motion,useAnimate,useInView,AnimatePresence} from 'motion/react'
import ChatUi from './ChatUi'
import Popple from './Popple'
import { useEffect, useState} from 'react'


const ChatFx=[
  {id:1,text:"Yes, if your business rents a dedicated office space, the entire rental cost can be claimed as a business expense.",span:"<i className='bx bx-checks'></i>",span2:"10:55PM",className:"rounded-bl-xl rounded-br-md pl-2 py-2",parentClassName:"firstBlock flex flex-col gap-1 w-fit ml-auto"},
  {id:2,text:<Popple/>},
  {id:3,text:"Yes, if your business rents a dedicated office space, the entire rental cost can be claimed as a business expense.",span:"Andy from Finta" }
]

const FintaChat = () => {
  const [data,setData]=useState(false)
  const [scope,animate]=useAnimate()
  const isInView=useInView(scope,{margin:"-10px",once:false,amount:0.5})



  const animationSequence=async()=>{
    await animate(".firstBlock",{y:100},{duration:0.7,delay:0})
    await animate(".secondBlock",{opacity:1,y:80},{duration:0.5,delay:1.8,type:"spring"})
    await animate("h3",{opacity:1,y:-20})
    await animate (".textLoading",{opacity:1},{duration:0.2,delay:0.5})
    animate (".text",{opacity:0})

    await animate(".firstBlock",{y:60},{duration:0.1,delay:0})
    await animate(".textLoading",{opacity:0})
    await animate("h3",{y:0})
    await animate(".text",{opacity:1})
  }


  useEffect(() => {
  if (isInView) {
    animationSequence()
  }
}, [isInView])

useEffect(() => {
  const timer = setTimeout(() => {
    setData(true);
  }, 1800); // delay like typing

  return () => clearTimeout(timer);
}, []);


  return (
    <AnimatePresence>
    <div
    ref={scope}
    className='flex flex-col justify-center w-85 h-fit rounded-md mask-y-from-90% mask-y-to-0% mb-5 '>
    
      <motion.div
    initial={{y:180}}
    className='firstBlock flex flex-col gap-1 w-fit ml-auto'>

      <ChatUi text={"Hey, is it possible to expense office rent through my startup?"} className=''/>

      <div className='flex items-center gap-x-1.5 ml-auto text-first pr-5 text-neutral-700 dark:text-neutral-200'>
        <i className='bx bx-checks'></i> 
        <h4> 11:50PM</h4>
      </div>

    </motion.div>


    <motion.div
    initial={{opacity:0,y:160}}
    exit={{y:160,opacity:0}}
    transition={{duration:.2}}
    className='secondBlock flex gap-4 mt-6'>
      
      <div className='w-10 h-10 bg-teal-300 rounded-full'></div>
       
        <motion.div className='relative'>

          
          <ChatUi className='textLoading absolute rounded-br-xl rounded-bl-md px-2 py-1.5'
          initial={{opacity:0}}
          text={data?<Popple/>:"Yes, if your business rents a dedicated office space, the entire rental cost can be claimed as a business expense."}/>
 
          
          <motion.h3
          initial={{opacity:0,y:0}}
          className='text-first text-neutral-700 pl-5 mt-2 dark:text-neutral-300'>Andy from Finta</motion.h3>

        </motion.div>

    </motion.div>

    
    </div>



    </AnimatePresence>
 
  )
}

export default FintaChat