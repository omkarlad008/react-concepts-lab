import { memo } from "react";

type DashboardCardProps = {
  title: string;
  value: string;
  description: string;
};

/**
 * DashboardCard displays one summary card.
 *
 * React.memo prevents this component from re-rendering when its props
 * have not changed.
 */
export const DashboardCard = memo(function DashboardCard({
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
});