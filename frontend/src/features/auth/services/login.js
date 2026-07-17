import { api } from "../../../core/api/axios";
import { AUTH_ENDPOINTS } from "../constants/endpoints";

export async function login(credentials) {
  const { data } = await api.post(AUTH_ENDPOINTS.LOGIN, credentials);

  return data.data;
}
