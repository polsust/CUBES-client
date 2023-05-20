import { useRouter } from "next/router";
import { IResource } from "../../types/Resource";
import AlternanceAndFormationCard from "../molecules/AlternanceAndFormationCard";
import { AlternanceAndFormation } from "../../types/AlternanceAndFormation";
import { Job } from "../../types/Job";
import JobCard from "../molecules/JobCard";

interface ResourceListProps {
  resources: IResource[];
}

export default function ResourceList({ resources }: ResourceListProps) {
  const router = useRouter();

  const goToResource = (resource: IResource) => {
    router.push(`/catalogue/${resource._id}`);
  };

  const alternancesAndFormations = resources.filter(
    // @ts-ignore
    (resource) => !resource.description
  );

  const jobs = resources.filter(
    // @ts-ignore
    (resource) => resource.description
  );

  return (
    <div className="flex flex-wrap justify-center my-5 w-full h-full">
      {(alternancesAndFormations ?? []).map((resource, i) => {
        const alternanceAndFormation = resource as AlternanceAndFormation;
        return (
          <AlternanceAndFormationCard
            key={i}
            alternanceAndFormation={alternanceAndFormation}
            onClick={() => goToResource(alternanceAndFormation)}
          />
        );
      })}

      {(jobs ?? []).map((resoruce, i) => {
        const job = resoruce as Job;
        return <JobCard onClick={() => goToResource(job)} key={i} job={job} />;
      })}
    </div>
  );
}
