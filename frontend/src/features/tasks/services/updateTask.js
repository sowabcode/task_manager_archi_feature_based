import { api } from "../../../core/api/axios";
import { TASK_ENDPOINTS } from "../constants/endpoints";

export async function updateTask({ id, payload }) {
  const { data } = await api.patch(TASK_ENDPOINTS.UPDATE(id), payload);

  return data.data;
}
