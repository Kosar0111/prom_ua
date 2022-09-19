import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { routes } from './routes/route'

import './App.css'
import { isAuth } from './store/authSlice'

import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  const element = useRoutes(routes)
  const { register, isAuthBool } = useAppSelector(state => state.auth)
  const notify = () => toast.success('You registered successfully!')
  const notify1 = () => toast.success('Your authorization successfully!')
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (document.cookie !== 'name=') {
      dispatch(isAuth(document.cookie))
    } else if (document.cookie === 'name=') {
      document.cookie = 'name='
    }
  }, [dispatch])

  useEffect(() => {
    ;(isAuthBool && notify1()) || (register && notify())
  }, [isAuthBool, register])

  return (
    <>
      <ToastContainer />
      {element}
    </>
  )
}
