import React from 'react';

// * Router
import { useRouter } from 'next/router';

// * Icons
import { FaTimes } from 'react-icons/fa';

// * Hooks
import { useBrandForm } from '@/hooks/useBrandForm';

// * Redux
import { useDispatch } from 'react-redux';
import { updateTrademarkRegistrationById } from '@/features/trademarkRegistration/asyncThunks';

// * Components
import { Layout } from '../organims/Layout';
import { Button } from '../atoms/Button';
import { BrandTable } from '../organims/BrandTable';
import { BrandForm } from '../organims/BrandForm';

export const DashboardTemplate = ({ data }) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { isFormOpen, initialData, openForm, closeForm } = useBrandForm()

  const navigateTo = (link) => {
    router.push(link)
  }

  const submit = (data) => {
    dispatch(updateTrademarkRegistrationById(data))
    closeForm()
  }

  return (
    <Layout title='Servicios/Registro de Marca'>
      <div className="p-0 lg:p-6 space-y-4">
        <div className="flex justify-end">
          <Button
            label='Agregar Nuevo'
            onClick={() => navigateTo('/trademark-registration/new')}
          />
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <div className="text-gray-700 text-center py-8">
            {data.length > 0 ?
              <BrandTable
                data={data}
                onEdit={(row) => openForm(row)}
              />
              : <p className="text-lg font-medium">No hay registros para mostrar</p>}
          </div>
        </div>
        {isFormOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="relative bg-white p-2 rounded-lg shadow-lg w-full max-w-lg">
              <Button
                onClick={closeForm}
                className="absolute top-2 right-2 flex items-center text-white bg-red-500 hover:bg-red-600 px-2 py-2 rounded-md focus:outline-none transition-colors"
                label={<FaTimes className="mr-0 w-5 h-5" />}
              />
              <BrandForm
                initialData={initialData}
                onClose={(data) => submit(data)}
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

