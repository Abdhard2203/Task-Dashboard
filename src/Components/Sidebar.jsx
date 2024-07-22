import React from 'react';
import { FaTasks, FaUserPlus,FaArrowCircleRight, FaUser,FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-fuchsia-100 min-h-screen p-4">
       <h5 className="text-2xl font-bold my-4"><FaUserCircle className="inline-block   mr-2" />Welcome User</h5>
      <div className="my-20 ">
        <h2 className="text-2xl font-bold mb-2">Assigned Tasks</h2>
        <ul>
          <li className="mb-2"><FaTasks className="inline-block  mr-2" />Dashboard</li>
          <li className="mb-2"><FaUser className="inline-block mr-2" />Employees</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Unassigned Tasks</h2>
        <ul>
          <li className="mb-2"><FaUserPlus className="inline-block mr-2" />Assign Department</li>
          <li className="mb-2"><FaUser className="inline-block mr-2" />Assign Employee</li>
        </ul>
      </div>
      <div className="mt-40">
        <ul>
          <li className="mb-2"><FaArrowCircleRight className="inline-block mr-2" />Add Employee/Dept</li>
          <li className="mb-2"><FaArrowCircleRight className="inline-block mr-2" />Completed Tasks</li>
        </ul>
      </div>
      <div className="mb-4 absolute inset-x-0 bottom-0">
        <button className="bg-red-500 text-white  mx-12 p-2 rounded-md"><FaSignOutAlt className="inline-block mx-2 text-centre " />Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
