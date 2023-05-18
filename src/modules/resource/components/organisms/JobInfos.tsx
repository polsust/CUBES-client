import DataField from "../atoms/DataField";
import { faClock, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { Job } from "../../types/Job";

interface JobInfosProps {
  job: Job;
}

export default function JobInfos({ job }: JobInfosProps) {
  return (
    <>
      <DataField icon={faMoneyBill} title="Salaire" data={job.salaire} />
      <DataField icon={faClock} label="Experience" data={job.experience} />
      <DataField label="Type de contrat" data={job.typeContrat} />
    </>
  );
}
