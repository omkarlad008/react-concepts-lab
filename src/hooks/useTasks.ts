import { useEffect, useReducer } from "react";
import { initialTasks } from "../data/initialTasks";
import { tasksReducer } from "../reducers/tasksReducer";
import type { Task } from "../types/task";

const TASKS_STORAGE_KEY = "react-concepts-lab-tasks";

/**
 * loadInitialTasks reads saved tasks from localStorage.
 *
 * If nothing is saved, or if something goes wrong,
 * it safely falls back to the original initialTasks.
 */
function loadInitialTasks(): Task[] {
  try {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);

    if (!storedTasks) {
      return initialTasks;
    }

    const parsedTasks = JSON.parse(storedTasks) as Task[];

    if (!Array.isArray(parsedTasks)) {
      return initialTasks;
    }

    return parsedTasks;
  } catch {
    return initialTasks;
  }
}

/**
 * useTasks manages task state with useReducer and localStorage.
 *
 * This custom hook keeps App.tsx cleaner by hiding task reducer
 * and persistence logic in one reusable place.
 */
export function useTasks() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks, loadInitialTasks);

  /**
   * Save tasks whenever they change.
   */
  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  function addTask(newTask: Task) {
    dispatch({
      type: "add_task",
      payload: newTask,
    });
  }

  function toggleTask(taskId: string) {
    dispatch({
      type: "toggle_task",
      payload: {
        taskId,
      },
    });
  }

  function deleteTask(taskId: string) {
    dispatch({
      type: "delete_task",
      payload: {
        taskId,
      },
    });
  }

  function clearCompletedTasks() {
    dispatch({
      type: "clear_completed",
    });
  }

  function resetTasks() {
    localStorage.removeItem(TASKS_STORAGE_KEY);
    window.location.reload();
  }

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompletedTasks,
    resetTasks,
  };
}