import useUser from "@cubes/modules/auth/hooks/useUser";
import Heading from "@cubes/common/components/atoms/Heading";
import ProfileDetails from "../molecules/ProfileDetails";
import ResourceList from "@cubes/modules/resource/components/organisms/ResourceList";
import { useQuery } from "react-query";
import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { IResource } from "@cubes/modules/resource/types/Resource";

interface ProfileWrapperProps { }

export default function ProfileWrapper({ }: ProfileWrapperProps) {
  const user = useUser();

  const { data: favoriteResources } = useQuery(
    ["favoriteResources", user?.email],
    async () => {
      const res =
        await cubesApiService().ressource.apiRessourceRessourceByUserGet();

      // @ts-ignore
      return res.data.data as IResource[];
    },
    {
      enabled: Boolean(user),
    }
  );

  if (!user) return null;

  return (
    <div className="w-full">
      <Heading>Fiche Citoyen</Heading>
      <div className="flex flex-col-reverse justify-end w-full md:flex-row">
        <ResourceList resources={favoriteResources ?? []} />
        <ProfileDetails className="mb-10 ml-0 md:mb-0 md:ml-10" user={user} />
      </div>
    </div>
  );
}
