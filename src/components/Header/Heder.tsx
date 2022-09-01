import './Header.css'

import photo from '../../img/photo.jpeg'

import HeaderLogin from './HeaderLogIn/HeaderLogin'

const Heder = () => {
  return (
    <div>
      <div className="pay">
        <img src={photo} alt="face" className="face" />
        <p className="pay__text">
          пром<span className="pay__text-green">Оплата</span> - безпечна оплата карткою на Промі
        </p>
        <button className="pay__btn">Детальніше</button>
      </div>
      <HeaderLogin />
    </div>
  )
}

export default Heder
