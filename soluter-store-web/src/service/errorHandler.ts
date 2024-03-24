import { HttpStatusCode } from "axios";
import { useBearStore } from "@/store/store";

export const handleServiceError = (error: any) : Error => {
  if (error?.response) {
    if (error?.response?.status === HttpStatusCode.Unauthorized) {
      useBearStore.getState().logout();
      return new Error("Sessão expirada. Faça login novamente.");
    }

    return new Error(error.response.data);
  }

  return new Error(error.message);
};
