import React, { useState } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Title from './components/Title';
import Small from './components/Small';
import Micro from './components/Micro';
import Medium from './components/Medium';
import { SidebarData, SidebarFooter } from './Data/Data';
import Calculator from './components/Calculator';

function App() {
  const [selected, setSelected] = useState(0);
  const [isSidebarActive, setSidebarActive] = useState(true);
  const [isNightMode, setNightMode] = useState(false);

  // Combine SidebarData and SidebarFooter
  const fullSidebarData = [...SidebarData, ...SidebarFooter];

  return (
    <div className={`h-screen ${isNightMode ? 'dark' : ''} flex bg-[#050517]`}>
      <Sidebar 
        selected={selected} 
        setSelected={setSelected} 
        isSidebarActive={isSidebarActive} 
        setSidebarActive={setSidebarActive}
        isNightMode={isNightMode} 
        setNightMode={setNightMode} 
      />
      
      <div className='flex flex-col px-16 py-6 my-4 mr-4 rounded-3xl h-auto w-full bg-slate-100 dark:bg-slate-900'>
        <Title 
          isNightMode={isNightMode} 
          setNightMode={setNightMode} 
          title={fullSidebarData[selected]?.title} 
          para={fullSidebarData[selected]?.para}
        />
        {selected === 0 && <Main selected={selected} setSelected={setSelected} />}
        {selected === 1 && <Micro />}
        {selected === 2 && <Small />}
        {selected === 3 && <Medium />}
        {selected === 4 && <Calculator />}
        {selected === 5 && <About />}
      </div>
    </div>
  );
}

export default App;
