
import Container from "./CustomComponent/Container"

const Footer = () => {

  return (
    <Container>
    <div className='flex flex-col gap-15 mt-15'>

      <div className='bg-neutral-900 dark:bg-neutral-400 rounded-xl flex flex-col items-center justify-center h-90'>


      <div className='flex flex-col items-center justify-center gap-8'>
        <div className='text-[40px] text-center leading-tight font-semibold '>
          <h2 className='text-neutral-200 dark:text-neutral-50'>Set up in 10 mins. </h2>

          <h2 className='text-neutral-400 dark:text-neutral-100'>
          Back to building by 9<span className='animate-ping'>:</span>15pm.</h2>

        </div>

        <p className='text-md text-neutral-400 dark:text-neutral-100'>Built for founders who want to focus on their business, not their accounting.</p>

        <button className='px-3 py-1 bg-blue-600 text-md font-semibold text-white rounded-md hover:bg-blue-700 active:hover:bg-blue-800' >Get started</button>


      </div>

      
      </div>

      <div className='flex items-center justify-between '>

        <div className='flex gap-3'>
          <img src='/finta-icon-light.svg' className='w-5 rounded-xl'/>

          <p className='text-sm text-neutral-900 dark:text-white'>Magically simplify accounting and taxes.</p>
        </div>

        <div className='flex gap-3  '>

          <img src="/twitterLogo.png" className='w-7'/>
          <img src='/linkLogo.png' className='w-7'/>

        </div>
      </div>

      <div className='flex items-center justify-between'>

       <p className='text-sm text-neutral-500 dark:text-neutral-200'> Copyright © Finta Platform Inc. All rights reserved.</p>

       <div className='flex gap-7 text-sm text-neutral-700 cursor-pointer dark:text-neutral-300'>
        <p className='hover:underline'>Terms and conditions</p>
        <p className='hover:underline '>Privacy Policy</p>
       </div>


      </div>
    </div>
    </Container>
  )
}

export default Footer