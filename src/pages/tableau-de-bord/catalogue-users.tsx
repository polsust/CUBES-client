import { GetServerSideProps } from "next";
import axios from "axios";
import { UserDto } from "cubes-api-client";
import UserCatalogWrapper from "@cubes/modules/adminDashboard/components/templates/UserCatalogWrapper";

export const getServerSideProps: GetServerSideProps<{
  users: UserDto[];
}> = async () => {
  const instance = axios.create();
  // const res = await instance.get(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/`
  // );

  // @ts-ignore
  const users = [
    {
      id: 1,
      fName: "pol",
      lName: "sust",
      email: "pol@mail.com",
      login: "polongas",
      activation: true,
      idRole: 1,
    },
    {
      fName: "pol",
      lName: "sust",
      email: "pol@mail.com",
      login: "polongas",
      activation: true,
      idRole: 1,
    },
    {
      fName: "pol",
      lName: "sust",
      email: "pol@mail.com",
      login: "polongas",
      activation: true,
      idRole: 1,
    },
    {
      fName: "pol",
      lName: "sust",
      email: "pol@mail.com",
      login: "polongas",
      activation: true,
      idRole: 1,
    },
  ];

  return {
    props: {
      users,
    },
  };
};

export default function StatsPage({ users }: { users: UserDto[] }) {
  return <UserCatalogWrapper users={users} />;
}
