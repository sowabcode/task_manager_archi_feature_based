import { api } from "../../../core/api/axios";
import { TASK_ENDPOINTS } from "../constants/endpoints";

export async function deleteTask(id) {
  await api.delete(TASK_ENDPOINTS.DELETE(id));
}
