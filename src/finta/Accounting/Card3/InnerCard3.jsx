
import React from 'react'

const dataItems=[
  {id:1,logo:"",text:"Brex",time:"12:03 AM",amount:"-$450,000"},
  {id:2,logo:"",text:"Mercury",time:"08:30 PM",amount:"$30,000"},
  {id:3,logo:"",text:"Ramp",time:"06:32 PM",amount:"-$34,000"},
  {id:4,logo:"",text:"Jire",time:"02:45 AM",amount:"-$5,000"}
]


const InnerCard3 = () => {
  return (
    <div className='w-full h-fit container'>
      <div className='grid grid-cols-1 place-items-center  '>
        {dataItems.map((item,index)=>(
          <div className='w-full shadow-finta flex gap-4 justify-around mx-5 items-center rounded-xl font-sans text-sm bg-white' key={item.index}>

            <div className='flex gap-4 items-center'>
              <div className='w-10 h-10 bg-lime-500 rounded-full'></div>

            <div className='flex flex-col gap-2 items-center'>
              <h4 className='font-medium'>{item.text}</h4>
              <h2 className='text-xs font-normal text-gray-500'>{item.time}</h2>
            </div>
              
            </div>

            <h4 className='font-semibold'>{item.amount}</h4>

          </div>
        ))}
        
      </div>
    </div>
  )
}

export default InnerCard3