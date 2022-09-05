import { Routes, Route } from 'react-router-dom'

import './App.css'
import { HomePage } from './components/pages/HomePages/HomePage'

export const App = () => {
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
