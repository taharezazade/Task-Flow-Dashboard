import { getGreeting } from "../../utils/getGreeting";

function DashboardHeader() {
  return (
    <div className="animate__animated animate__fadeIn">
      <h1 className="text-3xl font-bold">{getGreeting()} طاها 👋</h1>

      <p className="text-base-content/70 mt-2">
        مدیریت پروژه‌ها و تسک‌های خودت را از اینجا انجام بده.
      </p>
    </div>
  );
}

export default DashboardHeader;
