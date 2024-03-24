import { internalApi } from "@/config/axios";
import { ProductsResponse } from "@/types/apiResponse";
import { handleServiceError } from "./errorHandler";
import { FilterProductType } from "@/types/products";
import { removeEmpty } from "@/utils/stringUtils";

export const fetchSearchProductList = async (filter: FilterProductType): Promise<ProductsResponse> => {
  const params = removeEmpty(filter) as any;

  return internalApi.get("/api/products?" + new URLSearchParams(params))
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      handleServiceError(error);
    });
};
