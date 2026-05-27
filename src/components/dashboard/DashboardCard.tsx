type DashboardCardProps = {
  /**
   * Main heading shown on the card.
   */
  title: string;

  /**
   * Main value shown on the card.
   * We keep it as string so it can support values like "3", "80%", or "Soon".
   */
  value: string;

  /**
   * Short explanation shown below the value.
   */
  description: string;
};

/**
 * DashboardCard is a reusable component.
 *
 * Instead of creating three different cards manually,
 * we pass different props to the same component.
 */
export function DashboardCard({
  title,
  value,
  description,
}: DashboardCardProps) {
  return (
    <article className="dashboard-card">
      <h2>{title}</h2>
      <strong>{value}</strong>
      <p>{description}</p>
    </article>
  );
}