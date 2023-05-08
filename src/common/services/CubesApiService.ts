import { message } from "antd";
import axios from "axios";
import {
  Configuration,
  UserDtoResponse,
  UserApi,
  RolesApi,
  CategoryApi,
  CommentsApi,
  RessourceApi,
  AuthApi,
} from "cubes-api-client";

export function cubesApiService() {
  const conf = new Configuration({
    basePath: process.env.NEXT_PUBLIC_API_URL,
  });

  const axiosInstance = axios.create();

  axiosInstance.interceptors.response.use((res) => {
    // all responses are the same
    const dto = res.data as UserDtoResponse;

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
