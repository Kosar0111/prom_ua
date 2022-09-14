import React from 'react'
import { useTranslation } from 'react-i18next'
import '../../../helpers/i18next'

import './CabinetCompany.css'
import arrowRight from '../../../assets/img/arrow-right.png'
import house from '../../../assets/img/house.png'

export const CabinetCompany: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="cabinet">
      <div className="cabinet__fqa">
        <div className="cabinet__fqa-wraper">
          <img src={house} alt="house" className="house" />
          <div className="cabinet__fqa-text">
            <p className="cabinet__fqa-text1">{t('cabinet.cabinet__fqa-text1')}</p>
            <p className="cabinet__fqa-text2">{t('cabinet.cabinet__fqa-text2')}</p>
          </div>
        </div>
        <button className="btn__sale">{t('cabinet.btn__sale')}</button>
      </div>
      <div className="cabint__link">
        <div className="cabinet__link-go">
          <img src={arrowRight} alt="arrow__right" className="arrow__right" />
          <span>{t('cabinet.cabint__link')}</span>
        </div>
        <div className="cabinet__link-personal">
          <img src={arrowRight} alt="arrow__right" className="arrow__right" />
          <span>{t('cabinet.cabinet__link-personal')}</span>
        </div>
      </div>
    </div>
  )
}
