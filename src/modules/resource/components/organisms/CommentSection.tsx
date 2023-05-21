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
    <div className="m-2 md:m-0">
      {Boolean(user) && <CommentCreator resource={resource} />}
      <CommentList resource={resource} />
    </div>
  );
}
