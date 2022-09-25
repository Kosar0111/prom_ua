export interface IUser {
  id: string
  token: string
  name: string
  lastName: string
  email: string
  password: string
  phone: string
  orders: IGood[]
}

export interface IGood {
  id: string
  img: string
  title: string
  price: number
  count?: any
  city: string
  nameShop: string
}
