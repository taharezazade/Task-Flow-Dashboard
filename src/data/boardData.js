export const boards = [
  {
    id: "board-1",
    title: "تسک فلو",
    description: "مدیریت توسعه و طراحی پروژه TaskFlow",
    members: 4,
  },
];

export const columns = [
  {
    id: "todo",
    title: "انجام شود",
    category: "todo",
  },
  {
    id: "in-progress",
    title: "در حال انجام",
    category: "progress",
  },
  {
    id: "review",
    title: "در انتظار بازبینی",
    category: "info",
  },
  {
    id: "done",
    title: "تکمیل شده",
    category: "success",
  },
];

export const tasks = [
  {
    id: "task-1",
    title: "طراحی داشبورد",
    description: "پیاده‌سازی کارت‌های آماری صفحه اصلی",
    columnId: "todo",
    priority: "high",
    createdAt: "2026-06-09T10:30:00.000Z",
  },

  {
    id: "task-2",
    title: "ساخت Navbar",
    description: "طراحی نسخه نهایی ناوبری پروژه",
    columnId: "in-progress",
    priority: "medium",
    createdAt: "2026-06-09T10:30:00.000Z",
  },

  {
    id: "task-3",
    title: "ریسپانسیو کردن Sidebar",
    description: "بهینه‌سازی برای موبایل و تبلت",
    columnId: "review",
    priority: "medium",
    createdAt: "2026-06-09T10:30:00.000Z",
  },

  {
    id: "task-4",
    title: "راه‌اندازی React Router",
    description: "اتصال صفحات و ساختار مسیرها",
    columnId: "done",
    priority: "low",
    createdAt: "2026-06-09T10:30:00.000Z",
  },
];
