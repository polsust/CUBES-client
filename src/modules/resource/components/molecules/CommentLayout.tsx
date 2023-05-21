import ChildrenProps from "@cubes/common/types/ChildrenProps";
import useUser from "@cubes/modules/auth/hooks/useUser";
import ProfilePicture from "@cubes/modules/profile/components/atoms/ProfilePicture";

interface CommentLayoutProps extends ChildrenProps {
  userId?: number;
}

export default function CommentLayout({
  children,
  userId,
}: CommentLayoutProps) {
  const user = useUser(userId);

  return (
    <div className="flex">
      <ProfilePicture
        firstname={user.firstname}
        lastname={user.lastname}
        size="sm"
      />
      {children}
    </div>
  );
}
