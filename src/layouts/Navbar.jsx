import Profile from "../components/common/Profile";
import SearchBox from "../components/common/SearchBox";
import NavbarTools from "../components/common/NavbarTools";

function Navbar({ setIsSidebarOpen }) {
  return (
    <header className="backdrop-blur-sm bg-base-100/50 px-4 py-3 sticky top-0 w-full z-50">
      <div className="flex items-center justify-between gap-4">
        <NavbarTools setIsSidebarOpen={setIsSidebarOpen} />

        <div className="hidden md:flex flex-1 justify-center">
          <SearchBox />
        </div>

        <Profile />
      </div>
    </header>
  );
}

export default Navbar;
