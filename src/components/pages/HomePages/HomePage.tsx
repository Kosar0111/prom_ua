import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '../../core/Header/Heder'
import { Footer } from '../../core/Footer/Footer'
import { HeaderSearch } from '../../core/HeaderSearch/HeaderSearch'

export const HomePage: FC = () => {
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
