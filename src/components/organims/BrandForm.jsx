import React, { useState } from 'react';

// * React-hook-form
import { useForm, FormProvider } from 'react-hook-form';

// * Components
import { FormStep } from '../molecules/FormStep';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Select } from '../atoms/Select';

export const BrandForm = ({ initialData = false, onClose }) => {
  const methods = useForm({
    defaultValues: {
      brand: '',
      owner: '',
      ...initialData
    },
  })
  const { handleSubmit, watch, register } = methods;
  const [currentStep, setCurrentStep] = useState(1);
  const steps = ['brand', 'owner']


  const onSubmit = (data) => {
    if (!watch('brand') || !watch('owner') || currentStep < 3) return
    onClose(data)
  }

  const goNext = () => {
    if (currentStep < 3 && watch(steps[currentStep - 1])) {
      setCurrentStep(currentStep + 1)
    }
  }

  const goBack = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col items-center w-full h-full p-6 bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-800 mb-8">{initialData ? 'Actualizar Registro' : 'Registro de Marca'}</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6"
        >
          {currentStep === 1 && (
            <FormStep step={1}>
              <Input
                id="brand"
                label="Marca"
                {...register('brand', { required: 'Este campo es obligatorio' })}
                placeholder="Ingresa el nombre de la marca"
              />
              {methods.formState.errors.brand && (
                <p className="text-red-500 text-sm">{methods.formState.errors.brand.message}</p>
              )}
            </FormStep>
          )}
          {currentStep === 2 && (
            <FormStep step={2}>
              <Input
                id="owner"
                label="Titular"
                {...register('owner', { required: 'Este campo es obligatorio' })}
                placeholder="Ingresa el nombre del titular"
              />
              {methods.formState.errors.owner && (
                <p className="text-red-500 text-sm">{methods.formState.errors.owner.message}</p>
              )}
            </FormStep>
          )}
          {currentStep === 3 && (
            <FormStep step={3}>
              <div className="flex flex-col items-center text-center">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Resumen del Registro</h2>
                <p className="mb-4 text-lg text-gray-800 font-semibold">
                  <span className="text-gray-600 font-medium">Marca a registrar</span> {watch('brand')}
                </p>
                <p className="text-lg text-gray-800 font-semibold">
                  <span className="text-gray-600 font-medium">Titular de la Marca</span> {watch('owner')}
                </p>
                {initialData ?
                  <>
                    <br />
                    <Select
                      {...register('status')}
                    />
                  </>
                  :
                  null}
              </div>
            </FormStep>
          )}
          <div className="flex justify-between mt-6">
            {currentStep > 1 && (
              <Button
                className='px-4 py-2 bg-gray-500 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition-all'
                label="Anterior" onClick={goBack} type="button" />
            )}
            {currentStep < 3 && (
              <Button label="Siguiente" onClick={goNext} type={watch(steps[currentStep - 1]) ? "button" : "submit"} />
            )}
            {currentStep === 3 && (
              <Button label={initialData ? "Actualizar Registro" : "Crear Registro"} type="submit" />
            )}
          </div>
        </form>
      </div>
    </FormProvider>
  )
}


