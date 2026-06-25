import { useState, useMemo } from "react";
import { useBoard } from "../context/BoardContext";
import { motion } from "framer-motion";

import BoardColumn from "../components/board/BoardColumn";
import BoardHeader from "../components/board/BoardHeader";
import AddTaskModal from "../components/board/AddTaskModal";
import TaskCard from "../components/board/TaskCard";

function BoardsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [sortType, setSortType] = useState("newest");

  const { tasks, columns, boards } = useBoard();

  const currentBoard = boards?.[0];

  const sortedTasks = useMemo(() => {
    const data = [...tasks];

    switch (sortType) {
      case "newest":
        return data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );

      case "oldest":
        return data.sort(
          (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        );

      case "priority": {
        const order = { high: 3, medium: 2, low: 1 };
        return data.sort((a, b) => order[b.priority] - order[a.priority]);
      }

      default:
        return data;
    }
  }, [tasks, sortType]);

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-col gap-4 overflow-x-auto pb-4">
      <BoardHeader
        board={currentBoard}
        sortType={sortType}
        setSortType={setSortType}
        onAddTask={() => {
          setSelectedTask(null);
          setIsModalOpen(true);
        }}
      />

      <div
        className="
        animate__animated animate__fadeIn
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
        "
      >
        {columns.map((col) => (
          <BoardColumn
            key={col.id}
            id={col.id}
            title={col.title}
            count={tasks.filter((t) => t.columnId === col.id).length}
            className=""
          >
            {sortedTasks
              .filter((t) => t.columnId === col.id)
              .map((task) => (
                <TaskCard key={task.id} task={task} onEdit={handleEditTask} />
              ))}
          </BoardColumn>
        ))}
      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedTask(null);
        }}
        mode={selectedTask ? "edit" : "create"}
        task={selectedTask}
      />
    </div>
  );
}

export default BoardsPage;
