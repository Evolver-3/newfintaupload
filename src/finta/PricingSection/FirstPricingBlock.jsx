import React from 'react'

 const dataApi=[
    {id:1,icon:<i className='bx bx-check text-blue-600'></i> ,text:"Delaware franchise tax",blocktext1:"Delaware annual report and franchise",blocktext2:"Finta assista with processing the payment.", spantext:"Included"},
    {id:2,icon:<i class='bx  bx-plus'></i> ,text:"State income tax",blocktext1:"Required for states you have presence in ",blocktext2:"States with offices or salaried employees. Not required for Delaware if you only incorporate there.", spantext:"$150 ea."},
    {id:3,icon:<i class='bx  bx-plus'></i> ,text:"Foreign founders",blocktext1:"Form 5472",blocktext2:"IRS requirement for every non US tax-resident shareholder that owns greater than 25%.", spantext:"$250 ea."},
    {id:4,icon:<i class='bx  bx-plus'></i> ,text:"Foreign subsidiary",blocktext1:"Form 5471",blocktext2:"IRS requirement for every international sunsidiary owned by the US entity",spantext:"$1,000 ea."},
    {id:5,icon:<i class='bx  bx-plus'></i> ,text:"R&D tax credits",blocktext1:"Form 6765",blocktext2:"IRS offers tax credits that refund ~10% of Research & Development expenses by check. See more at finta.com/credits.", spantext:"5%",spanTextblock:"5% of credits claimed. Minimum $500."},
    {id:6,icon:<i class='bx  bx-plus'></i> ,text:"Form 1099s",blocktext1:"Form 1099s",blocktext2:"IRS requirement for contractor, legal, and rent payments made for greater than $600 in prior year.", spantext:"$10 ea."}
   

  ]

const FirstPricingBlock = () => {
  return (
    
    <div className=' pb-6 lg:pt-4  '>
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

                            <span className='whitespace-nowrap text-[16px] text-neutral-700 underline underline-offset-2 decoration-2 decoration-dotted decoration-neutral-500'>
                              {items.text}

                            </span>

                            <div className='absolute -left-1/3 bottom-full mb-1 z-50 pointer-events-none hidden group-hover:block'>
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
  )
}

export default FirstPricingBlock