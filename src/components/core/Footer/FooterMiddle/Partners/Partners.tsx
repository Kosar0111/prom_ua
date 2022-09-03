import './Partners.css'
import { NavLink } from 'react-router-dom'

export const Partners: React.FC = () => {
  return (
    <div>
      <p className="buyer-title">Партнери</p>
      <div className="buyer-link">
        <div className="buyer-link__item">
          <NavLink to={'!#'}>EVO.business</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Kabanchik.ua</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Вчасно</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Crafta.ua</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Zakupki.prom.ua</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Shafa</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>IZI.ua</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Тури на Rozetka Travel</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Bigl.ua</NavLink>
        </div>
        <div className="buyer-link__item">
          <NavLink to={'!#'}>Офіційні дилери prom.ua</NavLink>
        </div>
      </div>
    </div>
  )
}
