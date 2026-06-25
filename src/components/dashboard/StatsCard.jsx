import { default as CountUp } from "react-countup";

function StatsCard({ title, value }) {
  const SafeCountUp = CountUp?.default ?? CountUp;
  const safeValue = typeof value === "number" ? value : 0;
  return (
    <div className="card bg-base-100 border-2 border-secondary/30 animate__animated animate__fadeIn">
      <div className="card-body flex flex-row items-center justify-between">
        <h3 className="text-base-content/80 font-medium">{title}</h3>

        <span className="text-3xl font-bold">
          <SafeCountUp
            start={0}
            end={safeValue}
            duration={7}
            separator=","
            enableScrollSpy
            scrollSpyOnce
          />
        </span>
      </div>
    </div>
  );
}

export default StatsCard;
