import './Salesman.css'
import { NavLink } from 'react-router-dom'

export const Salesman = () => {
  return (
    <div>
      <p className="buyer-title">Продавцям</p>
      <div className="buyer-link">
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Довідка для продавців</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Як почати продавати на prom.ua</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Тарифи</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Доступ та просування в каталозі Prosale</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Угода користувача</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Політика конфіденційності</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Правила користування порталом</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Інструкція Google Ads</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>
            Бонусна програма електронний маркетплейс <br />
            PROM
          </NavLink>
        </div>
      </div>
    </div>
  )
}
