import { ROUTES } from "@cubes/common/constants";
import ChildrenProps from "@cubes/common/types/ChildrenProps";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function AuthInterceptor({ children }: ChildrenProps) {
  const router = useRouter();

  // const { data: user } = useQuery("user", () => router.isReady);

  useEffect(() => {
    if (!router.isReady) return;

    const targetRoute =
      router.route === ROUTES.login ? ROUTES.login : ROUTES.signup;
    router.replace(targetRoute);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.route]);

  return <>{children}</>;
}
