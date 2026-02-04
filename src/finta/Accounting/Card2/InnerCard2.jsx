import React from 'react'

const InnerCard2 = () => {
  return (
    <div className='shadow-finta px-5 py-4 rounded-md flex flex-col gap-5 w-full bg-card'>
      <div className='flex flex-col gap-2 w-full '>
        <h2 className='text-sm font-semibold text-neutral-800'>Categorize 5 Paypal transactions as Software?</h2>
        <h3 className='text-sm text-neutral-500'>See 5 transactions.</h3>

        <div className='flex gap-5'>
          <div className='w-auto  rounded-md px-3 py-2 relative  ring-1 ring-black/10 ring-inset shadow-weird'>
            <svg
            className='absolute  inset-0 bg-blue-600 w-full rounded-md text-white text-xl h-full '  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  fill="currentColor" viewBox="0 0 24 24" >
              <path d="M9 15.59 4.71 11.3 3.3 12.71l5 5c.2.2.45.29.71.29s.51-.1.71-.29l11-11-1.41-1.41L9.02 15.59Z"></path>
            </svg>
          </div>
          <p className='text-sec text-neutral-600'>Create rule</p>
        </div>

        <div className='flex gap-2 justify-between w-full items-center'>
          <div className='bg-blue-600 text-white text-sm font-semibold px-15 py-1 rounded-md'>Categorize all</div>
          <div className='flex gap-1   items-center text-sm shadow-finta px-1 py-1  rounded-md justify-around'>
            No<span className=' ring-1 ring-black/10 ring-inset shadow-weird text-sec px-1 py-0.5 rounded-md'>Esc</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default InnerCard2