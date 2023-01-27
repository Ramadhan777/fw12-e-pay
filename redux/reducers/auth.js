import {createSlice} from '@reduxjs/toolkit'
import { registerAction, loginAction } from '../actions/auth'

const initialState = {
    token: null,
    error: null
}

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            return initialState
        }
    },
    extraReducers: (build) => {
        build.addCase(registerAction.fulfilled, (state, {payload}) => {
            if(payload.message){
                return state.error = payload.message
            }
            state.error = null
            state.token = payload
        })
        build.addCase(loginAction.fulfilled, (state, {payload}) => {
            if(payload.message){
                return state.error = payload.message
            }
            state.error = null
            state.token = payload
        })
    }
})

export const { logout } = authReducer.actions

export default authReducer.reducer