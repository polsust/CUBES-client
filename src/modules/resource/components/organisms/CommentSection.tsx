import { IResource } from "../../types/Resource";
import CommentCreator from "../molecules/CommentCreator";
import CommentList from "./CommentList";

interface CommentSectionProps {
  resource: IResource;
}

export default function CommentSection({ resource }: CommentSectionProps) {
  return (
    <div>
      <CommentCreator resource={resource} />
      <CommentList resource={resource} />
    </div>
  );
}
