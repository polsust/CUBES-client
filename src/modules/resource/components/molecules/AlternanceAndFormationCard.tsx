import { AlternanceAndFormation } from "../../types/AlternanceAndFormation";
import DataField from "../atoms/DataField";
import ResourceCard from "./ResourceCard";

interface AlternanceAndFormationCardProps {
  alternanceAndFormation: AlternanceAndFormation;
}

export default function AlternanceAndFormationCard({
  alternanceAndFormation,
}: AlternanceAndFormationCardProps) {
  return (
    <ResourceCard title={alternanceAndFormation._title} onClick={() => { }}>
      <DataField label="Ville" data={alternanceAndFormation.ville} />
      <DataField label="Department" data={alternanceAndFormation.departement} />
      <DataField label="Entreprise" data={alternanceAndFormation.entreprise} />
      <DataField label="Vues" data={alternanceAndFormation._views} />
    </ResourceCard>
  );
}
