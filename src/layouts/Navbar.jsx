import Profile from "../components/common/Profile";
import SearchBox from "../components/common/SearchBox";
import NavbarTools from "../components/common/NavbarTools";

function Navbar({ setIsSidebarOpen, isSidebarOpen }) {
  return (
    <header className="rounded-2xl bg-base-200 animate__animated animate__fadeIn p-3 w-full md:backdrop-blur-none">
      <div className="flex items-center justify-between gap-4">
        <NavbarTools
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="hidden md:flex flex-1 justify-center">
          <SearchBox />
        </div>

        <Profile />
      </div>
    </header>
  );
}

export default Navbar;
