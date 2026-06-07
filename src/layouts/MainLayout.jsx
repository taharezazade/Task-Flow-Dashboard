import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isSidebarOpen} />

      <div className="flex-1">
        <Navbar setIsSidebarOpen={setIsSidebarOpen} />

        <main>{/* Pages */}</main>
      </div>
    </div>
  );
}

export default MainLayout;
