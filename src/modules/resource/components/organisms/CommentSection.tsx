import useUser from "@cubes/modules/auth/hooks/useUser";
import { IResource } from "../../types/Resource";
import CommentCreator from "../molecules/CommentCreator";
import CommentList from "./CommentList";

interface CommentSectionProps {
  resource: IResource;
}

export default function CommentSection({ resource }: CommentSectionProps) {
  const user = useUser();
  return (
    <div>
      {Boolean(user) && <CommentCreator resource={resource} />}
      <CommentList resource={resource} />
    </div>
  );
}
