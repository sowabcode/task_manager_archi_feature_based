import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { login } from "../services/login";
import { authKeys } from "../queries/keys";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: ({ accessToken }) => {
      localStorage.setItem("accessToken", accessToken);

      queryClient.invalidateQueries({
        queryKey: authKeys.currentUser(),
      });
      navigate("/tasks");
    },
  });
}
