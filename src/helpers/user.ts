import { v4 as uuidv4 } from 'uuid'

import { IUser } from '../model/interfaceUser'
type ActionPayload = Record<string, string>

export const userRegister = (value: ActionPayload): IUser => {
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
