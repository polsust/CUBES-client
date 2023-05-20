import ChildrenProps from "@cubes/common/types/ChildrenProps";
import useUser from "@cubes/modules/auth/hooks/useUser";
import ProfilePicture from "@cubes/modules/profile/components/atoms/ProfilePicture";

interface CommentLayoutProps extends ChildrenProps { }

export default function CommentLayout({ children }: CommentLayoutProps) {
  const user = useUser();
  if (!user) return null;

  return (
    <div className="flex">
      <ProfilePicture user={user} size="sm" />
      {children}
    </div>
  );
}
