import { Link } from "react-router-dom";
import { Kanban, Profile2User, Task, ArrowLeft2 } from "iconsax-reactjs";

const BoardPreviewCard = ({ board }) => {
  return (
    <Link
      to={`/boards/${board.id}`}
      className="card bg-base-100 border-2 border-secondary/30 animate__animated animate__fadeIn"
    >
      <div className="card-body">
        <div className="flex items-center justify-between">
          <div className="badge badge-primary">برد</div>

          <Kanban size="24" color="currentColor" variant="Bulk" />
        </div>

        <h3 className="card-title mt-2">{board.title}</h3>

        <div className="mt-4 flex flex-col gap-2 text-sm text-base-content/70">
          <div className="flex items-center gap-2">
            <Task size="18" color="currentColor" variant="Outline" />

            <span>{board.tasks} تسک</span>
          </div>

          <div className="flex items-center gap-2">
            <Profile2User size="18" color="currentColor" variant="Outline" />

            <span>{board.members} عضو</span>
          </div>
        </div>

        <div className="divider my-2"></div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-base-content/60">آخرین فعالیت</span>

          <span>{board.lastActivity}</span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-primary">
          <span>مشاهده برد</span>

          <ArrowLeft2 size="18" color="currentColor" />
        </div>
      </div>
    </Link>
  );
};

export default BoardPreviewCard;
