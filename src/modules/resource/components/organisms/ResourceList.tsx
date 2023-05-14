import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { useQuery } from "react-query";
import { IFilters } from "../molecules/Filters";

interface ResourceListProps {
  filters: IFilters;
}

export default function ResourceList({ filters }: ResourceListProps) {
  const { data: resources } = useQuery("resources", async () => {
    const { data } =
      await cubesApiService().ressource.apiRessourceAlternancesFormationsGet(
        filters.romeCode,
        filters.departmentCode,
      );
    return data.data;
  });

  return <div>list</div>;
}
