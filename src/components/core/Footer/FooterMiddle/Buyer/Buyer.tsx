import './Buyer.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../../../../helpers/i18next'

export const Buyer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p className="buyer-title">{t('buyer.buyer-title')}</p>
      <div className="buyer-link">
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('buyer.buyer-paper')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('buyer.buyer-support')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('buyer.buyer-how')} на prom.ua</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('buyer.buyer-back')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('buyer.buyer-recomend')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>
            {t('buyer.buyer-check')}
            <br /> {t('buyer.buyer-check1')} prom.ua
          </Link>
        </div>
      </div>
    </div>
  )
}
