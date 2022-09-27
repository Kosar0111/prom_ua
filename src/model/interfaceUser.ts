export interface IUser {
  id: string
  token: string
  name: string
  lastName: string
  email: string
  password: string
  phone: string
}
export interface IOderGoods {
  id: string
  count: number
  price: number
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
export interface IOrder {
  idUser: string
  ownBasket: IOderGoods[]
}
