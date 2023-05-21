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
import AuthService from "@cubes/modules/auth/services/AuthService";

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

  AuthService.getUser();

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

      // all responses are the same
      const dto = error.response.data as ResponseDto<unknown>;
      message.error(dto.message ?? error.message);
    }
  );

  return {
    user: new UserApi(conf, undefined, axiosInstance),
    roles: new RolesApi(conf, undefined, axiosInstance),
    category: new CategoryApi(conf, undefined, axiosInstance),
    comments: new CommentsApi(conf, undefined, axiosInstance),
    ressource: new RessourceApi(conf, undefined, axiosInstance),
    auth: new AuthApi(conf, undefined, axiosInstance),
    stats: new StatsApi(conf, undefined, axiosInstance),
  };
}
