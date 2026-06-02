import type { Task } from "../types/task";

/**
 * TaskAction describes every allowed task state update.
 *
 * This is a discriminated union.
 * The "type" field tells the reducer what kind of update to perform.
 */
export type TaskAction =
  | {
      type: "add_task";
      payload: Task;
    }
  | {
      type: "toggle_task";
      payload: {
        taskId: string;
      };
    }
  | {
      type: "delete_task";
      payload: {
        taskId: string;
      };
    }
  | {
      type: "clear_completed";
    };

/**
 * tasksReducer controls how task state changes.
 *
 * Important:
 * A reducer should be a pure function.
 * It receives the current state and an action,
 * then returns the next state without mutating the original state.
 */
export function tasksReducer(tasks: Task[], action: TaskAction): Task[] {
  switch (action.type) {
    case "add_task": {
      return [action.payload, ...tasks];
    }

    case "toggle_task": {
      return tasks.map((task) =>
        task.id === action.payload.taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      );
    }

    case "delete_task": {
      return tasks.filter((task) => task.id !== action.payload.taskId);
    }

    case "clear_completed": {
      return tasks.filter((task) => !task.isCompleted);
    }

    default: {
      return tasks;
    }
  }
}