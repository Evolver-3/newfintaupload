
import Cardo from './Cardo'
import Container from '../CustomComponent/Container'
import FintaChat from './ChatAnimation/FintaChat'
import NormalCardContain from '../CustomComponent/NormalCardContain'
import CustomMain from '../CustomComponent/CustomMain'
import Card4 from './Card4'

const Datapage = () => {


 return (
    <Container>
      <CustomMain headBody={"Tax season with "} headSpan={"zero stress"} text={"Expert tax prep, filing, and dedicated support for year-round peace of mind."} personText={"“Finta filed our taxes and claimed $17,016 in credits. The process was easy with responsive support!”"} personName={"Alex Danilowicz"} personPosition={"Co-founder at Magic Patterns"}>
          <NormalCardContain heading={"ALL FILING HANDLED"} text={"Finta’s experts handle all your filing and compliance needs accurately and on time."}>
        <Cardo/>
       </NormalCardContain>

       <NormalCardContain heading={"CLAIM R&D TAX CREDITS"} text={"Finta’s experts help you maximize R&D tax credits and get money back from the IRS."}>
       <img src='card.webp' />
       </NormalCardContain>

       <NormalCardContain heading={"LIVE CHAT"} text={"Get quick, accurate, and personalized answers from Finta’s experts to all your questions."} >
        <FintaChat/>
       </NormalCardContain>

       <NormalCardContain heading={"EXPERTISE & GUIDANCE"} text={"Dedicated Slack channel for expert guidance on IRS notices, compliance letters, and more."} >
        <Card4/>
       </NormalCardContain>
       
      </CustomMain>
    </Container>
  )
}

export default Datapage

