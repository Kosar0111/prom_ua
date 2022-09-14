import './CreateStore.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import '../../../../helpers/i18next'

export const CreateStore: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className="create__store">
      <div className="create__store-text">
        {t('store.create__store')} <br />
        {t('store.create__store1')}
      </div>
      <Link to="!#" className="create__store-btn">
        {t('store.create__store-btn')}
      </Link>
    </div>
  )
}
