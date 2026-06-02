import { memo } from "react";
import { Link } from "react-router-dom";
import type { Task } from "../../types/task";

type TaskItemProps = {
  task: Task;
  onToggle: (taskId: string) => void;
  onDelete: (taskId: string) => void;
};

/**
 * TaskItem displays one task.
 *
 * React.memo prevents unchanged task items from re-rendering when possible.
 */
export const TaskItem = memo(function TaskItem({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <article className="task-item">
      <div className="task-item-content">
        <div className="task-badges">
          <span
            className={`task-status ${
              task.isCompleted ? "completed" : "active"
            }`}
          >
            {task.isCompleted ? "Completed" : "Active"}
          </span>

          <span className={`priority-badge ${task.priority}`}>
            {task.priority}
          </span>
        </div>

        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>

      <div className="task-actions">
        <Link className="secondary-button link-button" to={`/tasks/${task.id}`}>
          View details
        </Link>

        <button
          type="button"
          className="secondary-button"
          onClick={() => onToggle(task.id)}
        >
          {task.isCompleted ? "Mark active" : "Mark complete"}
        </button>

        <button
          type="button"
          className="danger-button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
});