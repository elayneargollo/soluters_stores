import { apiClient } from "@/config/axios";
import { mockOrders } from "@/mocks/apiOrders";
import { NextRequest, NextResponse } from "next/server";

const fetchOrders = async (userId: string) => {
  // return apiClient.get(`/orders/${userId}`, { withCredentials: true }).then((response) => {
  //   return response.data;
  // });
  return Promise.resolve(mockOrders.filter((order) => order.userId === userId));
};

export const GET = async (
  res: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const userId = params.userId;

    const response = await fetchOrders(userId);

    return new NextResponse(JSON.stringify(response), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify(error), {
      status: error?.response?.status || 500,
    });
  }
};
