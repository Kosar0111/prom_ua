import axios from 'axios'

const token = document.cookie

export const instance = axios.create({
  headers: token ? { Authorization: `Bearer ${token}` } : undefined
})
