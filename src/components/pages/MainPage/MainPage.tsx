import React, { FC } from 'react'

import { CabinetCompany } from '../../core/CabinetCompany/CabinetCompany'
import { Chat } from '../../core/Chat/Chat'
import { CategoryOfGoods } from '../../core/CategoryOfGoods/CategoryOfGoods'
import { NavBarSlider } from '../../core/NavBarSlider/NavBarSlider'

export const MainPage: FC = () => {
  return (
    <div>
      <NavBarSlider />
      <CategoryOfGoods />
      <CabinetCompany />
      <Chat />
    </div>
  )
}
