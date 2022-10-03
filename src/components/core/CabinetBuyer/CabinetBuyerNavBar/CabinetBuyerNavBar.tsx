import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './CabinetBuyerNavBar.css'

export const CabinetBuyerNavBar: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="navbar-list">
      <div className="navbar-list__item">
        <Link to="possibilitis">{t('cabinetBuyer.possibilitis')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="wants">{t('cabinetBuyer.wants')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="messages">{t('cabinetBuyer.messages')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="order">{t('cabinetBuyer.order')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="reviews">{t('cabinetBuyer.reviews')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="setting">{t('cabinetBuyer.setting')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="wallet">{t('cabinetBuyer.wallet')}</Link>
      </div>
    </div>
  )
}
