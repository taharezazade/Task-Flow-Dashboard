import { createContext, useContext, useState } from "react";
import {
  tasks as initialTasks,
  boards as initialBoards,
  columns as initialColumns,
} from "../data/boardData";

const BoardContext = createContext();

export function BoardProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [boards] = useState(initialBoards);
  const [columns] = useState(initialColumns);

  const createTask = ({ title, description, priority, columnId }) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      description,
      priority,
      columnId,
      createdAt: new Date().toISOString(),
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const updateTask = (id, updatedData) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, ...updatedData, createdAt: task.createdAt }
          : task,
      ),
    );
  };

  return (
    <BoardContext.Provider
      value={{
        tasks,
        setTasks,
        boards,
        columns,
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

export const useBoard = () => useContext(BoardContext);
