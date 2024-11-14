import React from 'react';
import TableauReport from 'tableau-react';

const Main = ({ selected, setSelected }) => {

  // Function to handle button clicks and change the selected state
  const handleButtonClick = (index) => {
    setSelected(index); // This will update the selected state in App component
  };

  return (
    <div className='flex flex-col dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-y-scroll overflow-hidden pr-4'>
      <div className='w-full h-fit pb-2'>
        <div className='flex gap-3'>
          {/* Button to set "micro" */}
          <button className='bg-red-400 hover:bg-red-500 active:bg-red-600 px-3 rounded-full text-white' onClick={() => handleButtonClick(1)}>Micro</button>
          
          {/* Button to set "small" */}
          <button className='bg-blue-400 hover:bg-blue-500 active:bg-blue-600 px-3 rounded-full text-white' onClick={() => handleButtonClick(2)}>Small</button>
          
          {/* Button to set "medium" */}
          <button className='bg-green-400 hover:bg-green-500 active:bg-green-600 px-3 rounded-full text-white' onClick={() => handleButtonClick(3)}>Medium</button>
        </div>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-3 h-full rounded-3xl shadow-sm bg-white overflow-hidden p-4'>
          <TableauReport
          url={"https://public.tableau.com/shared/DMGNYJ67F?:display_count=n&:origin=viz_share_link"}
          options={{
            hideTabs: false,
            hideToolbar: false,
            height: 500,
            width: 1000,
          }}
        />
        </div>
        <div className='col-span-2'>
          <div className='rounded-3xl shadow-sm overflow-hidden bg-white h-full p-4'>
            <TableauReport
            url={"https://public.tableau.com/views/ere_17314898438990/Sheet3_1?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"}
            options={{
              hideTabs: false,
              hideToolbar: false,
              height: 500,
              width: 400,
            }}
            />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-3 h-fit gap-4 my-4'>
        <div className='h-fit shadow-sm bg-white rounded-3xl p-4 overflow-x-scroll'>
        <TableauReport
          url={"https://public.tableau.com/shared/8FPMCJXCY?:display_count=n&:origin=viz_share_link"}
          options={{
            hideTabs: false,
            hideToolbar: false,
            height: 500,
            width: 550,
          }}
        />
        </div> 
        <div className='h-fit shadow-sm bg-white rounded-3xl p-4 overflow-x-scroll'>
        <TableauReport
          url={"https://public.tableau.com/shared/8KRDJZWR2?:display_count=n&:origin=viz_share_link"}
          options={{
            hideTabs: false,
            hideToolbar: false,
            height: 500,
            width: 550,
          }}
        />
        </div> 
        <div className='h-fit shadow-sm bg-white rounded-3xl p-4 overflow-x-scroll'>
        <TableauReport
          url={"https://public.tableau.com/shared/RTH9WSBN6?:display_count=n&:origin=viz_share_link"}
          options={{
            hideTabs: false,
            hideToolbar: false,
            height: 500,
            width: 550,
          }}
        />
        </div> 
      </div>
    </div>  
  );
};

export default Main;
