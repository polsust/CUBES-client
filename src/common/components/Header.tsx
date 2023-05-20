import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { ROUTES, USER_ROLES } from "../constants";
import { useRouter } from "next/router";
import AuthService from "@cubes/modules/auth/services/AuthService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff, faUser } from "@fortawesome/free-solid-svg-icons";
import { queryClient } from "../providers/ReactQueryProvider";
import useUser from "@cubes/modules/auth/hooks/useUser";

interface HeaderProps { }

export default function Header({ }: HeaderProps) {
  const router = useRouter();
  const user = useUser();

  return (
    <div className="flex fixed top-0 z-10 justify-between items-center px-5 my-5 w-full">
      <div>
        <Link href={ROUTES.catalog.path}>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            height={100}
            width={100}
          />
        </Link>
      </div>
      <div className="space-x-2">
        <Button
          type="default"
          size="large"
          icon={<FontAwesomeIcon icon={Boolean(user) ? faPowerOff : faUser} />}
          onClick={() => {
            if (Boolean(user)) {
              AuthService.logout();
              queryClient.invalidateQueries("user");
            } else {
              router.push(ROUTES.login.path);
            }
          }}
        >
          {Boolean(user) ? "Se deconnecter" : "Se connecter"}
        </Button>

        {Boolean(user) && (
          <Button
            type="default"
            size="large"
            icon={<FontAwesomeIcon icon={faUser} />}
            onClick={() => {
              router.push(ROUTES.profile.path);
            }}
          >
            Profil
          </Button>
        )}

        {[USER_ROLES.admin, USER_ROLES.supAdmin, USER_ROLES.moderator].includes(
          user?.IdRole ?? "0"
        ) && (
            <Button
              type="default"
              size="large"
              onClick={() => {
                router.push(ROUTES.login.path);
              }}
            >
              Tableau de bord
            </Button>
          )}
      </div>
    </div>
  );
}
