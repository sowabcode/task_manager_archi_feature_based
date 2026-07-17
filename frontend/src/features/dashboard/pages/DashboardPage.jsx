import { Link } from "react-router-dom";
import { useAuthStore } from "../../../core/stores/authStore";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      <h1>Dashboard</h1>

      <Link to="/tasks">Mes tâches</Link>
    </>
  );
}
