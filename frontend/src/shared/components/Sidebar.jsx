import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../core/stores/authStore";

export default function Sidebar() {
  const user = useAuthStore((state) => state.user);

  return (
    <aside>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <br />
        <NavLink to="/tasks">Tasks</NavLink>
      </nav>
    </aside>
  );
}
