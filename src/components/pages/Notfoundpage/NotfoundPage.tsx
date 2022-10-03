import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import '../../../helpers/i18next'
import './NotfoundPage.css'

export const NotfoundPage: FC = () => {
  const { t } = useTranslation()
  return (
    <div className="empty-page">
      <h1 className="empty-page-h1">{t('page_not_exist')}</h1>
    </div>
  )
}
