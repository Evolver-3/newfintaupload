import React from 'react'
import ButtonClickAnimation from '../ButtonClickAnimation'

const data=[
  {id:1,text:"Cash",amount:"$4,333,232",spanElement:"Updated 1m ago"},
  {id:2,text:"MRR",amount:"$4,333,232",spanElement:"Updated 1m ago"},
  {id:3,text:"Burn",amount:"$4,333,232",spanElement:"Updated 1m ago"}]

const CardFin1 = () => {
  return (
    <ButtonClickAnimation heading={"INVESTOR-READY METRICS"} text={"Send investor updates with real-time access to cash, burn rate, runway, and MRR."} logo={""}>

      <div className='bg-lime-600 w-full h-40 overflow-hidden '>
      <div className=' w-[200%] gap-10 flex'>
       
  
          {data.map((item,index)=>(
          <div className='shadow-finta  bg-white rounded-md w-80 shrink-0 ' key={item.id}>
            <div className='flex flex-col gap-6 my-4 ml-5'>
              <h3>{item.text}</h3>

              <h2>{item.amount}</h2>

              <div>{item.spanElement}</div>

            </div>
          </div>

        ))}
       
       
      </div>
      </div>
    </ButtonClickAnimation>
  )
}

export default CardFin1