import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../services/createTask";
import { taskKeys } from "../queries/keys";

export function useCreateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: taskKeys.lists(),
      });
    },
  });
}
