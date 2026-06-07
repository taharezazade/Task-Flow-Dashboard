import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsSection from "../components/dashboard/StatsSection";
import RecentBoards from "../components/dashboard/RecentBoards";
import DashboardContent from "../components/dashboard/DashboardContent";

function DashboardPage() {
  return (
    <section className="space-y-8">
      <DashboardHeader />

      <StatsSection />

      <RecentBoards />

      <DashboardContent />
    </section>
  );
}

export default DashboardPage;
