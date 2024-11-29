import React from 'react';

// * Router
import { useRouter } from 'next/router';

// * Icons
import { FaBars } from 'react-icons/fa';

// * CustomHooks
import { useSidebarToggle } from '@/hooks/useSidebarToggle';

// * Components
import { SidebarItem } from '../atoms/SidebarItem';


export const Sidebar = () => {
  const { pathname } = useRouter();
  const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebarToggle();

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded-md"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
      <div
        className={`
          h-screen w-64 bg-gray-200 text-gray-900 flex flex-col py-6 px-2
          lg:static lg:translate-x-0 lg:w-64
          fixed top-0 left-0 transform transition-transform duration-300 ease-in-out
          z-50 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
        onClick={closeSidebar}
      >
        <span className="text-xl">Dashboard</span>
        <SidebarItem
          label="Panel"
          href="/"
          isActive={pathname === '/'}
        />
        <hr className="my-6 border-t-2 border-gray-300" />
        <span className="text-xl">Servicios</span>
        <SidebarItem
          label="Registro de Marca"
          href="/trademark-registration"
          isActive={pathname.includes('/trademark-registration')}
        />
      </div>
    </>
  )
}
