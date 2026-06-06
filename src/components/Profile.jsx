import { Logout, Profile2User, Setting, UserSquare } from "iconsax-reactjs";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="">
      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-primary text-white"
        >
          <p className="flex flex-row items-center gap-2">
            <UserSquare size="32" color="#ffffff" variant="Bulk" /> طاها رضازاده
          </p>
        </div>
        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li>
            <Link to="/item1">
              <Profile2User size={20} />
              پروفایل
            </Link>
          </li>
          <li>
            <Link to="/item2">
              <Setting size={20} />
              تنظیمات
            </Link>
          </li>
          <li>
            <Link to="/item3">
              <Logout size={20} />
              خروج
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Profile;
