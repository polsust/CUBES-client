import GoBackButton from "@cubes/common/components/atoms/GoBackButton";
import Paper from "@cubes/common/components/atoms/Paper";
import DataField from "@cubes/modules/resource/components/atoms/DataField";
import Stats from "../../types/Stats";
import {
  faComment,
  faEye,
  faShareAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Heading from "@cubes/common/components/atoms/Heading";

interface StatsWrapperProps {
  stats: Stats;
}

export default function StatsWrapper({ stats }: StatsWrapperProps) {
  return (
    <div className="w-full max-w-xl">
      <Heading>Statistiques</Heading>
      <GoBackButton />
      <Paper className="mt-5 w-full">
        <DataField label="Visites" icon={faEye} data={stats?._visits} />
        <DataField label="Partages" icon={faShareAlt} data={stats?._Shared} />
        <DataField label="Favoris" icon={faStar} data={stats?._favorite} />
        <DataField
          label="Commentaires"
          icon={faComment}
          data={stats?._commentPosted}
        />
      </Paper>
    </div>
  );
}
