import React from 'react'
import ButtonClickAnimation from '../../ButtonClickAnimation'
import InnerCard2 from './InnerCard2'

const CardFour = () => {
  return (
    <ButtonClickAnimation heading={"Smart Suggestions"} text={"For transactions that we can't auto-categorize accurately, you get intelligent suggestions."} logo={""}>
      <InnerCard2 />
    </ButtonClickAnimation>
  )
}

export default CardFour