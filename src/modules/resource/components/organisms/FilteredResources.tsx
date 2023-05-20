import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { useQuery } from "react-query";
import { IFilters } from "../molecules/Filters";
import { AlternanceAndFormation } from "../../types/AlternanceAndFormation";
import { Job } from "../../types/Job";
import ResourceList from "./ResourceList";

interface FilteredResourcesProps {
  filters: IFilters;
}

export default function FilteredResources({ filters }: FilteredResourcesProps) {
  const { data: alternancesAndFormations } = useQuery(
    ["resources", filters.romeCode, filters.departmentCode, filters.type],
    async () => {
      if (!filters.romeCode || !filters.departmentCode || !filters.nafCode)
        return [];

      const res =
        await cubesApiService().ressource.apiRessourceAlternancesFormationsGet(
          filters.romeCode,
          filters.departmentCode
        );

      // @ts-ignore
      const data = res.data.data as AlternanceAndFormation[];

      return data;
    },
    {
      enabled: filters.type === "alternance",
    }
  );

  const { data: jobs } = useQuery(
    ["jobs", filters.nafCode, filters.type],
    async () => {
      if (!filters.nafCode) return [];

      const res = await cubesApiService().ressource.apiRessourceJobGet(
        filters.nafCode
      );

      // @ts-ignore
      const data = res.data.data as Job[];

      return data;
    },
    {
      enabled: filters.type === "job",
    }
  );

  return (
    <ResourceList
      resources={[...(alternancesAndFormations ?? []), ...(jobs ?? [])]}
    />
  );
}
