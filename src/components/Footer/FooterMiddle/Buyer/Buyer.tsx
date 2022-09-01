import './Buyer.css'
import { NavLink } from 'react-router-dom'

const Buyer: React.FC = () => {
  return (
    <div>
      <p className="buyer-title">Покупцям</p>
      <div className="buyer-link">
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Довідка для покупців</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Отримати підтримку</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Як купувати на prom.ua</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Як залишити корисний відгук</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Рекомендації з безпечних покупок</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>
            Перевірка на приналежність сайту до
            <br /> платформи prom.ua
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Buyer
