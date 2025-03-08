import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div>
      
      <div className='grid grid-cols-12 gap-4'>
      <Sidebar />
      <div className='col-span-9'>
        {/* Outlet renders the MainContainer or any other component depending on the route */}
        <Outlet />
      </div>
      </div>

    </div>
  )
}

export default Body
