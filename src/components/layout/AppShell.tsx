import type { ReactNode } from "react";
import { AppHeader } from "./AppHeader";

type AppShellProps = {
  /**
   * children represents any React content placed inside AppShell.
   * In this step, DashboardPage is passed as the child.
   */
  children: ReactNode;
};

/**
 * AppShell is a layout component.
 *
 * Its job is to provide a consistent page structure:
 * header at the top and main content below it.
 */
export function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <AppHeader />

      <main id="main-content" className="app-main">{children}</main>
    </div>
  );
}