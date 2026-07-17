import { useQuery } from "@tanstack/react-query";

import { authKeys } from "../queries/keys";
import { currentUser } from "../services/currentUser";

export function useCurrentUser() {
  return useQuery({
    queryKey: authKeys.currentUser(),
    queryFn: currentUser,
    retry: false,
  });
}
