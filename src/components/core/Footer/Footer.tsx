import { FC } from 'react'

import './Footer.css'
import { FooterMiddle } from './FooterMiddle/FooterMiddle'
import { FooterDown } from './FooterDown/FooterDown'
import { SocialNetwork } from './SocialNetwork/SocialNetwork'

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer__restrict">
        <FooterMiddle />
        <SocialNetwork />
      </div>
      <FooterDown />
    </div>
  )
}
