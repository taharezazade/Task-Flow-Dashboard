import { Link } from "react-router-dom";
import { HamburgerMenu, Notification } from "iconsax-reactjs";

function NavbarTools({ setIsSidebarOpen }) {
  console.log("setIsSidebarOpen:", setIsSidebarOpen);

  return (
    <span className="flex flex-row gap-2">
      {/* sidebar menu icon */}
      <HamburgerMenu
        size={30}
        color="currentColor"
        className="text-primary cursor-pointer"
        variant="Bulk"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      />

      {/* notifications */}
      <Link to="/notifications">
        <button className="text-primary cursor-pointer">
          <Notification size={30} color="currentColor" variant="Bulk" />
        </button>{" "}
      </Link>
      {/* theme toggle */}
      <label className="toggle text-base-content">
        <input type="checkbox" value="autumn" className="theme-controller" />

        <svg
          aria-label="sun"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>

        <svg
          aria-label="moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2"
            fill="none"
            stroke="currentColor"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>
    </span>
  );
}

export default NavbarTools;
