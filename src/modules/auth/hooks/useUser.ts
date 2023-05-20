import { useQuery } from "react-query";
import AuthService from "../services/AuthService";

export default function useUser() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => AuthService.getUser(),
  });

  return user;
}
