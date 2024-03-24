import { internalApi } from "@/config/axios";
import { handleServiceError } from "./errorHandler";

export const purchaseProductsFromCart = async (productIds: string[]) => {
  return internalApi.post("/api/purchase", productIds).then((response) => {
    return response.data;
  }).catch((error) => {
    throw handleServiceError(error);
  });
}