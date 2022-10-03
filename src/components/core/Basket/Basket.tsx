import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'

import './Basket.css'
import { BasketItem } from '../BasketItem/BasketItem'
import arrLeft from '../../../assets/img/arrow-left.png'
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks'
import { getOrder } from '../../../store/basketSlice'

type BasketProps = {
  basketOpen: boolean
  setBasketOpen: (basketOpen: boolean) => void
}

const modalBAsket: any = document.getElementById('modalBasket')

export const Basket: FC<BasketProps> = ({ basketOpen, setBasketOpen }) => {
  const { items } = useAppSelector((state) => state.basket)
  const { t } = useTranslation()
  const { isAuthBool, register } = useAppSelector((state) => state.auth)
  const idUser = useAppSelector((state) => state.auth.users.id)
  const dispatch = useAppDispatch()
  const total = items.reduce((sum, item) => {
    return item.price * item.count + sum
  }, 0)

  useEffect(() => {
    dispatch(getOrder(idUser))
  }, [dispatch])

  basketOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'scroll')
  if (basketOpen && (isAuthBool || register)) {
    return createPortal(
      <>
        <div className="basket-wrapper" onClick={() => setBasketOpen(!basketOpen)}></div>
        <div className="basket__modal" onClick={(e) => e.stopPropagation()}>
          <div className="basket__header">
            <img
              src={arrLeft}
              alt="basket-arr"
              className="basket-img__header"
              onClick={() => setBasketOpen(!basketOpen)}
            />
            <span className="basket__header-text">{t('basket.basket__header')}</span>
          </div>
          {items.length === 0 ? (
            <div className="basket__main">
              <h3 className="basket__main-h3">{t('basket.basket-h3')}</h3>
              <p className="basket__main-p">
                {t('basket.basket-p')}
                <br />
                {t('basket.basket-p1')}
              </p>
              <button className="basket-btn" onClick={() => setBasketOpen(!basketOpen)}>
                {t('basket.basket-btn')}
              </button>
            </div>
          ) : (
            <div className="basket__main">
              {items.map((item) => (
                <BasketItem key={item.id} {...item} />
              ))}
              <div className="puy-oder">
                <div className="puy-oder-group">
                  <div className="puy-oder-text">{t('basket.basket-pay__order')}</div>{' '}
                  <div className="puy-oder-text">{total} грн.</div>
                </div>
                <button className="btn-puy-oder">{t('basket.basket-pay__order-btn')}</button>
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
        <div className="basket__modal" onClick={(e) => e.stopPropagation()}>
          <div className="basket__header">
            <img
              src={arrLeft}
              alt="basket-arr"
              className="basket-img__header"
              onClick={() => setBasketOpen(!basketOpen)}
            />
            <span className="basket__header-text">{t('basket.basket__header')}</span>
          </div>
          <div className="basket__main">
            <h2 className="basket__main-h3"> {t('basket.basket-h3-register')}</h2>
            <button className="basket-btn" onClick={() => setBasketOpen(!basketOpen)}>
              {t('basket.basket-btn-register')}
            </button>
          </div>
        </div>
      </>,
      modalBAsket
    )
  }
  return null
}
