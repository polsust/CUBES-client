import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { useQuery } from "react-query";
import { IFilters } from "../molecules/Filters";
import { AlternanceAndFormation } from "../../types/AlternanceAndFormation";
import { Job } from "../../types/Job";
import AlternanceAndFormationCard from "../molecules/AlternanceAndFormationCard";
import JobCard from "../molecules/JobCard";

interface ResourceListProps {
  filters: IFilters;
}

export default function ResourceList({ filters }: ResourceListProps) {
  const { data: alternancesAndFormations } = useQuery(
    ["resources", filters.romeCode, filters.departmentCode],
    async () => {
      if (!filters.romeCode || !filters.departmentCode || !filters.nafCode)
        return [];

      const res =
        await cubesApiService().ressource.apiRessourceAlternancesFormationsGet(
          filters.romeCode,
          filters.departmentCode
        );

      const data = res.data.data as AlternanceAndFormation[];

      return data;
    }
  );

  const { data: jobs } = useQuery(["jobs", filters.nafCode], async () => {
    if (!filters.nafCode) return [];

    const res = await cubesApiService().ressource.apiRessourceJobGet(
      filters.nafCode
    );

    const data = res.data.data as Job[];

    return data;
  });

  return (
    <div className="flex flex-wrap justify-center my-5 w-full h-full">
      {(alternancesAndFormations ?? []).map((alternanceAndFormation, i) => (
        <AlternanceAndFormationCard
          key={i}
          alternanceAndFormation={alternanceAndFormation}
        />
      ))}

      {(jobs ?? []).map((job, i) => (
        <JobCard key={i} job={job} />
      ))}
    </div>
  );
}
