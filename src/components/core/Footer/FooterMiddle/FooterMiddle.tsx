import React from 'react'

import { AboutUs } from './AboutUs/AboutUs'
import { Buyer } from './Buyer/Buyer'
import { Partners } from './Partners/Partners'
import { Salesman } from './Salesman/Salesman'
import './FooterMiddle.css'

export const FooterMiddle: React.FC = () => {
  return (
    <div className="footer-middle">
      <div className="buyer">
        <Buyer />
      </div>
      <div className="salesman">
        <Salesman />
      </div>
      <div className="about-us">
        <AboutUs />
      </div>
      <div className="partners">
        <Partners />
      </div>
    </div>
  )
}
