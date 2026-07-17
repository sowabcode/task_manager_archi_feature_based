import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../core/stores/authStore";

export function ProtectedRoute({ children }) {
  const user = useAuthStore((state) => state.user);
  const isAuthLoading = useAuthStore((state) => state.isAuthLoading);

  if (isAuthLoading) {
    return <p>Chargement...</p>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
