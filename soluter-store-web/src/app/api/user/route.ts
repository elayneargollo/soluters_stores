import { apiClient } from "@/config/axios";
import { AxiosResponse } from "axios";
import { NextResponse } from "next/server";

const fetchUser = async (): Promise<AxiosResponse> => {
  return apiClient.get("/users", { withCredentials: true }).then((response) => {
    return response;
  });
};

export const GET = async (req: Request) => {
  try {
    const response = await fetchUser();

    return new NextResponse(JSON.stringify(response.data), {
      status: response.status,
    });
  } catch (error: any) {
    if (error.message.includes("401")) {
      return new Response(JSON.stringify(error), {
        status: 401,
      });
    }
    return new Response(JSON.stringify(error), {
      status: 500,
    });
  }
};

export const OPTIONS = async (req: Request) => {
  return new NextResponse(null, {
    status: 204,
  });
};
