import './FooterDown.css'
import { useTranslation } from 'react-i18next'
import '../../../../helpers/i18next'

export const FooterDown = () => {
  const { t } = useTranslation()
  return (
    <div className="footer-down">
      <p className="footer-down__text">
        {t('footer-down.footer-down__text')} <br /> {t('footer-down.footer-down__text1')}
      </p>
      <button className="footer-down__btn"> {t('footer-down.footer-down__btn')} </button>
    </div>
  )
}
