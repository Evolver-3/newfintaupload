import React from 'react'

const Card4 = () => {
  return (
    <div className='w-85 h-fit px-2 py-3 rounded-xl bg-card flex gap-4 justify-center items-start shadow-weird'>
      
      <div className='w-10 h-10 rounded-full bg-primary'></div>

      <div className='flex flex-col gap-3 item-start justify-center text-foreground'>
        <div className=' flex gap-3 text-sm'>
          <h2 className='font-semibold'>Ryan Peebles</h2>
          <h4 className='text-neutral-400 dark:text-neutral-200'>12:14PM</h4>
        </div>

        <p>Hey I just got this letter from the IRS, what do I do?</p>

        <span className='w-fit  rounded-sm text-blue-600 text-sm leading-tight bg-blue-300 '>#finta</span>

        <div className='flex gap-4'>
          <div className='w-7 h-7 rounded-xl bg-red-600'></div>

          <div className='flex flex-col items-start justify-center gap-3'>
            <h2>IRS - Compliance Notice.pdf</h2>

            <h4>PDF</h4>
          </div>

          <div className='w-1 h-full bg-black/10'></div>

        </div>

      </div>
    </div>
  )
}

export default Card4