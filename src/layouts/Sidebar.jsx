import {
  Category2,
  Building,
  Kanban,
  Star1,
  Activity,
  Setting2,
  User,
} from "iconsax-reactjs";

import { NavLink } from "react-router-dom";

function Sidebar({ isOpen }) {
  const items = [
    {
      icon: Category2,
      label: "داشبورد",
      to: "/",
    },
    {
      icon: Kanban,
      label: "بردها",
      to: "/boards",
    },
    {
      icon: Building,
      label: "ورک‌اسپیس‌ها",
      to: "/workspaces",
    },
    {
      icon: Star1,
      label: "علاقه‌مندی‌ها",
      to: "/favorites",
    },
    {
      icon: Activity,
      label: "فعالیت‌ها",
      to: "/activity",
    },
    {
      icon: Setting2,
      label: "تنظیمات",
      to: "/settings",
    },
  ];

  return (
    <aside
      className={`
    flex flex-col justify-between
    overflow-hidden
    bg-base-200    backdrop-blur-xl
    md:rounded-2xl
    rounded-none
    transition-all duration-300

    fixed md:relative
    top-0 md:top-auto
    right-0

    z-50

    h-full md:h-full

${isOpen ? "translate-x-0 w-64" : "translate-x-full md:translate-x-0 md:w-16"}
    
  `}
    >
      <div>
        <div className="p-4 flex justify-start">
          <h2 className="text-xl font-bold text-primary whitespace-nowrap">
            {isOpen ? "جریان وظایف" : "ج و"}
          </h2>
        </div>

        <ul className="menu p-3 w-full gap-1">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `
            flex items-center
            ${isOpen ? "justify-start gap-3" : "justify-center"}
            rounded-2xl
            transition-all duration-200

            ${
              isActive ? "bg-primary text-primary-content" : "hover:bg-base-300"
            }
          `
                  }
                >
                  <Icon size="22" color="currentColor" variant="Bulk" />

                  {isOpen && <span>{item.label}</span>}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-t border-base-300 p-4">
        <div
          className={`flex items-center ${isOpen ? "gap-3" : "justify-center"}`}
        >
          <User size="24" color="currentColor" variant="Bulk" />

          {isOpen && (
            <div>
              <div className="font-bold text-primary">طاها رضازاده</div>

              <div className="text-xs opacity-70">توسعه‌دهنده فرانت‌اند</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
