import { IResource } from "../../types/Resource";
import { useQuery } from "react-query";
import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { CommentDto } from "cubes-api-client";
import CommentLayout from "../molecules/CommentLayout";

interface CommentListProps {
  resource: IResource;
}

export default function CommentList({ resource }: CommentListProps) {
  const { data: comments } = useQuery({
    queryKey: ["comments", resource._id],
    queryFn: async () => {
      const res =
        await cubesApiService().comments.apiCommentsGetCommentsPerRessourceIdRessourceGet(
          resource._id
        );

      // @ts-ignore
      return res.data.data as CommentDto[];
    },
  });

  return comments?.map(({ content, userId }, i) => (
    <CommentLayout key={i} userId={userId}>
      {content}
    </CommentLayout>
  ));
}
