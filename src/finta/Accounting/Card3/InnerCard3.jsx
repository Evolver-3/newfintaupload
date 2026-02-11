
import { motion } from 'motion/react'


const dataItems=[
  {id:1,logo:"",text:"Brex",time:"12:03 AM",amount:"-$450,000"},
  {id:2,logo:"",text:"Mercury",time:"08:30 PM",amount:"$30,000"},
  {id:3,logo:"",text:"Ramp",time:"06:32 PM",amount:"-$34,000"},
  {id:4,logo:"",text:"Jire",time:"02:45 AM",amount:"-$5,000"}
]

const variants = {
  hidden: (pos) => {
    if (pos === 0) return { opacity: 0, y: -100 ,}
    if (pos === 1) return { opacity: 0, y: 180 }
    return { opacity: 0 }
  },

  visible: (pos) => {
    if (pos === 0) return { opacity: 1, y: 5}
    if (pos === 1) return { opacity: 1, y: 75 }
    return { opacity: 0 }
  }
}

const InnerCard3 = () => {


  return (
      <div className='relative w-full h-40 flex justify-center overflow-hidden'>

        <motion.div
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{duration:.5,delay:2}}
        className='size-9 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-black border-4  border-neutral-700'>

        <motion.svg
        initial={{opacity:0,rotate:0}}
        animate={{opacity:1,rotate:90}}
        transition={{delay:2,duration:0.5}}
        className=' text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
        fill="currentColor" viewBox="0 0 24 24" >
        <path d="M12 16H8V2H6v14H2l5 6zm0-8h4v14h2V8h4l-5-6z"></path>
        </motion.svg>

        <motion.svg
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        transition={{delay:3,duration:0.3}}
        className='text-blue-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl'  xmlns="http://www.w3.org/2000/svg" width="20" height="20"  
        fill="currentColor" viewBox="0 0 24 24" >

        <path d="M13.29 7.29 7 13.58l-2.29-2.29L3.3 12.7l3 3c.2.2.45.29.71.29s.51-.1.71-.29l7-7-1.41-1.41Zm-.29 6.3-.79-.79-1.41 1.41 1.5 1.5c.2.2.45.29.71.29s.51-.1.71-.29l7-7-1.41-1.41-6.29 6.29Z"></path>
        </motion.svg>



        </motion.div>

      <div className=' relative w-72 my-4 h-full '>

        {dataItems.map((item,i)=> {
          const pos=i;
          return( <motion.div
          layout
          variants={variants}
          initial="hidden"
          animate={"visible"}
          transition={{duration:2}}
          custom={pos}
      
          key={item.id} className='relative'>
            <CardDefined {...item} pos={pos}/>
          </motion.div>)
        
})}
        
    </div>
    </div>
  )
}

export default InnerCard3


const CardDefined=({text,time,amount,pos})=>{
  return(
    <div className={`absolute w-60 h-15 shadow-weird flex gap-2 ml-2 justify-between px-2 items-center rounded-xl font-sans text-sm bg-card 
    ${pos === 0 ? 'rounded-t-xl rounded-b-sm':''} ${pos===1? 'rounded-b-xl rounded-t-sm -mt-1':''}
    }`}>

            <div className='flex gap-2 items-center'>
              <div className='w-10 h-10 bg-lime-500 rounded-full'></div>

            <div className='flex flex-col gap-2 items-center'>
              <h4 className='font-medium'>{text}</h4>
              <h2 className='text-xs font-normal text-gray-500'>{time}</h2>
            </div>
              
            </div>

            <h4 className='font-semibold'>{amount}</h4>

          </div>
  )
}