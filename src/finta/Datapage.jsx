
import Cardo from './Cardo'
import Container from './Container'
import FintaChat from './ChatAnimation/FintaChat'

const Datapage = () => {




  return (<>
  <Container>
    <div className='flex flex-col items-center justify-center mt-10'>

      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-medium text-center tracking-wide">
       Tax season with
        <strong class="text-blue-500 font-medium"> zero stress </strong>
      </h2>
      <p className='text-sm text-neutral-600'>Expert tax prep, filing, and dedicated support for year-round peace of mind.</p>

      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 mx-auto'>

        <div className='max-w-2xl mt-16'>


        <div className='flex flex-col items-center justify-center gap-5 '>

            <Cardo/>
       
          <h3 className='text-first text-blue-600 font-bold'>ALL FILING HANDLED</h3>

          <p className='text-[14px] text-neutral-800 text-center max-w-2xs'>Finta's experts handle all your filing and compliance needs accurately and on time.</p>
          </div>

        </div>

        <div className='max-w-2xl  '>
          <img src='/card.webp'/>

          <div className='flex flex-col items-center justify-center gap-4 '>

          <h3 className='text-first text-blue-600 font-bold'>CLAIM R&D TAX CREDITS</h3>

          <p className='text-[14px] text-neutral-800 text-center max-w-2xs '>Finta's experts help you maximize R&D tax credits and get money back from the IRS.</p>
          </div>

        </div>
      </div>

      </div>

    <div className='flex flex-col items-center justify-center mt-20'>

      <div className='grid md:grid-cols-2 grid-cols-1 md:gap-10 '>

        <div className='mx-auto'>

        <div className='w-full'>


        <FintaChat/>

         <div className='flex flex-col items-center justify-center gap-3 mt-28'>

            <div className='text-[13px] text-blue-600 font-bold flex items-center gap-3'>
              <i className='bx  bx-message-bubble-reply'></i> 
              <h2>LIVE CHAT</h2>
            </div>

            <p className='text-center text-sm max-w-80'>Get quick, accurate, and personalized answers from Finta's experts to all your questions.</p>

          </div>

        </div>

        </div>

        
        <div className='max-w-2xl '>

          <img src='/expertise.webp' className=''/>

          <div className='flex flex-col items-center justify-center gap-3'>

            <div className='text-[13px] text-blue-600 font-bold flex items-center gap-3'>
              <i className='bx  bx-message-bubble-reply'></i> 
              <h2>EXPERTISE & GUIDANCE</h2>
            </div>

            <p className='text-center text-sm max-w-2xs'>Dedicated Slack channel for expert guidance on IRS notices, compliance letters, and more.</p>

          </div>
        </div>

      </div>

      <div className='flex flex-col my-20 gap-10'>
        <h2 className='text-2xl lg:text-3xl border-spacing-0.5 font-extrlight max-w-180'>“Finta filed our taxes and claimed $17,016 in credits. The process was easy with responsive support!”</h2>

        <div className='flex gap-5'>
          <div className='h-10 w-10 rounded-full bg-lime-400'></div>
          <div className='flex flex-col'>
            
            <h2 className="text-[14px] text-neutral-700 font-semibold">Deniss Liect</h2>
            <h3 className="text-neutral-500  font-semibold text-xs ">Founder of Destiny</h3>
          </div>
        </div>
      </div>
    </div>
    </Container>
    </>
  )
}

export default Datapage

