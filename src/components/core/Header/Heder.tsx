import { useTranslation } from 'react-i18next'
import '../../../helpers/i18next'
import './Header.css'

import photo from '../../../assets/img/photo.jpeg'

import { HeaderLogin } from './HeaderLogIn/HeaderLogin'

export const Header = () => {
  const { t } = useTranslation()
  return (
    <div>
      <div className="pay">
        <img src={photo} alt="face" className="face" />
        <p className="pay__text">
          пром<span className="pay__text-green">Оплата</span> - {t('header.pay__text-green')}
        </p>
        <button className="pay__btn">{t('header.pay__btn')}</button>
      </div>
      <HeaderLogin />
    </div>
  )
}
