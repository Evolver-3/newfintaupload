import React from 'react'
import ButtonClickAnimation from '../../CustomComponent/ButtonClickAnimation'
import InnerCard4 from './InnerCard4'

const CardFour = () => {
  return (
    <ButtonClickAnimation heading={"Automation rules"} text={"Create powerful custom rules to automatically categorize and tag transactions."} logo={""}>
      <InnerCard4 />
    </ButtonClickAnimation>
  )
}

export default CardFour