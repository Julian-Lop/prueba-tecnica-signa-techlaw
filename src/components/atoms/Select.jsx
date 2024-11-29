import React from 'react'

export const Select = (props) => {
  return (
    <div>
      <label htmlFor="status" className="block text-lg font-semibold text-gray-800">
        Estado
      </label>
      <select
        {...props}
        className="block w-56 px-4 py-2 mt-2 text-gray-600 font-semibold border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        aria-label="Seleccionar opción"
      >
        <option value="" disabled selected>
          Selecciona el estado
        </option>
        <option value='active'>Activo</option>
        <option value='inactive'>Inactivo</option>
      </select>
    </div>
  )
}
