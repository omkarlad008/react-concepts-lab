import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppShell } from "./components/layout/AppShell";
import { ConceptsPage } from "./pages/ConceptsPage";
import { DashboardPage } from "./pages/DashboardPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { NotesPage } from "./pages/NotesPage";
import { SettingsPage } from "./pages/SettingsPage";

/**
 * App is the root component of our React application.
 *
 * In Step 5, we add React Router so the app can display
 * different pages without refreshing the browser.
 */
function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/concepts" element={<ConceptsPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppShell>
    </BrowserRouter>
  );
}

export default App;