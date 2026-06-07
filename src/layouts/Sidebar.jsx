import {
  Category2,
  Building,
  Kanban,
  Star1,
  Activity,
  Setting2,
  User,
} from "iconsax-reactjs";

import { Link } from "react-router-dom";

function Sidebar({ isOpen }) {
  const items = [
    { icon: Category2, label: "داشبود", to: "/" },
    { icon: Building, label: "ورک اسپیس‌ها", to: "/workspaces" },
    { icon: Kanban, label: "برد ها", to: "/boards" },
    { icon: Star1, label: "مورد علاقه‌ها", to: "/favorites" },
    { icon: Activity, label: "فعالیت‌ها", to: "/activity" },
    { icon: Setting2, label: "تنظیمات", to: "/settings" },
  ];

  return (
    <aside
      className={`bg-base-200 h-screen transition-all duration-300 overflow-hidden flex flex-col justify-between ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Top section */}
      <div>
        <div className="p-4 font-bold text-primary text-xl">
          {isOpen ? "TaskFlow" : "TF"}
        </div>

        <ul className="menu px-2 w-full">
          {items.map((item) => {
            const Icon = item.icon;

            return (
                <li key={item.to} className="w-full">
                <Link to={item.to} className="flex items-center gap-3 hover:text-primary hover:bg-primary/10 rounded-lg w-full">
                  <Icon size="24" color="currentColor" variant="Bulk" />

                  {isOpen && <span>{item.label}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom user section */}
      <div className="p-4 border-t border-base-300">
        <div className="flex items-center gap-3">
          <User size="24" color="currentColor" variant="Bulk" />

          {isOpen && (
            <div className="text-sm">
              <div className="font-bold">Taha Rezazade</div>
              <div className="text-xs opacity-70">Frontend Developer</div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
