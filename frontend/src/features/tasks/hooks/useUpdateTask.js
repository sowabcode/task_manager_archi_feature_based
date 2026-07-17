import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTask } from "../services/updateTask";
import { taskKeys } from "../queries/keys";

export function useUpdateTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: taskKeys.lists(),
      });
    },
  });
}
