import {createAsyncThunk} from '@reduxjs/toolkit'
import http from '../../helpers/http'

export const registerAction = createAsyncThunk('async/registerAction', async ({firstName, lastName, email, password, cb}) => {    
    try {
        const {data} = await http().post('/auth/register', {firstName, lastName, email, password});
        cb()

        return data.results.token
    } catch(err) {
        console.log(err)
        return err.response.data
    }
})

export const loginAction = createAsyncThunk(
    "auth/loginAsync",
    async ({ email, password, cb }) => {
      try {
        const { data } = await http().post("/auth/login", { email, password });
        cb();
        return data.results.token;
      } catch (error) {
        return error.response.data
      }
    }
  );