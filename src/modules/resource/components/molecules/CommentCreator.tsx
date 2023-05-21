import useUser from "@cubes/modules/auth/hooks/useUser";
import CommentLayout from "./CommentLayout";
import { Button, Input, message } from "antd";
import { useMutation } from "react-query";
import { cubesApiService } from "@cubes/common/services/CubesApiService";
import { useState } from "react";
import { IResource } from "../../types/Resource";

interface CommentCreatorProps { 
  resource: IResource
}

export default function CommentCreator({ resource }: CommentCreatorProps) {
  const [comment, setComment] = useState<string>("");

  const commentMutation = useMutation({
    mutationFn: () => {
      console.log("mutation")
      return cubesApiService().comments.apiCommentsPostCommentWithTokenPost({
        id: resource._id,
        content: comment,
      });
    },
    onSuccess: () => {
      setComment("");
      message.success("Commentaire ajouté avec succès");
    },
  });

  const user = useUser();
  if (!user) return null;

  return (
    <CommentLayout userId={user._id}>
      <div className="flex flex-col items-end m-2 mt-5 ml-5 w-full">
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
