import { User } from "@cubes/modules/auth/types/Jwt";
import { useMemo } from "react";

interface ProfilePictureProps {
  user: User;
  size?: "sm" | "md" | "lg";
}

export default function ProfilePicture({
  user,
  size = "md",
}: ProfilePictureProps) {
  const fNameInital = user.fName.at(0);
  const lNameInital = user.lName.at(0);

  const fullNameLength = user.fName.length + user.lName.length;

  const colors = [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ];

  const color = useMemo(() => colors[fullNameLength], [fullNameLength]);

  return (
    <div
      className={`relative text-white capitalize bg-${color}-400 rounded-full aspect-square ${size == "sm" && "w-16 h-16 text-4xl"
        } ${size == "md" && "w-32 h-32 text-7xl"} ${size == "lg" && "w-48 h-48 text-8xl"
        } `}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none">
        {fNameInital}
        {lNameInital}
      </span>
    </div>
  );
}
