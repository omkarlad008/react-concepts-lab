import { DashboardCard } from "../components/dashboard/DashboardCard";

/**
 * This array stores dashboard card data.
 *
 * Later, we can fetch similar data from an API.
 * For now, static data helps us practise rendering lists with .map().
 */
const dashboardCards = [
  {
    id: "concepts",
    title: "Concepts",
    value: "6",
    description: "Core React concepts introduced in the first module.",
  },
  {
    id: "tasks",
    title: "Practice Tasks",
    value: "3",
    description: "Small coding tasks we will build step by step.",
  },
  {
    id: "notes",
    title: "Learning Notes",
    value: "1",
    description: "Interview-style notes we will write after this step.",
  },
];

/**
 * DashboardPage is a page-level component.
 *
 * Page components usually combine smaller reusable components
 * and decide what data should be shown on the screen.
 */
export function DashboardPage() {
  return (
    <section className="dashboard-page">
      <div className="page-intro">
        <p className="eyebrow">Module 1</p>
        <h2>Components, JSX, Props & Composition</h2>
        <p>
          This first screen is intentionally simple. It helps us understand how
          React apps are built from small reusable components.
        </p>
      </div>

      <div className="dashboard-grid">
        {dashboardCards.map((card) => (
          <DashboardCard
            key={card.id}
            title={card.title}
            value={card.value}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}