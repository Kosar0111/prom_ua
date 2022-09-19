export interface IUser {
  id: string
  token: string
  name: string
  lastName: string
  email: string
  password: string
  phone: string
}

export interface IGood {
  id: string
  img: string
  title: string
  price: number
  city: string
  nameShop: string
}
