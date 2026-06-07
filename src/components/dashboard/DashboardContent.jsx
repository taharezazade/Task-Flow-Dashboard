import QuickActions from "./QuickActions";
import ActivityList from "./ActivityList";

function DashboardContent() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <QuickActions />

      <div className="xl:col-span-2">
        <ActivityList />
      </div>
    </div>
  );
}

export default DashboardContent;
