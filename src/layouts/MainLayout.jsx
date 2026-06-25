import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div className="h-screen overflow-hidden bg-base-300 p-3 md:p-4 flex flex-col">
      {" "}
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <div className="flex-1 min-h-0 flex gap-3 mt-3">
        <Sidebar isOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

        <main
          className="
        flex-1
        min-h-0
        overflow-y-auto
        bg-base-200
        rounded-2xl
        p-4
      "
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
