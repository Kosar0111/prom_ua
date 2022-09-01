import './Footer.css'
import FooterMiddle from './FooterMiddle/FooterMiddle'

import FooterDown from './FooterDown/FooterDown'
import SocialNetwork from './SocialNetwork/SocialNetwork'

const Footer = () => {
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

export default Footer
