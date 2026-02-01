import { LineChart } from "./line-chart";

function BarChart() {
  return <div>Bar Chart</div>
}

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <LineChart />
      <BarChart />
    </div>
  );
}