import { JwtContent } from "@cubes/modules/auth/types/Jwt";

interface ProfilePictureProps {
  user: JwtContent;
}

export default function ProfilePicture({ user }: ProfilePictureProps) {
  const fNameInital = user.firstname.at(0);
  const lNameInital = "fake lastname".at(0);

  return (
    <div className="relative w-40 h-40 text-6xl text-white capitalize rounded-full md:w-52 md:h-52 md:text-8xl bg-blue-400">
      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {fNameInital}
        {lNameInital}
      </span>
    </div>
  );
}
