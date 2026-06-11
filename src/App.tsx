import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { ThemeProvider } from "./context/ThemeProvider";
import { useTasks } from "./hooks/useTasks";
import { ApiPracticePage } from "./pages/ApiPracticePage";
import { ConceptsPage } from "./pages/ConceptsPage";
import { DashboardPage } from "./pages/DashboardPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NotesPage } from "./pages/NotesPage";
import { SettingsPage } from "./pages/SettingsPage";
import { TaskDetailPage } from "./pages/TaskDetailPage";

/**
 * App is the root component of our React application.
 *
 * In Step 10, task reducer and localStorage persistence are moved
 * into the custom useTasks hook.
 */
function App() {
  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    clearCompletedTasks,
    resetTasks,
  } = useTasks();

  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <AppShell>
          <Routes>
            <Route
              path="/"
              element={
                <DashboardPage
                  tasks={tasks}
                  onAddTask={addTask}
                  onToggleTask={toggleTask}
                  onDeleteTask={deleteTask}
                  onClearCompletedTasks={clearCompletedTasks}
                  onResetTasks={resetTasks}
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
                  onToggleTask={toggleTask}
                  onDeleteTask={deleteTask}
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