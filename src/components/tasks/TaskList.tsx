import type { Task } from "../../types/task";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
};

/**
 * TaskList renders a list of TaskItem components.
 *
 * It also handles the empty state when there are no tasks left.
 */
export function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks left</h3>
        <p>You deleted all tasks. We will add a task form in a later step.</p>
      </div>
    );
  }

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
}