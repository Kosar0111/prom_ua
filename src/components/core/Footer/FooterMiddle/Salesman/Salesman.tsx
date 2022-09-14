import './Salesman.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../../../../helpers/i18next'

export const Salesman = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p className="buyer-title">{t('salesman.buyer-title')}</p>
      <div className="buyer-link">
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('salesman.buyer')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('salesman.buyer-sale')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('salesman.buyer-traf')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('salesman.buyer-acces')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('salesman.buyer-user')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('salesman.buyer-polit')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('salesman.buyer-rules')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('salesman.buyer-google')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>
            {t('salesman.buyer-bonus')} <br />
            PROM
          </Link>
        </div>
      </div>
    </div>
  )
}
