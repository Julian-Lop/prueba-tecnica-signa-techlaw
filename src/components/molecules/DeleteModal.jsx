import React from 'react';

// * Icons
import { FaExclamationTriangle } from 'react-icons/fa'
import { Button } from '../atoms/Button';

export const DeleteModal = ({ isOpen, onClose, onDelete, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <FaExclamationTriangle className="text-yellow-500 text-4xl" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">¿Estás seguro?</h2>
        <p className="text-gray-600 mb-6">Este registro &quot;{data.brand}&quot; será eliminado permanentemente.</p>
        <div className="flex justify-center space-x-4">
          <Button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all"
            label="Cancelar"
          />
          <Button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition-all"
            label='Eliminar'
          />
        </div>
      </div>
    </div>
  )
}

