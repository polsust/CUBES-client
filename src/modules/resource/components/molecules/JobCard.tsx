import { Job } from "../../types/Job";
import DataField from "../atoms/DataField";
import ResourceCard from "./ResourceCard";

interface JobCardProps {
  job: Job;
  onClick: () => void;
}
export default function JobCard({ job, onClick }: JobCardProps) {
  return (
    <ResourceCard title={job._title} onClick={onClick}>
      <DataField label="Ville" data={job.ville} />
      <DataField label="Salaire" data={job.salaire} />
      <DataField label="Contrat" data={job.typeContrat} />
      <DataField label="Vues" data={job._views} />
    </ResourceCard>
  );
}
