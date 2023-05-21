import GoBackButton from "@cubes/common/components/atoms/GoBackButton";
import Heading from "@cubes/common/components/atoms/Heading";
import { cubesApiService } from "@cubes/common/services/CubesApiService";
import ProfileDetails from "@cubes/modules/profile/components/molecules/ProfileDetails";
import { faBan, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Popconfirm } from "antd";
import { UserDto } from "cubes-api-client";
import { useRouter } from "next/router";
import { useMutation } from "react-query";

interface UserCatalogWrapperProps {
  users: UserDto[];
}

export default function UserCatalogWrapper({ users }: UserCatalogWrapperProps) {
  const router = useRouter();
  const banMutation = useMutation({
    mutationFn: (user: UserDto) => {
      if (user.activation) {
        return cubesApiService().user.apiUserArchiveUserIdPut(user.id!);
      }
      return cubesApiService().user.apiUserUpdateUserIdPut(user.id!, {
        activation: true,
      });
    },
    onSuccess: () => {
      router.replace(router.asPath);
    },
  });

  return (
    <div className="m-5 space-y-5 md:m-0">
      <Heading>Liste des utilisateurs</Heading>
      <GoBackButton />
      {users.map((user, i) => {
        const action = user.activation ? "bannir" : "pardoner";
        return (
          <ProfileDetails mode="list" user={user} key={i}>
            <div className="flex justify-center w-full">
              <Popconfirm
                title={`Voulez-vous vraiment ${action} ce user ?`}
                onConfirm={() => banMutation.mutate(user)}
              >
                <Button
                  className="capitalize"
                  icon={
                    <FontAwesomeIcon
                      icon={user.activation ? faBan : faCheckCircle}
                      color={user.activation ? "red" : "green"}
                    />
                  }
                >
                  {action}
                </Button>
              </Popconfirm>
            </div>
          </ProfileDetails>
        );
      })}
    </div>
  );
}
