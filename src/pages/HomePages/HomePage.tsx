import React from 'react'

import Header from '../../components/Header/Heder'
import Footer from '../../components/Footer/Footer'
import HeaderSearch from '../../components/HeaderSearch/HeaderSaerch'
import CabinetCompany from '../../components/CabinetCompany/CabinetCompany'
import Chat from '../../components/Chat/Chat'
import CategoryOfGoods from '../../components/CategoryOfGoods/CategoryOfGoods'
import NavBarSlider from '../../components/NavBarSlider/NavBarSlider'

const HomePage: React.FC = () => {
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
