import { useState } from 'react'
import Container from '../Container'
import {motion} from 'motion/react'
import CustomBlock from './CustomBlock'

const Pricing = () => {

  const dataApi=[
    {id:1,icon:<i className='bx bx-check text-blue-600'></i> ,text:"Delaware franchise tax",blocktext1:"Delaware annual report and franchise",blocktext2:"Finta assista with processing the payment.", spantext:"Included"},
    {id:2,icon:<i class='bx  bx-plus'></i> ,text:"State income tax",blocktext1:"Required for states you have presence in ",blocktext2:"States with offices or salaried employees. Not required for Delaware if you only incorporate there.", spantext:"$150 ea."},
    {id:3,icon:<i class='bx  bx-plus'></i> ,text:"Foreign founders",blocktext1:"Form 5472",blocktext2:"IRS requirement for every non US tax-resident shareholder that owns greater than 25%.", spantext:"$250 ea."},
    {id:4,icon:<i class='bx  bx-plus'></i> ,text:"Foreign subsidiary",blocktext1:"Form 5471",blocktext2:"IRS requirement for every international sunsidiary owned by the US entity",spantext:"$1,000 ea."},
    {id:5,icon:<i class='bx  bx-plus'></i> ,text:"R&D tax credits",blocktext1:"Form 6765",blocktext2:"IRS offers tax credits that refund ~10% of Research & Development expenses by check. See more at finta.com/credits.", spantext:"5%",spanTextblock:"5% of credits claimed. Minimum $500."},
    {id:6,icon:<i class='bx  bx-plus'></i> ,text:"Form 1099s",blocktext1:"Form 1099s",blocktext2:"IRS requirement for contractor, legal, and rent payments made for greater than $600 in prior year.", spantext:"$10 ea."}
   

  ]

  const[normal,setNormal]=useState(0)

  return (
    <Container>

      <div className='flex flex-col items-center justify-center my-30'>

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

        <div className='mt-8  sm:block w-full overflow-hidden'>
          <motion.div
          animate={{x:normal === 0 ? 0:"-50%"}}
          transition={{type:"spring",stiffness:120,damping:20}}
          className='flex w-[200%] items-start'>

            <div className='w-1/2 shrink-0 p-4 '>
              <div className='container pb-6 lg:pt-4 lg:pb-20'>
                <div className='mx-auto '>
                  <div className='mx-auto flex flex-col items-start gap-3 w-full p-5 rounded-xl bg-white dark:bg-neutral-400 ring-1 ring-black/10 ring-inset shadow-weird sm:max-w-121 sm:p-6 sm:gap-3 '>
                    <div className='flex flex-col items-start gap-2.5 self-stretch'>

                      <h3>Taxes</h3>

                      <div className='flex w-full justify-between items-center self-stretch gap-40'>

                        <div className='flex items-center gap-3'>
                          <i className='bx bx-check text-blue-600'></i> 

                          <button className='relative inline-flex cursor-help focus:outline-none group'>

                            <span className='whitespace-nowrap text-[16px] text-neutral-700 font-semibold underline underline-offset-2 decoration-2 decoration-dotted decoration-neutral-400 '>
                              Federal income Tax

                            </span>

                            <div className='absolute left-1/2 -translate-x-1/2 bottom-full mb-1 z-50 pointer-events-none hidden group-hover:block group-focus:block transition-all duration-200 ease-out opacity-0 group-hover:opacity-100 group-focus:opacity-100 translate-y-1 group-hover:translate-y-0 '>
                              <div className='w-max rounded-lg bg-[#333741] px-2 py-1.5 shadow-soft flex flex-col'>
                                <div className='flex flex-col gap-0.5 '>
                                  <div className='w-full leading-4 font-medium text-sec text-neutral-200'>
                                    Form 1120
                                  </div>
                                  <div className='w-full max-w-60 leading-4 font-medium text-[13px] text-neutral-300'>
                                    IRS requirement for C-Corporations.
                                  </div>
                                </div>
                              </div>

                            </div>
                          </button>

                        </div>
                          
                        <div className='text-neutral-700  text-[32px] font-semibold'>$500</div>

                      </div>

                      <div className='h-px w-full bg-black/5'></div>

                      <div className='flex flex-col items-start gap-8 self-stretch'>
                        <div className='flex flex-col items-start gap-4 self-stretch'> 
                          <h4 className=''>Add-ons:</h4>

                          {
                            dataApi.map((items,index)=>(
                              <div className='flex w-full justify-between items-center self-stretch gap-40' key={items.id}>
                                <div className='flex w-50 items-center gap-3' >

                                  <h2>{items.icon}</h2>

                                  <button className='relative inline-flex cursor-help focus:outline-none group'>

                            <span className='whitespace-nowrap text-[16px] text-neutral-700 underline underline-offset-2 decoration-2 decoration-dotted decoration-neutral-400'>
                              {items.text}

                            </span>

                            <div className='absolute left-1/2 -translate-x-1/2 bottom-full mb-1 z-50 pointer-events-none hidden group-hover:block'>
                              <div className='w-max rounded-lg bg-[#333741] px-2 py-1.5 shadow-soft flex flex-col'>
                                <div className='flex flex-col gap-0.5 '>
                                  <div className='w-full leading-4 font-medium text-sec text-neutral-200'>
                                    {items.blocktext1}
                                  </div>
                                  <div className='w-full max-w-60 leading-4 font-medium text-[13px] text-neutral-300'>
                                    {items.blocktext2}
                                  </div>
                                </div>
                              </div>

                            </div>
                          </button>

                                </div>
                        <div className='text-neutral-700  text-sm font-semibold  spacing-'>{items.spantext}</div>

                         
                        </div>

                            ))
                          }

                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className='w-1/2 shrink-0 p-4'>
              <div className='container pb-6 lg:pt-4 lg:pb-20'>
                <div className='grid gap-y-4 lg:grid-cols-10 lg=:gap-x-8'>
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