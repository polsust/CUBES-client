import Heading from "@cubes/common/components/atoms/Heading";
import { ROUTES } from "@cubes/common/constants";
import { faChartSimple, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useRouter } from "next/router";

interface AdminDashboardWrapperProps { }

export default function AdminDashboardWrapper({ }: AdminDashboardWrapperProps) {
  const router = useRouter();
  const buttons = [
    {
      route: ROUTES.catalogUsers.path,
      label: "Catalogue des utilisateurs",
      icon: faUsers,
    },
    {
      route: ROUTES.stats.path,
      label: "Statistiques",
      icon: faChartSimple,
    },
  ];

  return (
    <div>
      <Heading>Tableau de bord</Heading>

      <div className="flex flex-col items-stretch space-y-5">
        {buttons.map(({ label, route, icon }, i) => (
          <Button
            key={i}
            className="font-bold"
            size="large"
            icon={<FontAwesomeIcon icon={icon} />}
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
