import Profile from "../components/common/Profile";
import SearchBox from "../components/common/SearchBox";
import NavbarTools from "../components/common/NavbarTools";

function Navbar({ setIsSidebarOpen }) {
  return (
    <section className="bg-base-100 w-full border-b border-base-300 p-4 flex flex-row items-center justify-between">
      {/* theme toggle and notifications and sidebar Menu */}
      <NavbarTools setIsSidebarOpen={setIsSidebarOpen} />

      {/* Search Input and Search Btn Box */}
      <SearchBox />

      {/* Profile and Dropdown */}
      <Profile />
    </section>
  );
}

export default Navbar;
