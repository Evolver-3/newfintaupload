import { useState } from 'react'
import Container from '../CustomComponent/Container'
import {motion} from 'motion/react'
import CustomBlock from './CustomBlock'
import FirstPricingBlock from './FirstPricingBlock'

const Pricing = () => {

 

  const[normal,setNormal]=useState(0)

  return (
    <Container>

      <div className='flex flex-col items-center justify-center pb-10'>

        <div className='flex flex-col gap-4 text-center text-foreground'>

         <h2 class="text-2xl sm:text-3xl lg:text-4xl font-medium text-center tracking-wide">
          Pricing for 
        <strong class="text-blue-500 font-medium"> inception to scale</strong>
      </h2>

        <h4 className='text-sm'>Transparent and scales with features you use, not your expenses.</h4>

        </div>

        <div className='w-full flex justify-center mt-10'>

          <div className='relative inline-flex items-center justify-center rounded-lg border border-black/3 bg-[rgba(30,31,37,0.04)] dark:bg-neutral-400 p-0.5 '>

          <motion.div
          animate={{x:normal ===0 ?0:"100%"}}
          transition={{type:"spring",stiffness:400,damping:50}}
          className='absolute rounded-md left-0 top-0 h-full w-1/2 shadow-[0_-1px_1px_0_rgba(255,255,255,0.45)_inset,0_1px_1.5px_0_rgba(32,32,32,0.16),0_0_1.5px_0_rgba(0,0,0,0.24)] bg-white '></motion.div>

          <button
          onClick={()=>setNormal(0)}
          className='relative z-1 flex w-25 items-center justify-center gap-2 rounded-md px-3 py-1.5 cursor-pointe'>

            <span className={`text-[14px] leading-5 font-md ${normal ===0 ?"text-neutral-900":"text-neutral-700"} `}>Taxes</span>
          </button>

          <button
          onClick={()=>{setNormal(1)}}
          className='relative z-1 flex w-25 items-center justify-center gap-3 rounded-md px-3 py-1.5 cursor-pointer'>
            
            <span className={`text-[14px] leading-5 font-md ${normal ===1 ?"text-neutral-900":"text-neutral-700"} `}>Accounting</span>
          </button>

          </div>

        </div>

        <div className='mt-8 sm:block w-full overflow-hidden '>
          <motion.div
          animate={{x:normal === 0 ? 0:"-50%"}}
          transition={{type:"spring",stiffness:120,damping:20}}
          className='flex w-[200%] gap-0'>

            <div className=' w-1/2 shrink-0 pr-4'>
              <FirstPricingBlock/>
            </div>

            <div className='w-1/2 pl-4 shrink-0'>
              <div className=' pb-6 lg:pt-4 '>

                <div className='grid gap-y-4 lg:grid-cols-3 lg:gap-x-8'>

                  <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4 lg:col-span-10'>

                    <div className='flex flex-col justify-between gap-y-10 rounded-xl p-5 sm:p-4 sm:pb-5 lg:p-6 bg-white dark:bg-neutral-400 ring-1 ring-[rgba(32,32,32,0.08)] ring-inset shadow-weird '>

                      <div>
                        <h2 className='text-sm font-medium  text-blue-600'>Formation</h2>
                        <p className='text-neutral-700 mt-0.5 text-xs'>For incorporated startups with minimal activity and focused on filing taxes.</p>

                        <div className='mt-2 flex items-center gap-x-2'>
                          <span className='text-black text-3xl font-medium'>$0 </span><span className='text-neutral-700 mt-0.5 text-sm'>/ mo.</span>

                        </div>

                        <div className='h-px w-full bg-[#202020]/8 my-6'></div>

                        <div className='flex flex-col gap-2'>

                        <CustomBlock icon={<i className='bx bx-bolt'></i>} text={"30 categorizations / mo."} spanAvailable={true} spanText1={"Automatically categorize transactions"} spanText2={"Finta automatically and accurately categorize transactions for you. E.g.,Starbucks Meals."} underlineExist={"true"} />

                        <CustomBlock icon={<i className='bx  bx-database'></i>} text={"500 transactions"} underlineExist spanAvailable spanText1={"Store lifetime transactions data"} spanText2={"Finta acts as the source of truth. Transactions include back, credit card, and invoicing data."}/>

                        <CustomBlock icon={<i className='bx  bx-database'></i> } text={"Email and chat support"} underlineExist={false} spanAvailable={false}/>

                        </div>
                      </div>

                      <button className='bg-blue-600 rounded-lg text-white font-medium shadow-soft text-md py-1 mx-3 hover:bg-blue-700'>Get started</button>

                    </div>

                    <div className='flex flex-col justify-between gap-y-10 rounded-xl p-5 sm:p-4 sm:pb-5 lg:p-6 bg-neutral-100 dark:bg-neutral-300 ring-1 ring-[rgba(32,32,32,0.08)] ring-inset shadow-weird '>

                      <div>
                        <h2 className='text-sm font-medium  text-blue-600'>Startup</h2>
                        <p className='text-neutral-700 mt-0.5 text-xs'>For funded startups needing automation, investor updates, or financial visibility.</p>

                        <div className='mt-2 flex items-center gap-x-2'>
                          <span className='text-black text-3xl font-medium'>$30 </span><span className='text-neutral-700 mt-0.5 text-sm'>/ mo.</span>

                        </div>

                        <div className='h-px w-full bg-[#202020]/8 my-6'></div>

                        <div className='flex flex-col gap-2'>

                        <CustomBlock icon={<i className='bx bx-bolt'></i>} text={"3K categorizations / mo."} spanAvailable={true} spanText1={"Automatically categorize transactions"} spanText2={"Finta automatically and accurately categorize transactions for you. E.g.,Starbucks Meals."} underlineExist={"true"} />

                        <CustomBlock icon={<i className='bx  bx-database'></i>} text={"100K transactions"} underlineExist spanAvailable spanText1={"Store lifetime transactions data"} spanText2={"Finta acts as the source of truth. Transactions include back, credit card, and invoicing data."}/>

                        <CustomBlock icon={<i className='bx  bx-database'></i> } text={"Slack support"} underlineExist={false} spanAvailable={false}/>

                        </div>

                        <div className='flex flex-col mt-6 gap-2'>

                          <h2 className='text-sm text-black'>Everything in Formations +</h2>

                          <CustomBlock icon={<i className='bx  bx-check'></i> } text={"International subsidiaries"} underlineExist spanAvailable spanText1={"Compliantly handle international accounting"} spanText2={"Intercompany expenses and transfer pricing."}/>

                          <CustomBlock icon={<i className='bx  bx-check'></i> } underlineExist text={"Slack notifications"} spanAvailable spanText1={"Get monthly summaries and alerts in Slack."}/>
                        </div>
                      </div>

                      <button className=' rounded-lg text-neutral-600 font-medium shadow-weird  text-md py-1 mx-3 bg-white hover:bg-neutral-100 transition-all ease-in-out'>Try for free</button>

                    </div>

                    <div className='flex flex-col justify-between gap-y-10 rounded-xl p-5 sm:p-4 sm:pb-5 lg:p-6 bg-neutral-100  dark:bg-neutral-300 ring-1 ring-[rgba(32,32,32,0.08)] ring-inset shadow-weird '>

                      <div>
                        <h2 className='text-sm font-medium  text-blue-600'>Growth</h2>
                        <p className='text-neutral-700 mt-0.5 text-xs'>For scaling companies needing more automation or advanced reporting.</p>

                        <div className='mt-2 flex items-center gap-x-2'>
                          <span className='text-black text-3xl font-medium'>$300 </span><span className='text-neutral-700 mt-0.5 text-sm'>/ mo.</span>

                        </div>

                        <div className='h-px w-full bg-[#202020]/8 my-6'></div>

                        <div className='flex flex-col gap-2'>

                        <CustomBlock icon={<i className='bx bx-bolt'></i>} text={"30K categorizations / mo."} spanAvailable underlineExist spanText1={"Additional at $0.0001/transactions"} spanText2={""}  />

                        <CustomBlock icon={<i className='bx  bx-database'></i>} text={"1M transactions"} underlineExist spanAvailable spanText1={"Additional at $0.0001/transactions"} spanText2={""} />

                        <CustomBlock icon={<i className='bx  bx-database'></i> } text={"Priority support"} underlineExist={false} spanAvailable={false}/>

                        </div>

                        <div className='flex flex-col mt-6 gap-2'>

                          <h2 className='text-sm text-black'>Everything in Startup +</h2>

                          <CustomBlock icon={<i className='bx  bx-check'></i> } text={"Departments"} underlineExist spanAvailable spanText1={"View expenses by departments and generate"} spanText2={"GAAP financial statements."}/>

                        </div>
                      </div>

                      <button className=' rounded-lg text-neutral-600 font-medium shadow-weird  text-md py-1 mx-3 bg-white hover:bg-neutral-100 transition-all ease-in-out'>Get a demo</button>

                    </div>


                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>

    </Container>
  )
}

export default Pricing