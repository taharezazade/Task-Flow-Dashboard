import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} />

      <div className="flex-1 flex flex-col">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />

        <main className="p-4 h-screen overflow-y-auto">
          <Outlet />
        </main>
        {/* <Sidebar isOpen={isSidebarOpen} /> */}
      </div>
    </div>
  );
}

export default MainLayout;
