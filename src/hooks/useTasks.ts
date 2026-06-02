import { useCallback, useEffect, useMemo, useReducer } from "react";
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
 * In Step 11, task action handlers are wrapped with useCallback.
 * This gives child components stable function references between renders.
 */
export function useTasks() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks,
    loadInitialTasks,
  );

  /**
   * Save tasks whenever they change.
   */
  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback((newTask: Task) => {
    dispatch({
      type: "add_task",
      payload: newTask,
    });
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    dispatch({
      type: "toggle_task",
      payload: {
        taskId,
      },
    });
  }, []);

  const deleteTask = useCallback((taskId: string) => {
    dispatch({
      type: "delete_task",
      payload: {
        taskId,
      },
    });
  }, []);

  const clearCompletedTasks = useCallback(() => {
    dispatch({
      type: "clear_completed",
    });
  }, []);

  const resetTasks = useCallback(() => {
    localStorage.removeItem(TASKS_STORAGE_KEY);
    window.location.reload();
  }, []);

  /**
   * Memoise the returned object so consumers receive a stable object
   * unless tasks or one of the handlers changes.
   */
  return useMemo(
    () => ({
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      clearCompletedTasks,
      resetTasks,
    }),
    [
      tasks,
      addTask,
      toggleTask,
      deleteTask,
      clearCompletedTasks,
      resetTasks,
    ],
  );
}