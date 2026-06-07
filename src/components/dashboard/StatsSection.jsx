import StatsCard from "./StatsCard";
import { stats } from "../../data/dashboardData";

function StatsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((item) => (
        <StatsCard key={item.id} title={item.title} value={item.value} />
      ))}
    </div>
  );
}

export default StatsSection;
