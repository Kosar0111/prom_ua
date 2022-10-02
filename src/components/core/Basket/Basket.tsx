import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { BasketItem } from '../BasketItem/BasketItem'

import arrLeft from '../../../assets/img/arrow-left.png'
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks'
import './Basket.css'
import { getOrder } from '../../../store/basketSlice'

type BasketProps = {
  basketOpen: boolean
  setBasketOpen: (basketOpen: boolean) => void
}

const modalBAsket: any = document.getElementById('modalBasket')

export const Basket: FC<BasketProps> = ({ basketOpen, setBasketOpen }) => {
  const { items } = useAppSelector(state => state.basket)

  const { isAuthBool, register } = useAppSelector(state => state.auth)
  const idUser = useAppSelector(state => state.auth.users.id)
  const dispatch = useAppDispatch()
  const total = items.reduce((sum, item) => {
    return item.price * item.count + sum
  }, 0)

  useEffect(() => {
    dispatch(getOrder(idUser))
  }, [idUser, dispatch, items])

  basketOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'scroll')
  if (basketOpen && (isAuthBool || register)) {
    return createPortal(
      <>
        <div className="basket-wrapper" onClick={() => setBasketOpen(!basketOpen)}></div>
        <div className="basket__modal" onClick={e => e.stopPropagation()}>
          <div className="basket__header">
            <img
              src={arrLeft}
              alt="basket-arr"
              className="basket-img__header"
              onClick={() => setBasketOpen(!basketOpen)}
            />
            <span className="basket__header-text">Кошик</span>
          </div>
          {items.length === 0 ? (
            <div className="basket__main">
              <h3 className="basket__main-h3">В кошику немає товарів</h3>
              <p className="basket__main-p">
                У вас гарний смак.
                <br />А у нас багато цікавих та потрібних речей.
              </p>
              <button className="basket-btn" onClick={() => setBasketOpen(!basketOpen)}>
                За покупками
              </button>
            </div>
          ) : (
            <div className="basket__main">
              {items.map(item => (
                <BasketItem key={item.id} {...item} />
              ))}
              <div className="puy-oder">
                <div className="puy-oder-group">
                  <div className="puy-oder-text">До оплати без доставки:</div>{' '}
                  <div className="puy-oder-text">{total}</div>
                </div>
                <button className="btn-puy-oder">Оформити замовлення</button>
              </div>
            </div>
          )}
        </div>
      </>,
      modalBAsket
    )
  } else if (basketOpen && (!isAuthBool || !register)) {
    return createPortal(
      <>
        <div className="basket-wrapper" onClick={() => setBasketOpen(!basketOpen)}></div>
        <div className="basket__modal" onClick={e => e.stopPropagation()}>
          <div className="basket__header">
            <img
              src={arrLeft}
              alt="basket-arr"
              className="basket-img__header"
              onClick={() => setBasketOpen(!basketOpen)}
            />
            <span className="basket__header-text">Кошик</span>
          </div>
          <div className="basket__main">
            <h2 className="basket__main-h3"> Ви ще не зареєструвалися</h2>
            <button className="basket-btn" onClick={() => setBasketOpen(!basketOpen)}>
              Назад на головну
            </button>
          </div>
        </div>
      </>,
      modalBAsket
    )
  }
  return null
}
