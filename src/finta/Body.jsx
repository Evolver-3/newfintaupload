import Container from './Container'
import {motion} from 'motion/react'

const Body = () => {

  const scrollItems=[{id:1,title:"Resend"},
    {id:2,title:"Magic Patterns"},{id:3,title:"outline"},{id:4,title:"rye"},{id:5,title:"relay.app"},{id:6,title:"unthread"},
    {id:7,title:"instant"},{id:8,title:"Circleback"},

  ]

  return (
    <Container>
    <div className='flex flex-col items-center mx-auto justify-center gap-5 '>

      <div className='flex items-center rounded-full mt-35 mb-5 px-4 py-0.75 pr-1.75 pl-2.75  text-[14px] cursor-pointer gap-x-1.5 border border-black/3 bg-[rgba(30,31,37,0.04)] backdrop-blur-[2.5px] hover:bg-[rgba(30,31,37,0.08)] text-xs font-semibold dark:text-foreground'>
      
          Form 1099s are due by January 31
        <i className='bx bx-arrow-right'></i>
      </div>

      <div className='text-center flex items-center flex-col justify-center gap-5'>

        <h1 className='text-[55px] leading-13 font-semibold  max-w-xl text-foreground'>Magically simplify accounting and taxes</h1>

        <p className='text-md text-center max-w-lg leading-tight text-neutral-600 dark:text-neutral-200'>Automated bookkeeping. Effortless tax filing. Financial clarity. Set up in 10 mins. Back to building by 12:06am.</p>

      </div>

      <div className='flex items-center gap-5'>

        <button className='bg-blue-500 rounded-md px-4 py-1.5 text-white text-sm  hover:bg-blue-600 cursor-pointer font-semibold text-shadow-new'>Get started</button>

        <button className='rounded-md px-3 py-1 gap-x-0.5 hover:bg-blue-100 flex items-center justify-center'>Pricing<i className='bx bx-arrow-right text-neutral-500'></i></button>
      </div>

      <h3 className='text-[13px] text-neutral-400'>For US-based startups.</h3>

      <div className='mt-15'>
        <img src='/hero.webp' className='object-cover rounded-md mask-b-from-50% to-100% mx-auto'></img>
      </div>

      <h2 className='text-sm mt-5'>Trusted by fast-growing startups</h2>


      <div className='mask-r-from-80% mask-l-from-90%  overflow-hidden relative'>
      <motion.div className='flex  w-max gap-10 text-[30px] font-semibold  max-w-2xl'
      animate={{
        x:["0%","-50%"]
      }}
      transition={{
        duration:20,repeat:Infinity,ease:"linear"
      }}
      >
        {[...scrollItems, ...scrollItems].map((scroll,index)=>(
          <div className='flex flex-row' key={index}>
          <h2  className='text-neutral-500 hover:text-neutral-600 leading-tight whitespace-nowrap text-[25px] font-light'>{scroll.title}</h2>
          </div>
        ))}
      </motion.div>
      </div>
      
    </div>
    </Container>
  )
}

export default Body