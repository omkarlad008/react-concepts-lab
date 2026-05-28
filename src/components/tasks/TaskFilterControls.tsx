import type { TaskFilter } from "../../types/task";

type TaskFilterControlsProps = {
  selectedFilter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
};

/**
 * taskFilters stores the available filter options.
 *
 * Because it uses the TaskFilter type, TypeScript will warn us
 * if we accidentally add an invalid filter value.
 */
const taskFilters: TaskFilter[] = ["all", "active", "completed"];

/**
 * TaskFilterControls displays filter buttons for the task list.
 *
 * It does not own the selected filter state.
 * The parent component owns the state and passes it down through props.
 */
export function TaskFilterControls({
  selectedFilter,
  onFilterChange,
}: TaskFilterControlsProps) {
  return (
    <div className="task-filter-controls" aria-label="Task filters">
      {taskFilters.map((filter) => {
        const isSelected = selectedFilter === filter;

        return (
          <button
            key={filter}
            type="button"
            className={`task-filter-button ${isSelected ? "active" : ""}`}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}