import { JwtContent } from "@cubes/modules/auth/types/Jwt";
import ProfilePicture from "../atoms/ProfilePicture";
import DataField from "@cubes/modules/resource/components/atoms/DataField";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import Paper from "@cubes/common/components/atoms/Paper";
import { ReactNode } from "react";
import { UserDto } from "cubes-api-client";

interface ProfileDetailsProps {
  user: JwtContent | UserDto;
  className?: string;
  mode?: "list" | "default";
  children?: ReactNode;
  sticky?: boolean;
}

export default function ProfileDetails({
  user,
  className,
  mode = "default",
  children,
  sticky = false,
}: ProfileDetailsProps) {
  const listMode = mode === "list";

  return (
    <Paper
      className={`flex ${listMode ? "flex-row" : "flex-col"
        } items-center max-h-full ${sticky && "md:sticky"
        } top-32 md:min-w-max min-w-full ${className}`}
    >
      <ProfilePicture user={user} size={listMode ? "sm" : "md"} />
      <div className={`${listMode && "ml-7"}`}>
        <p className={`font-bold ${!listMode && "text-center"} capitalize`}>
          {user.fName} {user.lName}
        </p>
        <DataField icon={faUser} data={user.login} />
        <DataField icon={faEnvelope} data={user.email} />
      </div>
      {children}
    </Paper>
  );
}
