import { api } from "../../../core/api/axios";
import { AUTH_ENDPOINTS } from "../constants/endpoints";

export async function logout() {
  await api.post(AUTH_ENDPOINTS.LOGOUT);
}
