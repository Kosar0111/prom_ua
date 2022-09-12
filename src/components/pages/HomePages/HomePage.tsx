import React from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../core/Header/Heder'
import { Footer } from '../../core/Footer/Footer'
import { HeaderSearch } from '../../core/HeaderSearch/HeaderSaerch'

export const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <HeaderSearch />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomePage
