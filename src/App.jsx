import React from 'react'
import Lay from './finta/Lay'
import Testimonial from './finta/Testimonial'

import Datapage from './finta/Data/Datapage'
import Footer from './finta/Footer'
import Pricing from './finta/PricingSection/Pricing'

import AccountingCard from './finta/Accounting/AccountingCard'
import Finance from './finta/FinancePage/Finance'




const App = () => {
  return (
    <div className='bg-background'>
      <Lay/>
      <Testimonial/>
      <Datapage/>
      <AccountingCard/>
      <Finance/>
      <Pricing/>
      <Footer/>
      
      
     


      
    </div>
  )
}

export default App