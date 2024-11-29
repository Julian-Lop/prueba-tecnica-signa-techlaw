import React from 'react';

export const StatusCell = ({ rowData }) => {
  return (
    <span
      className={`font-semibold ${rowData.status == 'active' ? 'text-green-500' : 'text-red-500'
        }`}
    >
      {rowData.status == 'active' ? 'Activo' : 'Inactivo'}
    </span>
  )
}
