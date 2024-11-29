import axiosInstance from "@/api/axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAllTrademarkRegistrations = createAsyncThunk('getAllTrademarkRegistrations', async () => {
  try {
    const response = await axiosInstance.get('/trademark-registration')

    if (response.status == 200) {
      return { data: response.data, error: false }
    }

    return { data: null, error: response.status }
  } catch (error) {
    return { data: null, error }
  }
})

export const createTrademarkRegistration = createAsyncThunk('createTrademarkRegistration', async (TrademarkRegistration) => {

  try {
    const response = await axiosInstance.post('/trademark-registration', TrademarkRegistration)

    if (response.status == 201) {
      return { data: response.data, error: false }
    }
    return {
      data: null,
      error: response.status
    }
  } catch (error) {
    return { data: null, error }
  }
})

export const updateTrademarkRegistrationById = createAsyncThunk('updateTrademarkRegistrationById', async (TrademarkRegistration) => {
  const { id, ...body } = TrademarkRegistration

  console.log({ body })

  try {
    const response = await axiosInstance.put('/trademark-registration/' + id, body)

    if (response.status == 200) {
      return { data: response.data, error: false }
    }
    return {
      data: null,
      error: response.status
    }
  } catch (error) {
    return { data: null, error }
  }
})

export const deleteTrademarkRegistrationById = createAsyncThunk('deleteTrademarkRegistrationById', async (id) => {
  try {
    const response = await axiosInstance.delete('/trademark-registration/' + id)

    if (response.status == 204) {
      return { id, error: false }
    }
    return {
      id,
      error: response.status
    }
  } catch (error) {
    return { id: null, error }
  }
})
