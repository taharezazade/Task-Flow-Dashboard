import { TickCircle, AddCircle, Edit2, UserAdd } from "iconsax-reactjs";

import { activities } from "../../data/dashboardData";

const activityIcons = {
  completed: TickCircle,
  created: AddCircle,
  updated: Edit2,
  member: UserAdd,
};

const ActivityList = () => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">فعالیت‌های اخیر</h2>

        <div className="mt-4 flex flex-col gap-4">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.type];

            return (
              <div key={activity.id} className="flex items-start gap-3">
                <Icon
                  size="22"
                  color="currentColor"
                  variant="Bulk"
                  className="text-primary mt-1"
                />

                <div className="flex flex-col">
                  <span>{activity.message}</span>

                  <span className="text-xs text-base-content/60">
                    {activity.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityList;
