function StatsCard({ title, value, icon }) {
  return (
    <div className="card bg-base-100 shadow-sm border-2 border-secondary/30">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <span className="text-3xl">{icon}</span>

          <span className="text-3xl font-bold">{value}</span>
        </div>

        <h3 className="text-base-content/70 font-medium mt-2">{title}</h3>
      </div>
    </div>
  );
}

export default StatsCard;
