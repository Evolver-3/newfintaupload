import React from 'react'
import ButtonClickAnimation from '../../CustomComponent/ButtonClickAnimation'
import InnerCard from './InnerCard'

const CardFour = () => {
  return (
    <ButtonClickAnimation heading={"Auto-categorization"} text={"Transactions are automatically categorized and reconciled accurately in real-time."} logo={""}>
      <InnerCard />
    </ButtonClickAnimation>
  )
}

export default CardFour