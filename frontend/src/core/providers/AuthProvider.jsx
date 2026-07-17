import { useEffect } from "react";
import { useCurrentUser } from "../../features/auth";
import { useAuthStore } from "../stores/authStore";

export function AuthProvider({ children }) {
  const { data, isPending, isSuccess, isError } = useCurrentUser();

  const setUser = useAuthStore((state) => state.setUser);
  const setAuthLoading = useAuthStore((state) => state.setAuthLoading);

  useEffect(() => {
    setAuthLoading(isPending);

    if (isSuccess) {
      setUser(data);
    }

    if (isError) {
      setUser(null);
    }
  }, [isPending, isSuccess, isError, data, setUser, setAuthLoading]);

  return children;
}
