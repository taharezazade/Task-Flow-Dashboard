import { AddSquare, Setting2 } from "iconsax-reactjs";

function BoardHeader({ board, onAddTask, sortType, setSortType }) {
  return (
    <div className="bg-base-100 rounded-xl border border-base-300 p-2 animate__animated animate__fadeIn">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="w-full md:w-fit">
          <h1 className="text-2xl font-bold">{board.title}</h1>
          <p className="text-sm opacity-70 mt-1">{board.description}</p>
        </div>

        <div className="flex flex-col lg:flex-row w-full md:w-fit gap-2">
          {/* Sort UI (mobile friendly) */}
          <div className="flex justify-end">
            <select
              className="select select-bordered w-full md:w-40"
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="newest">جدیدترین</option>
              <option value="oldest">قدیمی‌ترین</option>
              <option value="priority">اولویت</option>
            </select>
          </div>
          <span className="flex flex-row">
            <button className="btn btn-primary" onClick={onAddTask}>
              <AddSquare size={20} />
              تسک جدید
            </button>
            <button className="btn btn-ghost">
              <Setting2 size={20} />
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BoardHeader;
