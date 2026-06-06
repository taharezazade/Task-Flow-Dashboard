

import Profile from "./Profile";
import SearchBox from "./SearchBox";
import NavbarTools from "./NavbarTools";

function Navbar() {
  return (
    <section className="bg-base-100 w-full p-4 flex flex-row items-center justify-between">
      {/* theme toggle and notifications and sidebar Menu */}
      <NavbarTools />

      {/* Search Input and Search Btn Box */}
      <SearchBox />
      {/* Profile and Dropdown */}
      <Profile />
    </section>
  );
}

export default Navbar;
