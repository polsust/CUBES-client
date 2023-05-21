import { User } from "@cubes/modules/auth/types/Jwt";
import { UserDto } from "cubes-api-client";
import { useMemo } from "react";

interface ProfilePictureProps {
  user: User | UserDto;
  size?: "sm" | "md" | "lg";
}

export default function ProfilePicture({
  user,
  size = "md",
}: ProfilePictureProps) {
  const fNameInital = user.fName!.at(0);
  const lNameInital = user.lName!.at(0);

  const fullNameLength = user.fName!.length + user.lName!.length;

  const colors = [
    "#94a3b8",
    "#9ca3af",
    "#a1a1aa",
    "#a3a3a3",
    "#a8a29e",
    "#f87171",
    "#fb923c",
    "#fbbf24",
    "#facc15",
    "#a3e635",
    "#4ade80",
    "#34d399",
    "#2dd4bf",
    "#22d3ee",
    "#38bdf8",
    "#60a5fa",
    "#818cf8",
    "#a78bfa",
    "#c084fc",
    "#e879f9",
    "#f472b6",
    "#fb7185",
  ];

  const color = useMemo(() => colors[fullNameLength], [fullNameLength]);

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={`relative text-white capitalize rounded-full aspect-square ${size == "sm" && "w-16 h-16 text-4xl"
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
