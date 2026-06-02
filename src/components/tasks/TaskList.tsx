import { memo } from "react";
import type { Task } from "../../types/task";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
};

/**
 * TaskList displays the list of tasks.
 *
 * React.memo helps avoid re-rendering the list when the props are unchanged.
 */
export const TaskList = memo(function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </div>
  );
});