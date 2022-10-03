import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../../../../helpers/i18next'

export const AboutUs: FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      <p className="buyer-title">Про нас</p>
      <div className="buyer-link">
        <div className="buyer-link__item">
          <Link to="/">Про prom.ua</Link>
        </div>
        <div className="buyer-link__item">
          <Link to="/">{t('about.work')} в prom.ua</Link>
        </div>
        <div className="buyer-link__item">
          <Link to="/">{t('about.paper')} FAQ</Link>
        </div>
        <div className="buyer-link__item">
          <Link to="/">{t('about.contact')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to="/">{t('about.content')}</Link>
        </div>
        <div className="buyer-link__item">
          <Link to="/">Content legality protection</Link>
        </div>
      </div>
    </div>
  )
}
