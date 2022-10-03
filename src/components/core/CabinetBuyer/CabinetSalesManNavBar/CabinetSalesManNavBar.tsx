import { FC } from 'react'
import { Link } from 'react-router-dom'

export const CabinetSalesManNavBar: FC = () => {
  return (
    <div className="navbar-list">
      <div className="navbar-list__item">
        <Link to="sales">Можливості продавця</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="company">Створити кабінет компанії</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="messages-sales">Повідомлення від покупців</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="order-sales">Замовлення</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="reviews-sales">Відгуки</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="add-goods">Додати товар</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="wallet-company">Мій рахунок компанії</Link>
      </div>
    </div>
  )
}
