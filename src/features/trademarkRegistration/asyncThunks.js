import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAllTrademarkRegistrations = createAsyncThunk('getAllTrademarkRegistrations', async () => {
  try {
    return {
      data: [
        {
          id: 1,
          brand: 'Marca 1',
          owner: 'Titular 1',
          status: true
        },
        {
          id: 2,
          brand: 'Marca 2',
          owner: 'Titular 2',
          status: false
        },
        {
          id: 3,
          brand: 'Marca 3',
          owner: 'Titular 3',
          status: true
        }
      ],
      error: false
    }
  } catch (error) {
    return { data: null, error }
  }
})

export const createTrademarkRegistration = createAsyncThunk('createTrademarkRegistration', async (TrademarkRegistration) => {

  try {
    return {
      data: {
        id: 4,
        brand: TrademarkRegistration.brand,
        owner: TrademarkRegistration.owner,
        status: true
      },
      error: false
    }
  } catch (error) {
    return error
  }
})

export const updateTrademarkRegistrationById = createAsyncThunk('updateTrademarkRegistrationById', async (TrademarkRegistration) => {
  try {
    return {
      data: {
        id: TrademarkRegistration.id,
        brand: TrademarkRegistration.brand,
        owner: TrademarkRegistration.owner,
        status: TrademarkRegistration.status
      },
      error: false
    }
  } catch (error) {
    return error
  }
})

export const deleteTrademarkRegistrationById = createAsyncThunk('deleteTrademarkRegistrationById', async (id) => {
  try {
    return {
      id,
      error: false
    }
  } catch (error) {
    return error
  }
})
