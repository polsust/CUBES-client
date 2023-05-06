import { Button } from "antd";
import Image from "next/image";

interface HeaderProps { }

export default function Header({ }: HeaderProps) {
  return (
    <div className="flex fixed top-0 z-10 justify-between items-center my-5 px-5 w-full">
      <div>
        <Image
          src="/assets/images/logo.png"
          alt="logo"
          height={100}
          width={100}
        />
      </div>
      <div>
        <Button type="default" size="large">
          {true ? "Tableau de bord" : "Se connecter"}
        </Button>
      </div>
    </div>
  );
}
