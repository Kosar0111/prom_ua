import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

import { useAppDispatch, useAppSelector } from './hooks/hooks'
import { routes } from './routes/route'
import { isAuth } from './store/authSlice'
import { getGoods } from './store/goodsSlice'
import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  const element = useRoutes(routes)
  const { register, isAuthBool } = useAppSelector((state) => state.auth)
  const notify = () => toast.success('Вы успешно зарегестрировались!')
  const notify1 = () => toast.success('Вы успешно авторизовались!')
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (document.cookie) {
      dispatch(isAuth(document.cookie))
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(getGoods())
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
