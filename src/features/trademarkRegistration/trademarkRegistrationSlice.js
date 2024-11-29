import { createSlice } from "@reduxjs/toolkit"

// * SweetAlert
import Swal from 'sweetalert2'

// * Async thunks
import { createTrademarkRegistration, deleteTrademarkRegistrationById, getAllTrademarkRegistrations, updateTrademarkRegistrationById } from "./asyncThunks"


const initialState = {
  status: 'idle',
  error: null,
  data: []
}

export const trademarkRegistrationSlice = createSlice({
  name: 'trademarkRegistrations',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      // ? GET ALL TRADEMARK REGISTRATIONS
      .addCase(getAllTrademarkRegistrations.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(getAllTrademarkRegistrations.fulfilled, (state, action) => {
        const { error, data } = action.payload

        if (error) {
          state.status = 'failed'
          state.error = error
          Swal.fire({
            icon: "error",
            title: `Error`,
            text: `Ocurrió un error al obtener los registros de marcas. ${error}`,
          });
          return
        }
        state.status = 'succeeded'
        state.data = state.data.length > 0 ? [...state.data] : data
        state.error = null
      })
      .addCase(getAllTrademarkRegistrations.rejected, (state) => {
        state.status = 'failed'
      })

      // ? CREATE TRADEMARK REGISTRATION
      .addCase(createTrademarkRegistration.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(createTrademarkRegistration.fulfilled, (state, action) => {
        const { error, data } = action.payload

        if (error) {
          state.status = 'failed'
          state.error = error
          Swal.fire({
            icon: "error",
            title: `Error`,
            text: `Ocurrió un error al crear el Registro de marca. ${error}`,
            customClass: {
              popup: 'bg-white rounded-lg shadow-lg p-6',
              title: 'text-xl font-bold text-gray-700',
              confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
            },
          });
          return
        }
        state.status = 'succeeded'
        state.data = [...state.data, data]
        state.error = null
        Swal.fire({
          icon: "success",
          title: `Registro Creado Exitosamente`,
          text: ``,
          customClass: {
            popup: 'bg-white rounded-lg shadow-lg p-6',
            title: 'text-xl font-bold text-gray-700',
            confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          },
        });
      })
      .addCase(createTrademarkRegistration.rejected, (state) => {
        state.status = 'failed'
      })

      // ? UPDATE TRADEMARK REGISTRATION
      .addCase(updateTrademarkRegistrationById.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(updateTrademarkRegistrationById.fulfilled, (state, action) => {
        const { error, data } = action.payload

        if (error) {
          state.status = 'failed'
          state.error = error
          Swal.fire({
            icon: "error",
            title: `Error`,
            text: `Ocurrió un error al actualizar el Registro de Marca. ${error}`,
            customClass: {
              popup: 'bg-white rounded-lg shadow-lg p-6',
              title: 'text-xl font-bold text-gray-700',
              confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
            },
          });
          return
        }
        let tempdata = state.data
        const index = tempdata.findIndex(dt => dt.id == data.id)
        tempdata[index] = data
        state.status = 'succeeded'
        state.data = tempdata
        state.error = null
        Swal.fire({
          icon: "success",
          title: `Registro Actualizado Exitosamente`,
          text: ``,
          customClass: {
            popup: 'bg-white rounded-lg shadow-lg p-6',
            title: 'text-xl font-bold text-gray-700',
            confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          },
        });

      })
      .addCase(updateTrademarkRegistrationById.rejected, (state) => {
        state.status = 'failed'
      })

      // ? DELETE TRADEMARK REGISTRATION
      .addCase(deleteTrademarkRegistrationById.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(deleteTrademarkRegistrationById.fulfilled, (state, action) => {
        const { error, id } = action.payload

        if (error) {
          state.status = 'failed'
          state.error = error
          Swal.fire({
            icon: "error",
            title: `Error`,
            text: `Ocurrió un error al eliminar el Registro de Marca. ${error}`,
            customClass: {
              popup: 'bg-white rounded-lg shadow-lg p-6',
              title: 'text-xl font-bold text-gray-700',
              confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
            },
          });
          return
        }

        let tempdata = state.data

        tempdata = tempdata.filter(dt => dt.id != id)

        state.status = 'succeeded'
        state.data = tempdata
        state.error = null
        Swal.fire({
          icon: "success",
          title: `Registro Eliminado Exitosamente`,
          text: ``,
          customClass: {
            popup: 'bg-white rounded-lg shadow-lg p-6',
            title: 'text-xl font-bold text-gray-700',
            confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded'
          },
        });
      })
      .addCase(deleteTrademarkRegistrationById.rejected, (state) => {
        state.status = 'failed'
      })
  }
})

export default trademarkRegistrationSlice.reducer
