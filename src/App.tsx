import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { ThemeProvider } from "./context/ThemeContext";
import { initialTasks } from "./data/initialTasks";
import { tasksReducer } from "./reducers/tasksReducer";
import { ApiPracticePage } from "./pages/ApiPracticePage";
import { ConceptsPage } from "./pages/ConceptsPage";
import { DashboardPage } from "./pages/DashboardPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NotesPage } from "./pages/NotesPage";
import { SettingsPage } from "./pages/SettingsPage";
import { TaskDetailPage } from "./pages/TaskDetailPage";
import type { Task } from "./types/task";

/**
 * App is the root component of our React application.
 *
 * In Step 9, task state is managed with useReducer instead of useState.
 * This keeps all task update logic inside one reducer function.
 */
function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  function handleAddTask(newTask: Task) {
    dispatch({
      type: "add_task",
      payload: newTask,
    });
  }

  function handleToggleTask(taskId: string) {
    dispatch({
      type: "toggle_task",
      payload: {
        taskId,
      },
    });
  }

  function handleDeleteTask(taskId: string) {
    dispatch({
      type: "delete_task",
      payload: {
        taskId,
      },
    });
  }

  function handleClearCompletedTasks() {
    dispatch({
      type: "clear_completed",
    });
  }

  return (
    <ThemeProvider>
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
                  onClearCompletedTasks={handleClearCompletedTasks}
                />
              }
            />

            <Route path="/concepts" element={<ConceptsPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/api-practice" element={<ApiPracticePage />} />

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
    </ThemeProvider>
  );
}

export default App;