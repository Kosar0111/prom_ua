import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
//import 'react-toastify/dist/ReactTostify.css'

import './App.css'
import HomePage from './pages/HomePages/HomePage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
