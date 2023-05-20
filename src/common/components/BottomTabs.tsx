import useUser from "@cubes/modules/auth/hooks/useUser";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faPlusSquare,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useRouter } from "next/router";
import { ROUTES, USER_ROLES } from "../constants";

interface BottomTabsProps { }

export default function BottomTabs({ }: BottomTabsProps) {
  const user = useUser();
  const router = useRouter();

  interface Tab {
    icon: IconProp;
    route: string;
    isAllowed: boolean;
  }

  const tabs: Tab[] = [
    {
      icon: faHome,
      route: ROUTES.catalog.path,
      isAllowed: true,
    },
    {
      icon: Boolean(user) ? faUser : faRightToBracket,
      route: Boolean(user) ? ROUTES.profile.path : ROUTES.login.path,
      isAllowed: true,
    },
    {
      icon: faPlusSquare,
      route: "",
      isAllowed: [
        USER_ROLES.admin,
        USER_ROLES.supAdmin,
        USER_ROLES.moderator,
      ].some((role) => user?.IdRole.includes(role)),
    },
  ];

  return (
    <div className="flex fixed bottom-0 justify-around w-full h-20 bg-secondary">
      {tabs.map(({ icon, route, isAllowed }, i) => {
        if (!isAllowed) return null;
        const isActive = router.pathname === route;

        return (
          <Button
            className={`w-full h-full rounded-none ${isActive ? "border-t-white border-t-8" : ""
              }`}
            onClick={() => router.push(route)}
            type="ghost"
            icon={<FontAwesomeIcon size="3x" icon={icon} color="white" />}
            key={i}
          />
        );
      })}
    </div>
  );
}
