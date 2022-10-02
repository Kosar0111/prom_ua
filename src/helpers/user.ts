import { v4 as uuidv4 } from 'uuid'

export const userRegister: any = (value: any) => {
  return {
    token: uuidv4(),
    id: uuidv4(),
    name: value.name.trim(),
    lastName: value.lastName.trim(),
    email: value.email.trim(),
    password: value.password.trim(),
    phone: value.phone
  }
}
