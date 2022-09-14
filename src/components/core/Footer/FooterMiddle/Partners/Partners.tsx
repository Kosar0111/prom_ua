import './Partners.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../../../../helpers/i18next'

export const Partners: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p className="buyer-title">{t('partner.partner-title')}</p>
      <div className="buyer-link">
        <div className="buyer-link__item">
          <Link to={'!#'}>EVO.business</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>Kabanchik.ua</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('partner.partner-ontime')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>Crafta.ua</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>Zakupki.prom.ua</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>Shafa</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>IZI.ua</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>Тури на Rozetka Travel</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>Bigl.ua</Link>
        </div>
        <div className="buyer-link__item">
          <Link to={'!#'}>{t('partner.partner-diler')} prom.ua</Link>
        </div>
      </div>
    </div>
  )
}
