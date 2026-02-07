import Container from '../CustomComponent/Container'
import CustomMain from '../CustomComponent/CustomMain'

import CardOne from './Card1/CardOne'
import CardTwo from './Card2/CardTwo'
import CardThree from './Card3/CardThree'
import CardFour from './Card4/CardFour'

const AccountingCard = () => {
  return (
    <Container>
      <CustomMain  headBody={"Accounting on "} headSpan={"autopilot"} text={"Your time as a founder is extremely valuable, don't waste it on emails or data entry. Set accounting on autopilot and replace QuickBooks + manual bookkeepers."} personText={"“I used Quickbooks and bookkeepers but it was slow and clunky. Now Finta saves me time by auto-categorizing our transactions more accurately.”"} personName={"Jacob Bank"} personPosition={"Founder at Relay.app"}>
        <CardOne/>
        <CardTwo/>
        <CardThree/>
        <CardFour/>
      </CustomMain>
    </Container>
  )
}

export default AccountingCard