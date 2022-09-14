import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useAppDispatch } from './hooks/hooks'

import './App.css'
import { HomePage } from './components/pages/HomePages/HomePage'
import { isAuth } from './store/authSlice'
import { MainPage } from './components/pages/MainPage/MainPage'
import { CabinetByer } from './components/core/CabinetByer/CabinetByer'
import { CabinetSalesMan } from './components/core/CabinetSalesMan/CabinetSalesMan'
import { NotfoundPage } from './components/pages/Notfoundpage/NotfoundPage'
import { MainNavBar } from './components/pages/MainNavBar/MainNavBar'
import { SalesNavBar } from './components/pages/SalesNavBar/SalesNavBar'

export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (document.cookie !== 'name=') {
      dispatch(isAuth(document.cookie))
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<MainPage />} />
          <Route path="user-byer-cabinet/*" element={<CabinetByer />}>
            <Route index element={<MainNavBar />} />
            <Route path="possibilitis" element={<h1>Your possibilitis</h1>} />
            <Route path="wants" element={<h1>Your wants</h1>} />
            <Route path="messages" element={<h1>Your messages</h1>} />
            <Route path="order" element={<h1>Your order</h1>} />
            <Route path="reviews" element={<h1>Your reviews</h1>} />
            <Route path="setting" element={<h1>Your setting</h1>} />
            <Route path="wallet" element={<h1>Your wallet</h1>} />
          </Route>
          <Route path="user-salesman-cabinet/*" element={<CabinetSalesMan />}>
            <Route index element={<SalesNavBar />} />
            <Route path="sales" element={<h1>Your possibilitis in sales</h1>} />
            <Route path="company" element={<h1>Account your company</h1>} />
            <Route path="messages-sales" element={<h1>Your messages from your byer</h1>} />
            <Route path="order-sales" element={<h1>Your order from your byer</h1>} />
            <Route path="reviews-sales" element={<h1>You can add new reviews on this page</h1>} />
            <Route
              path="add-goods"
              element={<h1>There is you can add to the list of your goods</h1>}
            />
            <Route path="wallet-company" element={<h1>Its the wallet your company</h1>} />
          </Route>
          <Route path="*" element={<NotfoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
