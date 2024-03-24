import { internalApi } from "@/config/axios";
import { UserType } from "@/types/user";
import { handleServiceError } from "./errorHandler";

export const fetchUser = async (): Promise<UserType> => {
  return internalApi.get("/api/user").then((response) => {
    return response.data;
  }).catch((error) => {
    throw handleServiceError(error)
  });
}