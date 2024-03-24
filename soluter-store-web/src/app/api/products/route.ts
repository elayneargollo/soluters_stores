import { apiClient } from "@/config/axios";
import { AxiosResponse } from "axios";
import { FilterProductType } from "@/types/products";
import { removeEmpty } from "@/utils/stringUtils";
import { NextRequest, NextResponse } from "next/server";


const fetchSearchProductList = async (filter: FilterProductType): Promise<AxiosResponse> => {
  try {
    const response = await apiClient.get("/products", {
      withCredentials: true,
      params: filter,
    });
    return response;
  } catch (error) {
    throw new Error(`Erro ao buscar dados da API: ${error}`);
  }
};

export const GET = async (req: NextRequest) => {

  const params = req.nextUrl.searchParams;

  const filter: any = {
    name: params.get('name'),
    description: params.get('description'),
    price: params.get('price'),
  };
  const filterSearch = removeEmpty(filter) as FilterProductType;

  try {
    const response = await fetchSearchProductList(filterSearch);

    return new NextResponse(JSON.stringify(response.data), {
      status: response.status,
    });
  } catch (error: any) {
    if (error.message.includes("401")) {
      return new NextResponse(JSON.stringify(error), {
        status: 401,
      });
    }
    return new NextResponse(JSON.stringify(error), {
      status: error?.response?.status || 500,
    });
  }
};

export const OPTIONS = async (req: Request) => {
  return new NextResponse(null, {
    status: 204,
  });
};
