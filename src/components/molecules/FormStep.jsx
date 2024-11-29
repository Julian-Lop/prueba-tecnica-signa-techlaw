import React from 'react';

// * Components
import { StepIndicator } from '../atoms/StepIndicator';

export const FormStep = ({ step, children }) => {
  return (
    <div className="flex flex-col items-center w-full h-full p-6 bg-gray-100">
      <StepIndicator currentStep={step} />
      <div className="mt-8 w-full max-w-xl bg-white shadow-md rounded-lg p-6">
        {children}
      </div>
    </div>
  )
}
