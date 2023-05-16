import { AlternanceAndFormation } from "../../types/AlternanceAndFormation";
import DataField from "../atoms/DataField";
import ResourceCard from "./ResourceCard";

interface AlternanceAndFormationCardProps {
  alternanceAndFormation: AlternanceAndFormation;
  onClick: () => void;
}

export default function AlternanceAndFormationCard({
  alternanceAndFormation,
  onClick,
}: AlternanceAndFormationCardProps) {
  return (
    <ResourceCard title={alternanceAndFormation._title} onClick={onClick}>
      <DataField label="Ville" data={alternanceAndFormation.ville} />
      <DataField label="Department" data={alternanceAndFormation.departement} />
      <DataField label="Entreprise" data={alternanceAndFormation.entreprise} />
      <DataField label="Vues" data={alternanceAndFormation._views} />
    </ResourceCard>
  );
}
