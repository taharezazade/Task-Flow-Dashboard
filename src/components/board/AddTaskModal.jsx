import { CloseCircle } from "iconsax-reactjs";
import { useEffect, useRef, useState } from "react";
import { useBoard } from "../../context/BoardContext";

function AddTaskModal({ isOpen, onClose, mode, task }) {
  const { createTask, updateTask, columns } = useBoard();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const [columnId, setColumnId] = useState("todo");

  const handleClose = () => {
    setTitle("");
    setDescription("");
    setPriority("medium");
    setColumnId("todo");
    onClose();
  };

  useEffect(() => {
    if (mode === "edit" && task) {
      setTitle(task.title || "");
      setDescription(task.description || "");
      setPriority(task.priority || "medium");
      setColumnId(task.columnId || "todo");
    }

    if (mode === "create") {
      setTitle("");
      setDescription("");
      setPriority("medium");
      setColumnId("todo");
    }
  }, [task, mode, isOpen]);

  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (mode === "edit") {
      updateTask(task.id, {
        title,
        description,
        priority,
        columnId,
      });
    } else {
      createTask({
        title,
        description,
        priority,
        columnId,
      });
    }

    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={handleClose}
    >
      <div
        className="bg-base-100 w-11/12 max-w-xl rounded-3xl border border-base-300 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b border-base-300 px-6 py-4">
          <h3 className="text-xl font-bold text-primary">
            {mode === "edit" ? "ویرایش تسک" : "افزودن تسک جدید"}
          </h3>

          <button onClick={handleClose} className="btn btn-ghost btn-circle">
            <CloseCircle size={28} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <input
            value={title}
            ref={inputRef}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان تسک"
            className="input input-bordered w-full"
          />

          <textarea
            value={description}
            ref={inputRef}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="توضیحات"
            className="textarea textarea-bordered w-full"
          />

          {/* ستون */}
          <select
            value={columnId}
            onChange={(e) => setColumnId(e.target.value)}
            className="select select-bordered w-full"
          >
            {columns?.map((col) => (
              <option key={col.id} value={col.id} ref={inputRef}>
                {col.title}
              </option>
            ))}
          </select>

          {/* اولویت */}
          <select
            value={priority}
            ref={inputRef}
            onChange={(e) => setPriority(e.target.value)}
            className="select select-bordered w-full"
          >
            <option value="low">کم</option>
            <option value="medium">متوسط</option>
            <option value="high">زیاد</option>
          </select>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-base-300 px-6 py-4">
          <button onClick={handleClose} className="btn btn-ghost">
            انصراف
          </button>

          <button onClick={handleSubmit} className="btn btn-primary">
            {mode === "edit" ? "ذخیره تغییرات" : "افزودن تسک"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
