import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { useAppDispatch } from './hooks/hooks'

import './App.css'
import { HomePage } from './components/pages/HomePages/HomePage'
import { isAuth } from './store/authSlice'

export const App = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (document.cookie !== '') {
      dispatch(isAuth(document.cookie))
    }
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route></Route>
        </Route>
      </Routes>
    </>
  )
}
