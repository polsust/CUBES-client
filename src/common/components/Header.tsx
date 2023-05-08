import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "../constants";

interface HeaderProps { }

export default function Header({ }: HeaderProps) {
  return (
    <div className="flex fixed top-0 z-10 justify-between items-center px-5 my-5 w-full">
      <div>
        <Link href={ROUTES.root}>
          <Image
            src="/assets/images/logo.png"
            alt="logo"
            height={100}
            width={100}
          />
        </Link>
      </div>
      <div>
        <Button type="default" size="large">
          {true ? "Tableau de bord" : "Se connecter"}
        </Button>
      </div>
    </div>
  );
}
