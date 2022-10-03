import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const CabinetSalesManNavBar: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="navbar-list">
      <div className="navbar-list__item">
        <Link to="sales">{t('cabinetSales.sales')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="company">{t('cabinetSales.company')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="messages-sales">{t('cabinetSales.messages-sales')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="order-sales">{t('cabinetSales.order-sales')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="reviews-sales">{t('cabinetSales.reviews-sales')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="add-goods">{t('cabinetSales.add-goods')}</Link>
      </div>
      <div className="navbar-list__item">
        <Link to="wallet-company">{t('cabinetSales.wallet-company')}</Link>
      </div>
    </div>
  )
}
