import React from 'react';
import { Link,useLocation } from "react-router-dom";

const Sidebar = () => {

    const location = useLocation();

  return (
    <div className="w-64 h-screen bg-gray-100 shadow-md p-4">
        <ul className="mt-4 space-y-2">
        <li>
          <Link
            to="/store"
            className={`flex items-center gap-3 p-4 hover:bg-gray-200 cursor-pointer ${
              location.pathname === "/store" ? "bg-gray-300" : ""
            }`}
          >
            <img
                src="https://brandeps.com/icon-download/S/Store-icon-vector-01.svg"  
                alt="Store"
              className="h-6 w-6"
            />
            <span className="text-lg font-medium">Store</span>
          </Link>
        </li>
        <li>
          <Link
            to="/sku"
            className={`flex items-center gap-3 p-4 hover:bg-gray-200 cursor-pointer ${
              location.pathname === "/sku" ? "bg-gray-300" : ""
            }`}
          >
            <img
                src="https://cdn.creazilla.com/icons/3255736/triangle-square-circle-icon-md.png"
                alt="SKU"
              className="h-6 w-6"
            />
            <span className="text-lg font-medium">SKU</span>
          </Link>
        </li>

        <li>
          <Link
            to="/planning"
            className={`flex items-center gap-3 p-4 hover:bg-gray-200 cursor-pointer ${
              location.pathname === "/planning" ? "bg-gray-300" : ""
            }`}
          >
            <img
                src="https://cdn-icons-png.freepik.com/256/10902/10902438.png?semt=ais_hybrid"  
                alt="Planning"
              className="h-6 w-6"
            />
            <span className="text-lg font-medium">Planning</span>
          </Link>
        </li>

        <li>
          <Link
            to="/charts"
            className={`flex items-center gap-3 p-4 hover:bg-gray-200 cursor-pointer ${
              location.pathname === "/charts" ? "bg-gray-300" : ""
            }`}
          >
            <img
                src="https://www.svgrepo.com/show/72304/bars-chart-inside-a-square-outline.svg"  
                alt="Charts"
              className="h-6 w-6"
            />
            <span className="text-lg font-medium">Charts</span>
          </Link>
        </li>

        </ul>
    </div>
  )
}

export default Sidebar
