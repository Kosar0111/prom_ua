import { FC } from 'react'
import { Link } from 'react-router-dom'
import './CabinetByerNavBar.css'

export const CabinetByerNavBar: FC = () => {
  return (
    <div className="navbar-list">
      <div className="navbar-list__item">
        <Link to="possibilitis">Можливості покупця</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="wants">Бажане</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="messages">Повідомлення</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="order">Замовлення</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="reviews">Відгуки</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="setting">Налаштування профілю</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="wallet">Мій гаманець</Link>
      </div>
    </div>
  )
}
