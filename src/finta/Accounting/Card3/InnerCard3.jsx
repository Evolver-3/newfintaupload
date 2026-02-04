
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
    if (pos === 0) return { opacity: 1, y: 0}
    if (pos === 1) return { opacity: 1, y: 70 }
    return { opacity: 0 }
  }
}

const InnerCard3 = () => {


  return (
      <div className='relative w-full h-40 flex justify-center overflow-hidden'>
      <div className=' relative w-72 my-4 h-full '>

        {dataItems.map((item,i)=> {
          const pos=i;

          return( <motion.div
          variants={variants}
          initial="hidden"
          animate={"visible"}
          transition={{duration:5}}
          custom={pos}
      
          key={item.id} className='relative'>
            <CardDefined {...item}/>
          </motion.div>)
        
})}
        
       
        
    </div>
    </div>
  )
}

export default InnerCard3


const CardDefined=({text,time,amount})=>{
  return(
    <div className='absolute w-60 h-15 shadow-weird flex gap-4 justify-around mx-5 items-center rounded-xl font-sans text-sm bg-white'>

            <div className='flex gap-4 items-center'>
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