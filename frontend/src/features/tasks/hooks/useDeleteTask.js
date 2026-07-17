import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTask } from "../services/deleteTask";
import { taskKeys } from "../queries/keys";

export function useDeleteTask() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: taskKeys.lists(),
      });
    },
  });
}
