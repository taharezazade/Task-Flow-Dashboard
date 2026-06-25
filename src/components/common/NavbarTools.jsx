import { Link } from "react-router-dom";
import { CloseSquare, HamburgerMenu, Notification } from "iconsax-reactjs";

function NavbarTools({ setIsSidebarOpen, isSidebarOpen }) {
  return (
    <span className="flex flex-row items-center justify-center gap-2">
      {/* sidebar menu icon */}
      {isSidebarOpen ? (
        <CloseSquare
          size={26}
          color="currentColor"
          className="text-primary cursor-pointer"
          variant="Bulk"
          onClick={() => setIsSidebarOpen(false)}
        />
      ) : (
        <HamburgerMenu
          size={26}
          color="currentColor"
          className="text-primary cursor-pointer"
          variant="Bulk"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* notifications */}
      <Link to="/notifications">
        <button className="text-primary cursor-pointer">
          <Notification size={26} color="currentColor" variant="Bulk" />
        </button>{" "}
      </Link>
      {/* theme toggle */}
      <label className="toggle text-base-content">
        <input type="checkbox" value="autumn" className="theme-controller" />

        {/* sun */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z"
            stroke="#000"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="m19.14 19.14-.13-.13m0-14.02.13-.13-.13.13ZM4.86 19.14l.13-.13-.13.13ZM12 2.08V2v.08ZM12 22v-.08.08ZM2.08 12H2h.08ZM22 12h-.08.08ZM4.99 4.99l-.13-.13.13.13Z"
            stroke="#000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>

        {/* moon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M2.03 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3C4.41 3.86 1.7 7.85 2.03 12.42Z"
            stroke="#d9e3f0"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </label>
    </span>
  );
}

export default NavbarTools;
