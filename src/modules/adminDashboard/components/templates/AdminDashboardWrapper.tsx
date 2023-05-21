import Heading from "@cubes/common/components/atoms/Heading";
import { ROUTES } from "@cubes/common/constants";
import { Button } from "antd";
import { useRouter } from "next/router";

interface AdminDashboardWrapperProps { }

export default function AdminDashboardWrapper({ }: AdminDashboardWrapperProps) {
  const router = useRouter();
  const buttons = [
    {
      route: ROUTES.catalogUsers.path,
      label: "Catalogue des utilisateurs",
    },
    {
      route: ROUTES.stats.path,
      label: "Statistiques",
    },
  ];

  return (
    <div>
      <Heading>Tableau de bord</Heading>

      <div className="flex flex-col items-stretch space-y-5">
        {buttons.map(({ label, route }, i) => (
          <Button
            className="font-bold"
            size="large"
            key={i}
            onClick={() => {
              router.push(route);
            }}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
}
