import { HomePage } from '../components/pages/HomePages/HomePage'
import { MainPage } from '../components/pages/MainPage/MainPage'
import { CabinetBuyer } from '../components/core/CabinetBuyer/CabinetBuyer'
import { CabinetSalesMan } from '../components/core/CabinetSalesMan/CabinetSalesMan'
import { NotfoundPage } from '../components/pages/Notfoundpage/NotfoundPage'
import { MainNavBar } from '../components/pages/MainNavBar/MainNavBar'
import { SalesNavBar } from '../components/pages/SalesNavBar/SalesNavBar'

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    children: [
      { index: true, element: <MainPage /> },
      {
        path: 'user-buyer-cabinet/',
        element: <CabinetBuyer />,
        children: [
          { index: true, element: <MainNavBar /> },
          { path: 'possibilitis', element: <h1>Your possibilitis</h1> },
          { path: 'wants', element: <h1>Your wants</h1> },
          { path: 'messages', element: <h1>Your messages</h1> },
          { path: 'order', element: <h1>Your order</h1> },
          { path: 'reviews', element: <h1>Your reviews</h1> },
          { path: 'setting', element: <h1>Your setting</h1> },
          { path: 'wallet', element: <h1>Your wallet</h1> }
        ]
      },
      {
        path: 'user-salesman-cabinet/',
        element: <CabinetSalesMan />,
        children: [
          { index: true, element: <SalesNavBar /> },
          { path: 'sales', element: <h1>Your possibilitis in sales</h1> },
          { path: 'company', element: <h1>Account your company</h1> },
          { path: 'messages-sales', element: <h1>Your messages from your byer</h1> },
          { path: 'order-sales', element: <h1>Your order from your byer</h1> },
          { path: 'reviews-sales', element: <h1>You can add new reviews on this page</h1> },
          { path: 'add-goods', element: <h1>There is you can add to the list of your goods</h1> },
          { path: 'wallet-company', element: <h1>Its the wallet your company</h1> }
        ]
      },
      { path: '*', element: <NotfoundPage /> }
    ]
  }
]
