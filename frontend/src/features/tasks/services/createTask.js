import { api } from "../../../core/api/axios";
import { TASK_ENDPOINTS } from "../constants/endpoints";

export async function createTask(payload) {
  const { data } = await api.post(TASK_ENDPOINTS.CREATE, payload);

  return data;
}
