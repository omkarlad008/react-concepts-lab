import { AppShell } from "./components/layout/AppShell";
import { DashboardPage } from "./pages/DashboardPage";

/**
 * App is the root component of our React application.
 *
 * For now, it only renders the main layout and the Dashboard page.
 * Later, we will add React Router here to switch between multiple pages.
 */
function App() {
  return (
    <AppShell>
      <DashboardPage />
    </AppShell>
  );
}

export default App;