// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets"; // make sure path is correct

const Sidebar = () => {
  // Sidebar links with proper assets references
  const SidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className="md:w-64 w-full border-r border-gray-300 pt-4 flex flex-col transition-all duration-300">
      {SidebarLinks.map((item, index) => (
        <NavLink
          key={index}
          to={item.path}
          end
          className={({ isActive }) =>
            `flex items-center py-3 px-4 md:px-8 gap-3 transition-colors duration-200 ${
              isActive
                ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600"
                : "hover:bg-gray-100/90 border-transparent text-gray-700"
            }`
          }
        >
          <img src={item.icon} alt={item.name} className="min-h-6 min-w-6" />
          <p className="md:block hidden text-center">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
