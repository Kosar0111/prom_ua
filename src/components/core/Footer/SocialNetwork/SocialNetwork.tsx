import './SocialNetwork.css'
import google from '../../../../assets/img/google.png'
import apple from '../../../../assets/img/apple.png'
import huawei from '../../../../assets/img/alliexpres.png'
import youtube from '../../../../assets/img/youtube.jpeg'
import facebook from '../../../../assets/img/facebook.png'
import insta from '../../../../assets/img/insta.jpeg'
import sun from '../../../../assets/img/sun.png'

export const SocialNetwork = () => {
  return (
    <div className="img-all">
      <div className="img-pay">
        <img src={google} alt="google" className="img-pay__item" />
        <img src={apple} alt="apple" className="img-pay__item" />
        <img src={huawei} alt="huawei" className="img-pay__item" />
      </div>
      <div className="theme__dark">
        <img src={sun} alt="sun" className="sun" />
        <div>
          <span className="swich__on">Темна тема: вимкнена</span>
          <span>Бета-тест</span>
        </div>
      </div>
      <div className="social">
        <img src={youtube} alt="youtube" className="youtube" />
        <img src={facebook} alt="facebook" className="facebook" />
        <img src={insta} alt="insta" className="insta" />
        <span className="copyright">prom.ua, 2008-2022</span>
      </div>
    </div>
  )
}
