import { useState } from "react";
import type { Task, TaskPriority } from "../../types/task";

type TaskFormProps = {
  onAddTask: (task: Task) => void;
};

type TaskFormState = {
  title: string;
  description: string;
  priority: TaskPriority;
};

/**
 * TaskForm is our first controlled form component.
 *
 * Controlled form means React state controls the input values.
 * Whatever the user types is stored in component state.
 */
export function TaskForm({ onAddTask }: TaskFormProps) {
  const [formData, setFormData] = useState<TaskFormState>({
    title: "",
    description: "",
    priority: "medium",
  });

  const [error, setError] = useState("");

  /**
   * handleTitleChange updates only the title field.
   *
   * We keep the other fields unchanged using the spread operator.
   */
  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((currentFormData) => ({
      ...currentFormData,
      title: event.target.value,
    }));
  }

  /**
   * handleDescriptionChange updates only the description field.
   */
  function handleDescriptionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) {
    setFormData((currentFormData) => ({
      ...currentFormData,
      description: event.target.value,
    }));
  }

  /**
   * handlePriorityChange updates the selected priority.
   *
   * event.target.value is typed as string by default, so we tell TypeScript
   * that it is one of our allowed TaskPriority values.
   */
  function handlePriorityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setFormData((currentFormData) => ({
      ...currentFormData,
      priority: event.target.value as TaskPriority,
    }));
  }

  /**
   * handleSubmit runs when the form is submitted.
   *
   * event.preventDefault() stops the browser from refreshing the page.
   */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const trimmedTitle = formData.title.trim();
    const trimmedDescription = formData.description.trim();

    if (trimmedTitle.length === 0) {
      setError("Task title is required.");
      return;
    }

    const newTask: Task = {
      id: `task-${Date.now()}`,
      title: trimmedTitle,
      description:
        trimmedDescription.length > 0
          ? trimmedDescription
          : "No description added yet.",
      priority: formData.priority,
      isCompleted: false,
    };

    onAddTask(newTask);

    setFormData({
      title: "",
      description: "",
      priority: "medium",
    });

    setError("");
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <div>
          <p className="eyebrow">Create</p>
          <h2>Add New Task</h2>
        </div>

        <p>Practise controlled inputs and form submission.</p>
      </div>

      <div className="form-grid">
        <label className="form-field">
          <span>Task title</span>
          <input
            type="text"
            value={formData.title}
            onChange={handleTitleChange}
            placeholder="Example: Practise controlled components"
          />
        </label>

        <label className="form-field">
          <span>Priority</span>
          <select value={formData.priority} onChange={handlePriorityChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>

      <label className="form-field">
        <span>Description</span>
        <textarea
          value={formData.description}
          onChange={handleDescriptionChange}
          placeholder="Write a short task description"
          rows={3}
        />
      </label>

      {error.length > 0 && <p className="form-error">{error}</p>}

      <button type="submit" className="primary-button">
        Add task
      </button>
    </form>
  );
}