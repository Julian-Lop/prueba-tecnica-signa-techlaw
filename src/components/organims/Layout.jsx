import React from 'react';

// * Components
import { Sidebar } from '../molecules/Sidebar';

export const Layout = ({ title, children }) => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <header className="mb-6 text-center lg:text-left">
          <h1
            className="text-2xl lg:text-3xl font-bold text-gray-900 truncate max-w-[80%] lg:max-w-full mx-auto lg:mx-0"
            title={title}
          >
            {title}
          </h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  )
}
