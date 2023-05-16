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

export interface ResponseDto<T> {
  message: string;
  data: T;
}

export function cubesApiService() {
  const conf = new Configuration({
    basePath: process.env.NEXT_PUBLIC_API_URL,
  });

  const token =
    typeof window === "undefined"
      ? null
      : LocalStorageService.getItem<string>("token") ?? null;

  const axiosInstance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (typeof window === "undefined") return;

      if (error.code) return message.error(error.message);

      // all responses are the same
      const dto = error.response.data as ResponseDto<unknown>;
      message.error({ content: dto.message ?? error.message });
    }
  );

  return {
    user: new UserApi(conf, undefined, axiosInstance),
    roles: new RolesApi(conf, undefined, axiosInstance),
    category: new CategoryApi(conf, undefined, axiosInstance),
    comments: new CommentsApi(conf, undefined, axiosInstance),
    ressource: new RessourceApi(conf, undefined, axiosInstance),
    auth: new AuthApi(conf, undefined, axiosInstance),
  };
}
