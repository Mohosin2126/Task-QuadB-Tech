import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiArchiveDrawerFill } from "react-icons/ri";

import { MdCreateNewFolder } from "react-icons/md";
import { FcPrevious } from "react-icons/fc";

// Dashboard component containing sidebar and main content
const Dashboard = () => {
  return (
    <div>
      <div className="flex">
        {/* Dashboard side bar */}
        <div>
          <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
              {/* Page content here */}
              <label htmlFor="my-drawer-2" className="btn btn-lg  bg-sky-500 drawer-button lg:hidden"><RiArchiveDrawerFill /></label>
            </div>
            <div className="drawer-side">
              <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
              <ul className="menu md:w-64 min-h-screen fixed bg-cyan-900 text-base-content">
                <div className="p-4 mt-10 text-center">
                  <img src="https://i.ibb.co/Xb7MwCk/placeholder.jpg" />
                  <h1 className="font-base text-xl text-center">
                    Your Name
                  </h1>
                </div>
                {/* Sidebar content here */}
                <ul className="menu p-4 py-auto">
                  <li className="text-lg">
                    <NavLink to="/dashboard/createnewtask">
                      <MdCreateNewFolder /> Create New Task
                    </NavLink>
                  </li>
                  <li className="text-lg">
                    <NavLink to="/dashboard/mytask">
                      <FcPrevious /> My Task
                    </NavLink>
                  </li>
                  {/* Shared nav links */}
                  <div className="divider"></div>
                  <li className="text-lg">
                    <NavLink to="/">
                      <FaHome /> Home
                    </NavLink>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
        {/* Dashboard content */}
        <div className="flex-1 p-8 md:ml-64 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
