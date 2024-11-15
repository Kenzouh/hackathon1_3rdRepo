import React from 'react';
import { SidebarData, SidebarFooter } from '../Data/Data';

const Sidebar = ({ selected, setSelected, isSidebarActive, setSidebarActive }) => {
  const toggleSidebar = () => {
    setSidebarActive(!isSidebarActive);
  };

  return (
    <div className={`flex flex-col h-full ${isSidebarActive ? 'w-64' : 'w-20'} p-6 transition-width duration-300 bg-[#050517]`}>
      <div className='flex items-center justify-start cursor-pointer' onClick={toggleSidebar}>
        <img src="/Eizhel.png" alt="logo" className='w-10'/>
        {isSidebarActive && <span className='text-gray-300 dark:text-gray-200 font-bold text-2xl pl-4'>Cloaver</span>}
      </div>

      <div className='h-full'>
        <ul className='flex flex-col gap-4 mt-4'>
          {SidebarData.map((item, index) => (
            <li 
              className={selected === index ? 'sidebar-button active' : 'sidebar-button'}
              key={index}
              onClick={() => setSelected(index)} // This updates the selected state
            >
              <span className='sidebar-icon'>{item.icon}</span>
              {isSidebarActive && <span className='sidebar-text'>{item.title}</span>}
            </li>
          ))}
        </ul>
      </div>

      <div className='border-t-2 border-gray-300 dark:border-gray-600 py-6'>
        <ul className='flex flex-col gap-4 mt-4'>
          {SidebarFooter.map((item, index) => (
            <li 
              className={selected === index + SidebarData.length ? 'sidebar-button active' : 'sidebar-button'}
              key={index + SidebarData.length}
              onClick={() => setSelected(index + SidebarData.length)} // This updates the selected state
            >
              <span className='sidebar-icon'>{item.icon}</span>
              {isSidebarActive && <span className='sidebar-text'>{item.title}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
