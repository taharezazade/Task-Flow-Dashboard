import { boards } from "../../data/dashboardData";
import BoardPreviewCard from "./BoardPreviewCard";

function RecentBoards() {
  return (
    <div className="animate__animated animate__fadeIn">
      <h2 className="text-xl font-bold mb-4">بردهای اخیر</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {boards.map((board) => (
          <BoardPreviewCard key={board.id} board={board} />
        ))}
      </div>
    </div>
  );
}

export default RecentBoards;
