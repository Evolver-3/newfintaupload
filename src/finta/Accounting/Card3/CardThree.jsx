import React from 'react'
import ButtonClickAnimation from '../../CustomComponent/ButtonClickAnimation'
import InnerCard3 from './InnerCard3'

const CardFour = () => {
  return (
    <ButtonClickAnimation heading={"Auto-match transactions"} text={"Bank transfers are automatically matched and reconciled accurately in real-time."} logo={""}>
      <InnerCard3 />
    </ButtonClickAnimation>
  )
}

export default CardFour