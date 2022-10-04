import styles from './style';

import { Navbar, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, Hero, } from './components';


const App = () =>(
  <div className='bg-primary w-full overflow-hidden text-white'>
    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>

    </div>

    <div className ={`bg-primary ${styles.paddingX} ${styles.flexStart} `}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <CardDeal />
        <Business />
        <Clients />
        <CTA />
        <Stats />
        <Footer />
        <Testimonials />
        <Hero />
      </div>
    </div>
  </div>
)


export default App
