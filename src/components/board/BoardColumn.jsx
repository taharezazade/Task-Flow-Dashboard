import { motion } from "framer-motion";

function BoardColumn({ id, title, count, children }) {
  const emptyMessages = {
    todo: "هیچ کاری برای شروع وجود ندارد.",
    "in-progress": "در حال حاضر کاری در حال انجام نیست.",
    review: "موردی برای بازبینی وجود ندارد.",
    done: "هنوز هیچ تسکی تکمیل نشده است.",
  };

  function getColumnColor(id) {
    switch (id) {
      case "todo":
        return "text-error";

      case "in-progress":
        return "text-warning";

      case "review":
        return "text-info";

      case "done":
        return "text-success";

      default:
        return "text-base-content";
    }
  }
  return (
    <div className=" bg-base-200 animate__animated animate__fadeIn rounded-xl p-2">
      <div className="flex justify-between items-start">
        <div className="flex justify-between w-full flex-row gap-1 items-center mb-4">
          <h3 className={`text-lg font-bold ${getColumnColor(id)}`}>{title}</h3>
          <span className="badge badge-primary badge-sm">{count} تسک</span>
        </div>
      </div>
      {count > 0 ? (
        <div className="space-y-3">{children}</div>
      ) : (
        <div className="border-2 border-dashed border-base-300 rounded-xl p-6 text-center">
          <p className="text-sm opacity-60">{emptyMessages[id]}</p>
        </div>
      )}
    </div>
  );
}

export default BoardColumn;
