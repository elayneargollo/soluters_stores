import { apiClient } from "@/config/axios";
import { NextRequest, NextResponse } from "next/server";

const finishPurchase = async (productIds: string[]): Promise<any> => {
  return apiClient.post("/purchase/finish", productIds, { withCredentials: true }).then((response) => {
    return response.data;
  });
}

export const POST = async (req: NextRequest) => {
  try {
    let productIds: string[] = await req.json();

    const response = await finishPurchase(productIds);

    return new NextResponse(JSON.stringify({ message: "Compra realizada com sucesso!" }), {
      status: response.status,
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify(error?.response?.data), {
      status: error?.response?.status || 500,
    });
  }
}