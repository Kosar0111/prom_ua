import React from 'react'

import { Header } from '../../core/Header/Heder'
import { Footer } from '../../core/Footer/Footer'
import { HeaderSearch } from '../../core/HeaderSearch/HeaderSaerch'
import { CabinetCompany } from '../../core/CabinetCompany/CabinetCompany'
import { Chat } from '../../core/Chat/Chat'
import { CategoryOfGoods } from '../../core/CategoryOfGoods/CategoryOfGoods'
import { NavBarSlider } from '../../core/NavBarSlider/NavBarSlider'

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeaderSearch />
      <NavBarSlider />
      <CategoryOfGoods />
      <CabinetCompany />
      <Chat />
      <Footer />
    </>
  )
}

export default HomePage
