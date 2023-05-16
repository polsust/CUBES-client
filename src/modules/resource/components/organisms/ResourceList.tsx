import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { useQuery } from "react-query";
import { IFilters } from "../molecules/Filters";
import { AlternanceAndFormation } from "../../types/AlternanceAndFormation";
import { Job } from "../../types/Job";
import AlternanceAndFormationCard from "../molecules/AlternanceAndFormationCard";
import JobCard from "../molecules/JobCard";
import { useRouter } from "next/router";
import { IResource } from "../../types/Resource";

interface ResourceListProps {
  filters: IFilters;
}

export default function ResourceList({ filters }: ResourceListProps) {
  const router = useRouter();

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

      // @ts-ignore
      const data = res.data.data as AlternanceAndFormation[];

      return data;
    }
  );

  const { data: jobs } = useQuery(["jobs", filters.nafCode], async () => {
    if (!filters.nafCode) return [];

    const res = await cubesApiService().ressource.apiRessourceJobGet(
      filters.nafCode
    );

    // @ts-ignore
    const data = res.data.data as Job[];

    return data;
  });

  const goToResource = (resource: IResource) => {
    router.push(`/catalogue/${encodeURIComponent(resource.reference)}`);
  };

  return (
    <div className="flex flex-wrap justify-center my-5 w-full h-full">
      {(alternancesAndFormations ?? []).map((alternanceAndFormation, i) => (
        <AlternanceAndFormationCard
          key={i}
          alternanceAndFormation={alternanceAndFormation}
          onClick={() => goToResource(alternanceAndFormation)}
        />
      ))}

      {(jobs ?? []).map((job, i) => (
        <JobCard onClick={() => goToResource(job)} key={i} job={job} />
      ))}
    </div>
  );
}
