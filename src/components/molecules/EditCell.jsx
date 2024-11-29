import React, { useState } from 'react';

// * Icons
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

// * Redux
import { useDispatch } from 'react-redux';
import { deleteTrademarkRegistrationById } from '@/features/trademarkRegistration/asyncThunks';

// * Components
import { DeleteModal } from './DeleteModal';


export const EditCell = ({ rowData, onEdit }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dispatch = useDispatch()

  const handleEdit = () => {
    onEdit(rowData)
  }

  const handleDelete = () => {
    dispatch(deleteTrademarkRegistrationById(rowData.id))
    setIsModalOpen(false);
  }

  return (
    <div className="flex space-x-4 justify-center">
      <button
        onClick={handleEdit}
        className="flex items-center text-blue-500 hover:bg-blue-100 hover:text-blue-600 px-3 py-1 rounded-md"
      >
        <FaEdit className="mr-2" />
        Editar
      </button>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center text-red-500 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-md"
      >
        <FaTrashAlt className="mr-2" />
        Eliminar
      </button>
      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDelete={handleDelete}
        data={rowData}
      />
    </div>
  )
}

