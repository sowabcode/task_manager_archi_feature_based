import { api } from "../../../core/api/axios";
import { TASK_ENDPOINTS } from "../constants/endpoints";

export async function getTasks() {
  const { data } = await api.get(TASK_ENDPOINTS.LIST);

  return data.data;
}
