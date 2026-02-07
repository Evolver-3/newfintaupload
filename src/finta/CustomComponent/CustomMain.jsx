

const CustomMain = ({children,headBody,headSpan,text,personText,personName,personPosition}) => {
  return (
    <div className='flex flex-col items-center justify-center text-foreground'>
           <h2 class="text-2xl sm:text-3xl lg:text-4xl font-medium text-center tracking-tight mb-6">
           {headBody}
            <strong class="text-blue-500 font-medium">{headSpan}</strong>
          </h2>
    
          <p className='max-w-150 text-center text-sm text-neutral-800 dark:text-neutral-50'>{text}</p>
    
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-8 '>
           {children}
            
          </div>
          <div className='flex flex-col my-20 gap-10'>
            <h2 className='text-2xl lg:text-3xl border-spacing-0.5 font-extrlight max-w-180'>{personText}</h2>
    
            <div className='flex gap-5'>
              <div className='h-10 w-10 rounded-full bg-amber-400'></div>
              <div className='flex flex-col'>
                
                <h2 className="text-[14px] text-neutral-700 dark:text-neutral-200 font-semibold">{personName}</h2>
                <h3 className="text-neutral-500 font-semibold text-xs ">{personPosition}</h3>
              </div>
            </div>
          </div>
          </div>
  )
}

export default CustomMain