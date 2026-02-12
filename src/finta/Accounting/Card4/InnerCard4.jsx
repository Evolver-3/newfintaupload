import React, { useEffect } from 'react'
import {motion, useAnimate} from 'motion/react'

const data = [
  {
    type: "if",
    rows: [
      { field: "Name", operator: "is", value: "Stripe", color: "#744BA6" },
      { field: "Product", operator: "is", value: "Annual plan", color: "#007BFB" }
    ]
  },
  {
    type: "then",
    rows: [
      { field: "Category", operator: "to", value: "Revenue", color: "#A58E41" },
      { field: "Spread", operator: "to", value: "Yearly", color: "#19A35B" }
    ]
  }
];

const SpanElement=({className='',tag})=>{
  return(
    <div className={`${className} rounded-sm shadow-finta flex justify-around items-center mx-1 `}>

      {tag}
      <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
      fill="currentColor" viewBox="0 0 24 24" >

      <path className='text-neutral-500' d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>

      </svg>

    </div>
  )
}
const containerVariant={
  hidden:{},
  show:{
    transition:{
      staggerChildren:0.4
    }
  }
}

const cardVariant={
  hidden:{
    y:100,
    scale:0.85,
    opacity:0
  },
  show:{
    y:0,
    scale:1,
    opacity:1,
    transition:{
      duration:0.8
    }
  }
}


const InnerCard4 = () => {
  

 
  return (
    <motion.div className='w-max h-50 container shadow-finta overflow-hidden mask-t-from-90%'
    variants={containerVariant}
    initial="hidden"
    animate="show"
    >
     {
      data.map((item,index)=>(
        <motion.div key={index}
        variants={cardVariant}
         className='overflow-hidden'>
          <motion.div
          className='flex flex-col gap-4 w-70 bg-card h-45 px-4 my-2'>

            <h2 className='text-first text-neutral-700 font-semibold px-3 py-0.5 bg-neutral-200 w-fit  rounded-sm '>
              {item.type.toUpperCase()}

            </h2>

          <div className='relative bg-neutral-700 size-5 rounded-full'>
            <svg className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white size-3'  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
            fill="currentColor" viewBox="0 0 24 24" >
              <path d="M3 13h8v8h2v-8h8v-2h-8V3h-2v8H3z"></path>
            </svg>
          </div>

          {item.rows.map((row,n)=>(
            <div key={n} className='flex w-full text-first'>
              <SpanElement tag={row.field} className='w-[35%] '></SpanElement>
              <SpanElement tag={row.operator} className='w-[15%]'></SpanElement>
              <SpanElement tag={row.value } className='w-[35%]'></SpanElement>
            </div>
          ))}
          </motion.div>
        </motion.div>
       
      ))
     }



    </motion.div>
  )
}

export default InnerCard4

