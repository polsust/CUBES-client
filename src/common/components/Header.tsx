import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { ROUTES, USER_ROLES } from "../constants";
import { useRouter } from "next/router";
import AuthService from "@cubes/modules/auth/services/AuthService";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps { }

export default function Header({ }: HeaderProps) {
  const router = useRouter();
  const { data: user } = useQuery({
    queryFn: () => AuthService.getUser(),
  });

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
      <div>
        <Button
          type="default"
          size="large"
          icon={<FontAwesomeIcon icon={faUser} />}
          onClick={() => {
            if (Boolean(user)) return router.push(ROUTES.profile.path);
            router.push(ROUTES.login.path);
          }}
        >
          {Boolean(user) ? "Profil" : "Se connecter"}
        </Button>

        {[USER_ROLES.admin, USER_ROLES.supAdmin].includes(
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
