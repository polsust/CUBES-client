interface ProfilePictureProps {
  firstname: string;
  lastname: string;
  size?: "sm" | "md" | "lg";
}

export default function ProfilePicture({
  firstname,
  lastname,
  size = "md",
}: ProfilePictureProps) {
  const fNameInital = firstname.at(0);
  const lNameInital = lastname.at(0);

  return (
    <div
      className={`relative text-white capitalize bg-blue-400 rounded-full aspect-square ${size == "sm" && "w-16 h-16 text-4xl"
        } ${size == "md" && "w-32 h-32 text-7xl"} ${size == "lg" && "w-48 h-48 text-8xl"
        } `}
    >
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {fNameInital}
        {lNameInital}
      </span>
    </div>
  );
}
