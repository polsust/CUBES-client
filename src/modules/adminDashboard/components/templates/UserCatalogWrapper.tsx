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
      return cubesApiService().user.apiUserArchiveUserIdPut(user.id!);
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
        return (
          <ProfileDetails mode="list" user={user} key={i}>
            <div className="flex justify-end w-full">
              <Popconfirm
                title={`Voulez-vous vraiment bannir ce user ?`}
                onConfirm={() => banMutation.mutate(user)}
                disabled={!user.activation}
              >
                <Button
                  disabled={!user.activation}
                  className="capitalize"
                  icon={<FontAwesomeIcon icon={faBan} color="red" />}
                >
                  {user.activation ? "Bannir" : "Banni"}
                </Button>
              </Popconfirm>
            </div>
          </ProfileDetails>
        );
      })}
    </div>
  );
}
