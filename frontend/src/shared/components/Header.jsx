import { useAuthStore } from "../../core/stores/authStore";

export default function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="flex items-center justify-center mb-4">
      <h1 className="text-4xl font-semibold">Task Manager</h1>
    </header>
  );
}
