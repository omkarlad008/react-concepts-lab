import { describe, expect, it } from "vitest";
import { tasksReducer } from "./tasksReducer";
import type { Task } from "../types/task";

const sampleTasks: Task[] = [
  {
    id: "task-1",
    title: "Learn components",
    description: "Practise React components.",
    priority: "low",
    isCompleted: false,
  },
  {
    id: "task-2",
    title: "Learn reducer",
    description: "Practise reducer actions.",
    priority: "high",
    isCompleted: true,
  },
];

describe("tasksReducer", () => {
  it("adds a new task to the beginning of the list", () => {
    const newTask: Task = {
      id: "task-3",
      title: "Write tests",
      description: "Practise Vitest and React Testing Library.",
      priority: "medium",
      isCompleted: false,
    };

    const result = tasksReducer(sampleTasks, {
      type: "add_task",
      payload: newTask,
    });

    expect(result).toHaveLength(3);
    expect(result[0]).toEqual(newTask);
  });

  it("toggles a task completion status", () => {
    const result = tasksReducer(sampleTasks, {
      type: "toggle_task",
      payload: {
        taskId: "task-1",
      },
    });

    expect(result[0].isCompleted).toBe(true);
    expect(result[1].isCompleted).toBe(true);
  });

  it("deletes a task by id", () => {
    const result = tasksReducer(sampleTasks, {
      type: "delete_task",
      payload: {
        taskId: "task-1",
      },
    });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("task-2");
  });

  it("clears completed tasks", () => {
    const result = tasksReducer(sampleTasks, {
      type: "clear_completed",
    });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("task-1");
  });

  it("does not mutate the original task array", () => {
    const result = tasksReducer(sampleTasks, {
      type: "delete_task",
      payload: {
        taskId: "task-1",
      },
    });

    expect(result).not.toBe(sampleTasks);
    expect(sampleTasks).toHaveLength(2);
  });
});