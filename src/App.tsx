import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { ConceptsPage } from "./pages/ConceptsPage";
import { DashboardPage } from "./pages/DashboardPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NotesPage } from "./pages/NotesPage";
import { SettingsPage } from "./pages/SettingsPage";
import { TaskDetailPage } from "./pages/TaskDetailPage";
import { initialTasks } from "./data/initialTasks";
import type { Task } from "./types/task";

/**
 * App is the root component of our React application.
 *
 * In Step 6, App owns the main tasks state because both
 * DashboardPage and TaskDetailPage need access to the same task data.
 */
function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  /**
   * Adds a new task to the beginning of the task list.
   */
  function handleAddTask(newTask: Task) {
    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  /**
   * Toggles a task between active and completed.
   */
  function handleToggleTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, isCompleted: !task.isCompleted }
          : task,
      ),
    );
  }

  /**
   * Deletes a task from the main task list.
   */
  function handleDeleteTask(taskId: string) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId),
    );
  }

  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage
                tasks={tasks}
                onAddTask={handleAddTask}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
              />
            }
          />

          <Route path="/concepts" element={<ConceptsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/settings" element={<SettingsPage />} />

          <Route
            path="/tasks/:taskId"
            element={
              <TaskDetailPage
                tasks={tasks}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
              />
            }
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;