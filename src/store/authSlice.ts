import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { v4 as uuidv4 } from 'uuid'

import { instance } from '../api/api-clint'

import { IUser } from '../model/interfaceUser'

interface IUserSlice {
  users: IUser
  loading: boolean
  regError: boolean
  authError: boolean
  register: boolean
  isAuthBool: boolean
  message: string
}

const initialState: IUserSlice = {
  loading: false,
  regError: false,
  authError: false,
  register: false,
  isAuthBool: false,
  message: '',
  users: {
    id: '',
    token: '',
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  }
}

type ActionPayload = Record<string, string>

type FormModel = {
  email: string
  password: string
}

export const logIn = createAsyncThunk('users/getUsers', async (client: FormModel) => {
  const response = await instance.get<IUser[]>('http://localhost:3001/users')
  const auth = response.data.find(
    user => user.email === client.email && user.password === client.password
  )

  if (auth) return auth
  throw new Error(' You entered incorrect data')
})

export const registrUser = createAsyncThunk<IUser, ActionPayload>('users/registr', async value => {
  const response = await instance.get<IUser[]>('http://localhost:3001/users')
  const res = response.data.find(user => user.email === value.email)

  if (!res) {
    const resp = await instance.post('http://localhost:3001/users', {
      token: uuidv4(),
      id: uuidv4(),
      name: value.name.trim(),
      lastName: value.lastName.trim(),
      email: value.email.trim(),
      password: value.password.trim(),
      phone: value.phone
    })

    return resp.data
  }
  throw new Error('Such user has already exist')
})
export const isAuth = createAsyncThunk('isAuth/getUsers', async (cookie: string) => {
  const response = await instance.get<IUser[]>('http://localhost:3001/users')
  const userIsAuth: IUser = response.data.filter(el => 'name=' + el.token === cookie)[0]

  return userIsAuth
})
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      state.users = action.payload
    },
    userLog: (state, action) => {
      state.users = action.payload
    },
    logOut: state => {
      state.users = {
        id: '',
        token: '',
        name: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
      }
      state.isAuthBool = false
      state.register = false
      state.loading = false
      document.cookie = 'name='
    }
  },

  extraReducers: builder => {
    builder.addCase(logIn.pending, state => {
      state.loading = true
      state.isAuthBool = false
      state.authError = false
      state.message = ''
    })
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.loading = false
      authSlice.caseReducers.userLog(state, action)
      const token = action.payload.token
      document.cookie = `name=${token}`
      state.isAuthBool = true
      state.authError = false
      state.message = ''
    })
    builder.addCase(logIn.rejected, state => {
      state.loading = false
      state.isAuthBool = false
      state.authError = true
      state.message = 'Something went wrong'
    })

    builder.addCase(registrUser.pending, state => {
      state.loading = true
      state.register = false
      state.regError = false
      state.message = ''
    })
    builder.addCase(registrUser.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.loading = false
      state.register = true
      state.regError = false
      state.message = ''
      authSlice.caseReducers.register(state, action)
      document.cookie = `name=${action.payload.token}`
    })
    builder.addCase(registrUser.rejected, state => {
      state.loading = false
      state.regError = true
      state.register = false
      state.message = 'You cant register, such email has already exists'
    })

    builder.addCase(isAuth.pending, state => {
      state.loading = true
    })
    builder.addCase(isAuth.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.isAuthBool = true
      authSlice.caseReducers.userLog(state, action)
    })
    builder.addCase(isAuth.rejected, state => {
      state.loading = false
      state.isAuthBool = false
    })
  }
})
export const { register, logOut } = authSlice.actions
export default authSlice.reducer
