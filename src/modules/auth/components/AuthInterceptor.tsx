import { ROUTES } from "@cubes/common/constants";
import ChildrenProps from "@cubes/common/types/ChildrenProps";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useUser from "../hooks/useUser";

export default function AuthInterceptor({ children }: ChildrenProps) {
  const router = useRouter();
  const user = useUser();

  useEffect(() => {
    if (!router.isReady) return;

    const currentRoute = Object.values(ROUTES).find((route) => {
      return route.path === router.route;
    });

    const redirectRoute =
      router.route === ROUTES.login.path
        ? ROUTES.login.path
        : ROUTES.signup.path;

    if (currentRoute?.requiresAuth && !user) router.replace(redirectRoute);

    if (
      // @ts-ignore
      currentRoute?.roles > 0 &&
      // @ts-ignore
      !currentRoute?.roles.includes(user?.IdRole)
    ) {
      router.replace(redirectRoute);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);

  return <>{children}</>;
}
