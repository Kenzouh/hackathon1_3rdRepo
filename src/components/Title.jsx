import React from 'react';
import { UilSun, UilMoon } from '@iconscout/react-unicons';

const Title = ({ isNightMode, setNightMode, title, para}) => {
  return (
    <div className='flex flex-col border-b mb-2'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold pb-4 dark:text-white'>{title}</h1>
        <div>
          <button onClick={() => setNightMode(!isNightMode)} className='py-1 px-2 rounded-full w-20 h-min flex justify-start bg-[#F5F5EA] dark:bg-slate-500 shadow-sm transition dark:justify-end border dark:border-0'>
            <input type="checkbox" name="light-switch" className="light-switch sr-only" />
            <label className="relative cursor-pointer" htmlFor="light-switch">
              {isNightMode ? (
                  <UilMoon className="text-slate-300 dark:text-slate-200" />
              ) : (
                  <UilSun className="text-yellow-400 dark:text-yellow-200" />
              )}
            </label>
          </button>
        </div>
      </div>
      <p className='text-lg pb-2 dark:text-slate-300'>{para}</p> 
    </div>
  );
};

export default Title;