import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { TaskFilterControls } from "./TaskFilterControls";

describe("TaskFilterControls", () => {
  it("renders all filter buttons", () => {
    render(
      <TaskFilterControls
        selectedFilter="all"
        onFilterChange={() => undefined}
      />,
    );

    expect(screen.getByRole("button", { name: /^all$/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /^active$/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^completed$/i }),
    ).toBeInTheDocument();
  });

  it("highlights the selected filter", () => {
    render(
      <TaskFilterControls
        selectedFilter="completed"
        onFilterChange={() => undefined}
      />,
    );

    expect(screen.getByRole("button", { name: /^completed$/i })).toHaveClass(
      "active",
    );
  });

  it("calls onFilterChange when a filter button is clicked", async () => {
    const user = userEvent.setup();
    const handleFilterChange = vi.fn();

    render(
      <TaskFilterControls
        selectedFilter="all"
        onFilterChange={handleFilterChange}
      />,
    );

    await user.click(screen.getByRole("button", { name: /^active$/i }));

    expect(handleFilterChange).toHaveBeenCalledWith("active");
  });
});