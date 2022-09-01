import React from 'react'

import './CabinetCompany.css'
import arrowRight from '../../img/arrow-right.png'
import house from '../../img/house.png'

const CabinetCompany: React.FC = () => {
  return (
    <div className="cabinet">
      <div className="cabinet__fqa">
        <div className="cabinet__fqa-wraper">
          <img src={house} alt="house" className="house" />
          <div className="cabinet__fqa-text">
            <p className="cabinet__fqa-text1">Хочеш продавати на prom.ua?</p>
            <p className="cabinet__fqa-text2">Якщо у вас є бізнес - створюйте компанию</p>
          </div>
        </div>
        <button className="btn__sale">Почати продавати на prom.ua</button>
      </div>
      <div className="cabint__link">
        <div className="cabinet__link-go">
          <img src={arrowRight} alt="arrow__right" className="arrow__right" />
          <span>Перейти в кабінет компанії</span>
        </div>
        <div className="cabinet__link-personal">
          <img src={arrowRight} alt="arrow__right" className="arrow__right" />
          <span>Перейти в щсщбистий кабінет</span>
        </div>
      </div>
    </div>
  )
}

export default CabinetCompany
