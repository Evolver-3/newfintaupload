import React from 'react'

const CustomBlock = ({icon,text,underlineExist=true,spanAvailable=true,spanText1,spanText2,className=""}) => {

  const underliner=
    underlineExist ?"underline underline-offset-2 decoration-2 decoration-dotted decoration-neutral-400":" ";
  
  return (
    <div >
      <div className='flex md:items-start gap-4 md:gap-2'>
        {icon &&(
          <h2 className='text-blue-600'>{icon}</h2>
        )}

        {text &&  (
          <button className={`relative text-[14px] font-medium text-neutral-600  group ${underliner} ${className}`}>
            {text}

            {spanAvailable &&(
                <div className='absolute left-1/2 -translate-x-1/2 bottom-full mb-1 z-50 pointer-events-none hidden group-hover:block'>
                  <div className='w-max rounded-lg bg-[#333741] px-2 py-1.5 shadow-soft flex flex-col'>
                                <div className='flex flex-col gap-0.5 '>
                                  <div className='w-full leading-4 font-medium text-sec text-neutral-200'>
                                    {spanText1}
                                  </div>
                                  <div className='w-full max-w-60 leading-4 font-medium text-[13px] text-neutral-300'>
                                    {spanText2}
                                  </div>
                                </div>
                  </div>
                </div>
            )}

          </button>
        )}
      </div>

    </div>
  )
}

export default CustomBlock