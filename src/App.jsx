import Lay from "./finta/FrontPage/Lay";
import Testimonial from './finta/TestimonialPage/Testimonial'
import Datapage from "./finta/Data/Datapage";
import AccountingCard from './finta/Accounting/AccountingCard';
import Finance from './finta/FinancePage/Finance'
import Pricing from './finta/PricingSection/Pricing'
import Footer from './finta/Footer'


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