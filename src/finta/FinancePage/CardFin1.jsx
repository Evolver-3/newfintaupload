
import NormalCardContain from '../NormalCardContain'

const CardFin1 = () => {
 

  return (
 <NormalCardContain heading={"INVESTOR-READY METRICS"} text={"Send investor updates with real-time access to cash, burn rate, runway, and MRR."} logo={""}>

      <div className='relative w-full h-40 flex justify-center overflow-hidden'>
      <div className=' relative w-72 my-4 h-full '>
        
         <SmallCard  text={'Data'} amount={"$123,000"} time={"Updated 1m ago"} className='translate-x-0 opacity-100 z-10'/>

         <SmallCard  text={'Data'} amount={"$123,000"} time={"Updated 1m ago"} className='translate-x-[calc(100%+16px)] translate-y-4 opacity-40'/>

         <SmallCard  text={'Data'} amount={"$123,000"} time={"Updated 1m ago"} className='translate-x-[calc(-100%-16px)] translate-y-4 opacity-40'/>

         <SmallCard  text={'Data'} amount={"$123,000"} time={"Updated 1m ago"} className='opacity-0 translate-x-[200%]'/>

         <SmallCard  text={'Data'} amount={"$123,000"} time={"Updated 1m ago"} className='opacity-0 translate-x-[200%]'/>

         <SmallCard  text={'Data'} amount={"$123,000"} time={"Updated 1m ago"} className='opacity-0 translate-x-[200%]'/>
         
       
      </div>
      </div>
   </NormalCardContain>
  )
}

export default CardFin1


const SmallCard=({text,amount,time,className=''})=>{

  return(
    <div
          className= {`absolute inset-0 rounded-md w-full p-4 shrink-0 transition-all duration-700 ease-in-out ${className}`}>
            <div className='flex flex-col gap-3 shadow-weird rounded-xl py-2 px-4 '>
              <h3 className='text-sm text-neutral-800 font-sans'>{text}</h3>

              <h2 className='text-[25px] leading-tight font-semibold'>{amount}</h2>

              <div className='px-2 py-1 rounded-xl bg-neutral-200 text-sec text-neutral-500 w-fit'>{time}</div>

            </div>
          </div>
  )
}


//mask-x-from-90% mask-x-to-100%