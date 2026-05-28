import { Link, useNavigate, useParams } from "react-router-dom";
import type { Task } from "../types/task";

type TaskDetailPageProps = {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
};

/**
 * TaskDetailPage displays one task based on the taskId in the URL.
 *
 * Example:
 * /tasks/task-1
 *
 * The "task-1" part is read using useParams().
 */
export function TaskDetailPage({
  tasks,
  onToggleTask,
  onDeleteTask,
}: TaskDetailPageProps) {
  const { taskId } = useParams<{ taskId: string }>();
  const navigate = useNavigate();

  /**
   * Find the task whose id matches the URL parameter.
   */
  const task = tasks.find((currentTask) => currentTask.id === taskId);

  if (!task) {
    return (
      <section className="content-page">
        <div className="empty-state">
          <h2>Task not found</h2>
          <p>
            The task you are looking for does not exist or may have been
            deleted.
          </p>

          <Link className="primary-link" to="/">
            Go back to dashboard
          </Link>
        </div>
      </section>
    );
  }

  /**
   * After deleting the current task, return the user to the dashboard.
   */
  function handleDeleteAndReturn() {
    onDeleteTask(task!.id);
    navigate("/");
  }

  return (
    <section className="content-page">
      <div className="page-intro">
        <p className="eyebrow">Task Detail</p>
        <h2>{task.title}</h2>
        <p>
          This page is rendered from a dynamic URL parameter:
          <strong> {task.id}</strong>
        </p>
      </div>

      <article className="task-detail-card">
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

        <div className="task-detail-section">
          <h3>Description</h3>
          <p>{task.description}</p>
        </div>

        <div className="task-detail-section">
          <h3>Task ID from URL</h3>
          <p>{taskId}</p>
        </div>

        <div className="task-detail-actions">
          <button
            type="button"
            className="secondary-button"
            onClick={() => onToggleTask(task.id)}
          >
            {task.isCompleted ? "Mark active" : "Mark complete"}
          </button>

          <button
            type="button"
            className="danger-button"
            onClick={handleDeleteAndReturn}
          >
            Delete task
          </button>

          <Link className="primary-link compact-link" to="/">
            Back to dashboard
          </Link>
        </div>
      </article>
    </section>
  );
}