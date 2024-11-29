import React from 'react';
import Link from 'next/link';

export const SidebarItem = ({ label, href, isActive }) => {
  return (
    <Link href={href} passHref>
      <div
        className={`flex items-center px-8 py-2 text-gray-900 hover:bg-blue-500 hover:text-white rounded-md cursor-pointer
          ${isActive && 'bg-blue-500 text-white'}
        `}
      >
        <span className="text-xl font-semibold">{label}</span>
      </div>
    </Link>
  );
};
