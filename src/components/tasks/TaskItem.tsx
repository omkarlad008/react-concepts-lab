import type { Task } from "../../types/task";

type TaskItemProps = {
  task: Task;
  onToggle: (taskId: string) => void;
  onDelete: (taskId: string) => void;
};

/**
 * TaskItem displays one task.
 *
 * It receives the task data through props.
 * It also receives event handler functions from the parent component.
 */
export function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
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
}