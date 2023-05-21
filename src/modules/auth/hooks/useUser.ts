import { useQuery } from "react-query";
import AuthService from "../services/AuthService";
import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { User } from "../types/Jwt";

const getLoggedUser = () => AuthService.getUser();

const getUserById = async (id: number) => {
  const res = await cubesApiService().user.apiUserGetUserIdGet(id);
  // @ts-ignore
  return res.data.data;
};

export default function useUser(id?: number): User {
  const { data: user } = useQuery({
    queryKey: ["user", id],
    queryFn: async () => {
      if (id) return await getUserById(id);

      return getLoggedUser();
    },
  });

  return user;
}
