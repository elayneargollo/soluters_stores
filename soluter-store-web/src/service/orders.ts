import { internalApi } from "@/config/axios";
import { OrderType } from "@/types/orders";
import { handleServiceError } from "./errorHandler";

export const fetchOrders = async (userId: string): Promise<OrderType[]> => {
  return internalApi.get(`/api/orders/${userId}`).then((response) => {
    return response.data;
  }).catch((error) => {
    throw handleServiceError(error);
  });
};
