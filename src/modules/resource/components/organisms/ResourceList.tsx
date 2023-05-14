import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { useQuery } from "react-query";
import { IFilters } from "../molecules/Filters";
import Resource from "../molecules/Resource";

interface ResourceListProps {
  filters: IFilters;
}

export default function ResourceList({ filters }: ResourceListProps) {
  const { data: resources } = useQuery(
    ["resources", filters.romeCode, filters.departmentCode],
    async () => {
      if (!filters.romeCode || !filters.departmentCode) return [];

      const { data } = await cubesApiService().ressource.apiRessourceJobGet(
        filters.romeCode
      );

      // await cubesApiService().ressource.apiRessourceAlternancesFormationsGet(
      //   filters.romeCode,
      //   filters.departmentCode
      // );

      return data.data as any[];
    }
  );

  if (!resources) return null;

  return resources.map((resource, i) => (
    <Resource key={i} resource={resource} />
  ));
}
