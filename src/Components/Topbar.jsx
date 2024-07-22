import React from 'react';
import {   FaFile } from 'react-icons/fa';
const TopBar = () => {
  return (
    <div className="bg-fuchsia-200 p-4 flex justify-between items-center">
      <div>
      <FaFile className="inline-block size-6 mr-4" />
      <button className="bg-blue-800 text-white p-2 rounded-md mr-4">My Tasks</button>
      <button className="bg-blue-800 text-white p-2 rounded-md">New Task</button>
      
      </div>
      <div>
        <h1 className="text-2xl mx-80 font-bold">TASK DASHBOARD</h1>
      </div>
      
    </div>
    
  );
};

export default TopBar;
