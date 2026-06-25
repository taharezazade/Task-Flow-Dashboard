import { Edit, More, Trash } from "iconsax-reactjs";
import { useBoard } from "../../context/BoardContext";

function getPriorityBadge(priority) {
  switch (priority) {
    case "low":
      return <span className="badge badge-success">کم</span>;

    case "medium":
      return <span className="badge badge-warning">متوسط</span>;

    case "high":
      return <span className="badge badge-error">زیاد</span>;

    default:
      return <span className="badge">نامشخص</span>;
  }
}

function TaskCard({ task, onEdit }) {
  const { deleteTask } = useBoard();

  return (
    <div className="bg-base-100 border border-base-300 rounded-xl p-2 hover:shadow-md transition-all">
      {/* header */}
      <div className="flex justify-between items-center">
        <h4 className="font-semibold">{task.title}</h4>

        <div className="dropdown dropdown-end">
          <button className="btn btn-ghost btn-xs">
            <More size={20} />
          </button>

          <ul className="dropdown-content menu bg-base-200 shadow rounded-box w-32">
            <li>
              <button onClick={() => onEdit(task)}>
                <Edit size={18} />
                ویرایش
              </button>
            </li>

            <li>
              <button
                className="text-error"
                onClick={() => deleteTask(task.id)}
              >
                <Trash size={18} />
                حذف
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* body */}
      <p className="text-sm opacity-70 mt-2">{task.description}</p>

      {/* footer */}
      <div className="flex flex-col gap-2 items-start justify-items-end-safe mt-4">
        <div className="flex gap-1 items-center">
          <span>اولویت:</span>
          {getPriorityBadge(task.priority)}
        </div>
        {/* <div className="">Time</div> */}
        <span className="text-xs opacity-60">
          {new Date(task.createdAt).toLocaleString("fa-IR")}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;

// import { motion } from "framer-motion";

// <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}>
//   ...
// </motion.div>;
