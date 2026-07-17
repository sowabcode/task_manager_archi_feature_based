import { useQuery } from "@tanstack/react-query";
import { taskKeys } from "../queries/keys";
import { getTasks } from "../services/getTasks";

export function useTasks() {
  return useQuery({
    queryKey: taskKeys.lists(),
    queryFn: getTasks,
  });
}
