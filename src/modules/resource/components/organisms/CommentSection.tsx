import { IResource } from "../../types/Resource";
import CommentCreator from "../molecules/CommentCreator";

interface CommentSectionProps {
  resource: IResource;
}

export default function CommentSection({ resource }: CommentSectionProps) {
  return (
    <div>
      <CommentCreator resource={resource} />
    </div>
  );
}
