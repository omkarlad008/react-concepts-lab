import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";
import { DashboardPage } from "./DashboardPage";
import type { Task } from "../types/task";

const sampleTasks: Task[] = [
  {
    id: "task-1",
    title: "Active task",
    description: "This task is still active.",
    priority: "medium",
    isCompleted: false,
  },
  {
    id: "task-2",
    title: "Completed task",
    description: "This task is already completed.",
    priority: "high",
    isCompleted: true,
  },
];

function renderDashboard() {
  return render(
    <MemoryRouter>
      <DashboardPage
        tasks={sampleTasks}
        onAddTask={vi.fn()}
        onToggleTask={vi.fn()}
        onDeleteTask={vi.fn()}
        onClearCompletedTasks={vi.fn()}
        onResetTasks={vi.fn()}
      />
    </MemoryRouter>,
  );
}

describe("DashboardPage", () => {
  it("renders task counts", () => {
    renderDashboard();

    expect(screen.getByText("Active Tasks")).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^completed$/i }),).toBeInTheDocument();
    expect(screen.getByText("Active task")).toBeInTheDocument();
    expect(screen.getByText("Completed task")).toBeInTheDocument();
  });

  it("filters active tasks", async () => {
    const user = userEvent.setup();

    renderDashboard();

    await user.click(screen.getByRole("button", { name: /^active$/i }));

    expect(screen.getByText("Active task")).toBeInTheDocument();
    expect(screen.queryByText("Completed task")).not.toBeInTheDocument();
  });

  it("filters completed tasks", async () => {
    const user = userEvent.setup();

    renderDashboard();

    await user.click(screen.getByRole("button", { name: /^completed$/i }));

    expect(screen.getByText("Completed task")).toBeInTheDocument();
    expect(screen.queryByText("Active task")).not.toBeInTheDocument();
  });

  it("calls clear completed handler", async () => {
    const user = userEvent.setup();
    const handleClearCompletedTasks = vi.fn();

    render(
      <MemoryRouter>
        <DashboardPage
          tasks={sampleTasks}
          onAddTask={vi.fn()}
          onToggleTask={vi.fn()}
          onDeleteTask={vi.fn()}
          onClearCompletedTasks={handleClearCompletedTasks}
          onResetTasks={vi.fn()}
        />
      </MemoryRouter>,
    );

    await user.click(screen.getByRole("button", { name: /^clear completed$/i }));

    expect(handleClearCompletedTasks).toHaveBeenCalledOnce();
  });
});