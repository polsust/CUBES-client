import { AlternanceAndFormation } from "../../types/AlternanceAndFormation";
import DataField from "../atoms/DataField";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

interface AlternanceInfosProps {
  alternance: AlternanceAndFormation;
}

export default function AlternanceInfos({ alternance }: AlternanceInfosProps) {
  return (
    <div>
      <DataField
        icon={faBuilding}
        label="Entreprise"
        data={alternance.entreprise}
      />
      <DataField label="Code rome" data={alternance.romeDomain} />
    </div>
  );
}
