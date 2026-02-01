
import Cardo from './Cardo'
import Container from '../Container'
import FintaChat from '../ChatAnimation/FintaChat'
import NormalCardContain from '../NormalCardContain'

const Datapage = () => {


 return (
    <Container>
      <div className='flex flex-col items-center justify-center'>
       <h2 class="text-2xl sm:text-3xl lg:text-4xl font-medium text-center tracking-tight mb-6">
       Real-time 
        <strong class="text-blue-500 font-medium"> financial clarity</strong>
      </h2>

      <p className='max-w-150 text-center text-sm text-neutral-800'>Real-time dashboards and Slack alerts so you get answers and avoid surprises.</p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-8 '>
       <NormalCardContain heading={"ALL FILING HANDLED"} text={"Finta’s experts handle all your filing and compliance needs accurately and on time."}>
        <Cardo/>
       </NormalCardContain>

       <NormalCardContain heading={"CLAIM R&D TAX CREDITS"} text={"Finta’s experts help you maximize R&D tax credits and get money back from the IRS."}>
       <img src='card.webp'/>
       </NormalCardContain>

       <NormalCardContain heading={"LIVE CHAT"} text={"Get quick, accurate, and personalized answers from Finta’s experts to all your questions."}>
        <FintaChat/>
       </NormalCardContain>

       <NormalCardContain heading={"EXPERTISE & GUIDANCE"} text={"Dedicated Slack channel for expert guidance on IRS notices, compliance letters, and more."} >
        <div className='h-75'>
          <img src='expertise.webp'/> 
        </div>
       </NormalCardContain>
       
        
      </div>
      <div className='flex flex-col my-20 gap-10'>
        <h2 className='text-2xl lg:text-3xl border-spacing-0.5 font-extrlight max-w-180'>“Finta surfaces the exact numbers we need in real‑time. I can check the dashboard any day of the month, and it's ready.”</h2>

        <div className='flex gap-5'>
          <div className='h-10 w-10 rounded-full bg-amber-400'></div>
          <div className='flex flex-col'>
            
            <h2 className="text-[14px] text-neutral-700 font-semibold">Zeno Goku</h2>
            <h3 className="text-neutral-500  font-semibold text-xs ">Founder of DB Super</h3>
          </div>
        </div>
      </div>

      
      </div>
    </Container>
  )
}

export default Datapage

