import React from 'react';

export const Input = (props) => {
  return (
    <div className="flex flex-col space-y-2">
      <label htmlFor="input" className="text-lg font-medium text-gray-700">{props.label}</label>
      <input
        id="input"
        type="text"
        className="px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
    </div>
  );
};
