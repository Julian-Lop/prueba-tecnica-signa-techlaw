import React from 'react';

export const StepIndicator = ({ currentStep }) => {
  const steps = [1, 2, 3];

  return (
    <div className="flex items-center justify-center space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full font-semibold ${currentStep >= step
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-700'
              }`}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`w-16 h-1 ${currentStep > step ? 'bg-blue-500' : 'bg-gray-300'
                }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

