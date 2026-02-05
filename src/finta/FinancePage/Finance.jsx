import Container from '../Container'
import React from 'react'
import CardFin1 from './CardFin1'
import CardFin2 from './CardFin2'
import CardFin3 from './CardFin3'
import CardFin4 from './CardFin4'
import CustomMain from '../CustomMain'


const Finance= () => {
  return (
    <Container>
     <CustomMain headBody={"Real-time "} headSpan={"financial clarity"} text={"Real-time dashboards and Slack alerts so you get answers and avoid surprises."} personText={"“Finta surfaces the exact numbers we need in real‑time. I can check the dashboard any day of the month, and it's ready.”"} personName={"Zeno Rocha"} personPosition={"Co-founder at Resend"}>
        <CardFin1/>
        <CardFin2/>
        <CardFin3/>
        <CardFin4/>
     </CustomMain>
    </Container>
  )
}

export default Finance