import { Logout, Profile2User, Setting, UserSquare } from "iconsax-reactjs";
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes.js";
function Profile() {
  return (
    <div className="">
      <div className="dropdown dropdown-bottom dropdown-end">
        <div tabIndex={0} role="button" className="btn bg-primary text-white">
          <p className="flex items-center gap-2">
            <UserSquare size="24" color="#ffffff" variant="Bulk" />

            <span className="hidden md:block">طاها رضازاده</span>
          </p>
        </div>
        <ul
          tabIndex={-1}
          className="dropdown-content menu bg-base-200 backdrop-filter backdrop-blur-lg  rounded-box z-1 w-52 gap-2 mt-2 p-2 shadow-sm"
        >
          <li>
            <Link to={routes.profile}>
              <Profile2User size={20} />
              پروفایل
            </Link>
          </li>
          <li>
            <Link to={routes.settings}>
              <Setting size={20} />
              تنظیمات
            </Link>
          </li>
          <li>
            <Link to={routes.logout} className="text-error bg-error/10">
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
