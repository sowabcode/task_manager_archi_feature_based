import { api } from "../../../core/api/axios";
import { AUTH_ENDPOINTS } from "../constants/endpoints";

export async function currentUser() {
  const { data } = await api.get(AUTH_ENDPOINTS.ME);

  return data.data;
}
