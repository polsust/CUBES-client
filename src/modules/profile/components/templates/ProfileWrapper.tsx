import useUser from "@cubes/modules/auth/hooks/useUser";
import Heading from "@cubes/common/components/atoms/Heading";
import ProfileDetails from "../molecules/ProfileDetails";
import Paper from "@cubes/common/components/atoms/Paper";

interface ProfileWrapperProps { }

export default function ProfileWrapper({ }: ProfileWrapperProps) {
  const user = useUser();
  if (!user) return null;

  return (
    <div className="w-full">
      <Heading>Fiche Citoyen</Heading>
      <div className="flex flex-col-reverse justify-end w-full md:flex-row md:space-x-52">
        <Paper>
          <div>list</div>
        </Paper>
        <ProfileDetails className="mb-20 md:mb-0" user={user} />
      </div>
    </div>
  );
}
