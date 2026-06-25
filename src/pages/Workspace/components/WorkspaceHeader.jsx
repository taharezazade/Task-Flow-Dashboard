import {
  SearchNormal1,
  Add,
  More,
  Edit2,
  Trash,
  FolderOpen,
  People,
} from "iconsax-reactjs";

function WorkspaceHeader({ workspace = {}, onInvite, onEdit, onDelete }) {
  const {
    name = "ورک‌اسپیس‌ها",
    description,
    boardsCount = 0,
    membersCount = 0,
  } = workspace;

  return (
    <header className="bg-base-100 rounded-xl  p-6">
      {/* Top */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left */}
        <div className="flex items-center gap-5">
          {/* Avatar */}
          <div className="size-16 rounded-2xl flex bg-secondary items-center justify-center">
            <FolderOpen size={30} color="#fff" variant="TwoTone" />
          </div>

          {/* Info */}
          <div>
            <h1 className="text-xl font-bold">{name}</h1>

            <p className="text-sm text-base-content/50 mt-1">
              {description ? description : "توضیحاتی ثبت نشده است."}
            </p>

            <div className="flex gap-5 mt-2">
              <div className="flex items-center gap-2 text-sm">
                <FolderOpen size={18} />
                <span>
                  {boardsCount === 0
                    ? "هیچ بردی وجود ندارد."
                    : boardsCount + " " + "برد وجود دارد."}{" "}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <People size={18} />
                <span>
                  {membersCount === 0
                    ? "هیچ عضوی ندارد."
                    : membersCount + " " + "عضو دارد."}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}

          <label className="input input-primary rounded-2xl w-64">
            <SearchNormal1 size={18} />
            <input type="text" placeholder="در بردها جستجو کنید..." />
          </label>

          {/* Invite */}

          <button
            onClick={onInvite}
            className="btn btn-primary text-white rounded-2xl"
          >
            دعوت کردن
            <Add size={18} />
          </button>

          {/* Edit */}

          <button onClick={onEdit} className="btn btn-ghost rounded-2xl">
            <Edit2 size={18} />
          </button>

          {/* Delete */}

          <button
            onClick={onDelete}
            className="btn btn-error btn-outline rounded-2xl"
          >
            <Trash size={18} />
          </button>

          {/* More */}

          <button className="btn btn-ghost btn-square rounded-2xl">
            <More size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default WorkspaceHeader;
