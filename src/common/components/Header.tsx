import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../constants";
import { useRouter } from "next/router";
import AuthService from "@cubes/modules/auth/services/AuthService";
import { useQuery } from "react-query";

interface HeaderProps { }

export default function Header({ }: HeaderProps) {
  const router = useRouter();
  const { data: user } = useQuery("user", AuthService.getUser);

  return (
    <div className="flex fixed top-0 z-10 justify-between items-center px-5 my-5 w-full">
      <div>
        <Link href={ROUTES.root.path}>
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
          onClick={() => {
            if (Boolean(user)) {
              return router.push(ROUTES.root.path);
            }
            router.push(ROUTES.login.path);
          }}
        >
          {Boolean(user) ? "Tableau de bord" : "Se connecter"}
        </Button>
      </div>
    </div>
  );
}
