import { AddSquare, Additem, Buildings2 } from "iconsax-reactjs";

const QuickActions = () => {
  const handleCreateBoard = () => {
    console.log("Create Board");
  };

  const handleCreateTask = () => {
    console.log("Create Task");
  };

  const handleCreateWorkspace = () => {
    console.log("Create Workspace");
  };

  const actions = [
    {
      id: 1,
      title: "ایجاد برد جدید",
      description: "یک برد جدید برای مدیریت پروژه بساز",
      icon: AddSquare,
      action: handleCreateBoard,
    },

    {
      id: 2,
      title: "ایجاد تسک جدید",
      description: "یک تسک جدید به پروژه اضافه کن",
      icon: Additem,
      action: handleCreateTask,
    },

    {
      id: 3,
      title: "ایجاد ورک‌اسپیس",
      description: "یک فضای کاری جدید ایجاد کن",
      icon: Buildings2,
      action: handleCreateWorkspace,
    },
  ];

  return (
    <div className="card bg-base-100 border-2 border-secondary/30 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">عملیات سریع</h2>

        <div className="mt-4 flex flex-col gap-3">
          {actions.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                onClick={item.action}
                className="
                  flex
                  items-center
                  gap-4
                  cursor-pointer
                  rounded-xl
                  border-2
                  border-transparent
                  duration-300
                  transform-border
                  hover:border-2
                  hover:border-secondary/50
                  p-4
                  text-right
                  hover:bg-primary/10
                  transition-all
                "
              >
                <Icon
                  size="28"
                  color="currentColor"
                  variant="Bulk"
                  className="text-primary"
                />

                <div className="flex flex-col items-start">
                  <span className="font-semibold">{item.title}</span>

                  <span className="text-sm text-base-content/60">
                    {item.description}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
