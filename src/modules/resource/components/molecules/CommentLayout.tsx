import ChildrenProps from "@cubes/common/types/ChildrenProps";
import useUser from "@cubes/modules/auth/hooks/useUser";
import ProfilePicture from "@cubes/modules/profile/components/atoms/ProfilePicture";

interface CommentLayoutProps extends ChildrenProps {
  userId?: number;
  className?: string;
}

export default function CommentLayout({
  children,
  userId,
  className,
}: CommentLayoutProps) {
  const user = useUser(userId);
  if (!user) return null;

  return (
    <div className={`flex ${className}`}>
      <ProfilePicture firstname={user.fName} lastname={user.lName} size="sm" />
      <div className="flex flex-col ml-4 w-full">
        <p className="my-1 ml-5 capitalize">
          {user.fName} {user.lName}
        </p>
        {children}
      </div>
    </div>
  );
}
