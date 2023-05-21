import useUser from "@cubes/modules/auth/hooks/useUser";
import CommentLayout from "./CommentLayout";
import { Button, Input, message } from "antd";
import { useMutation } from "react-query";
import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { useState } from "react";
import { IResource } from "../../types/Resource";
import { queryClient } from "@cubes/common/providers/ReactQueryProvider";

interface CommentCreatorProps {
  resource: IResource;
}

export default function CommentCreator({ resource }: CommentCreatorProps) {
  const [comment, setComment] = useState<string>("");

  const commentMutation = useMutation({
    mutationFn: () => {
      return cubesApiService().comments.apiCommentsPostCommentWithTokenPost({
        id: resource._id,
        content: comment,
        ressourceId: resource._id,
      });
    },
    onSuccess: () => {
      setComment("");
      queryClient.invalidateQueries(["comments", resource._id]);
      message.success("Commentaire ajouté avec succès");
    },
  });

  const user = useUser();
  if (!user) return null;

  return (
    <CommentLayout>
      <div className="flex flex-col items-end w-full">
        <Input.TextArea
          rows={4}
          placeholder="Ajouter un commentaire"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <Button className="mt-3" onClick={() => commentMutation.mutate()}>
          Commenter
        </Button>
      </div>
    </CommentLayout>
  );
}
