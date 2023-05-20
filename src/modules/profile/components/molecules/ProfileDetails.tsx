import { JwtContent } from "@cubes/modules/auth/types/Jwt";
import ProfilePicture from "../atoms/ProfilePicture";
import DataField from "@cubes/modules/resource/components/atoms/DataField";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import Paper from "@cubes/common/components/atoms/Paper";

interface ProfileDetailsProps {
  user: JwtContent;
  className?: string;
}

export default function ProfileDetails({
  user,
  className,
}: ProfileDetailsProps) {
  return (
    <Paper
      className={`flex flex-col items-center max-h-full md:sticky top-32 md:min-w-max min-w-full ${className}`}
    >
      <ProfilePicture user={user} size="md" />
      <div>
        <DataField icon={faEnvelope} data={user.email} />
        <DataField icon={faUser} data={user.firstname} />
      </div>
    </Paper>
  );
}
