import { GetServerSideProps } from "next";
import axios from "axios";
import { UserDto } from "cubes-api-client";
import UserCatalogWrapper from "@cubes/modules/adminDashboard/components/templates/UserCatalogWrapper";

export const getServerSideProps: GetServerSideProps<{
  users: UserDto[];
}> = async () => {
  const instance = axios.create();
  const res = await instance.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/User/GetAllUser`
  );

  return {
    props: {
      users: res.data.data,
    },
  };
};

export default function StatsPage({ users }: { users: UserDto[] }) {
  return <UserCatalogWrapper users={users} />;
}
