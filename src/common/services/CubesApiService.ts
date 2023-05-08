import { message } from "antd";
import axios from "axios";
import {
  Configuration,
  UserApi,
  RolesApi,
  CategoryApi,
  CommentsApi,
  RessourceApi,
  AuthApi,
} from "cubes-api-client";
import LocalStorageService from "./LocalStorageService";

export function cubesApiService() {
  const conf = new Configuration({
    basePath: process.env.NEXT_PUBLIC_API_URL,
  });

  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${LocalStorageService.getItem<string>("token") ?? ""}`,
    },
  });

  axiosInstance.interceptors.response.use((res) => {
    interface Response {
      message: string;
      data: unknown;
    }

    // all responses are the same
    const dto = res.data as Response;

    if (res.status.toString()[0] !== "2") {
      message.error({ content: dto.message });
    }

    return res;
  });

  return {
    user: new UserApi(conf, undefined, axiosInstance),
    roles: new RolesApi(conf, undefined, axiosInstance),
    category: new CategoryApi(conf, undefined, axiosInstance),
    comments: new CommentsApi(conf, undefined, axiosInstance),
    ressource: new RessourceApi(conf, undefined, axiosInstance),
    auth: new AuthApi(conf, undefined, axiosInstance),
  };
}
