import { Button, Tooltip } from "antd";
import { IResource } from "../../types/Resource";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "react-query";
import { cubesApiService } from "@cubes/common/services/CubesApiService";
import useUser from "@cubes/modules/auth/hooks/useUser";

interface FavoriteButtonProps {
  resource: IResource;
}

export default function FavoriteButton({ resource }: FavoriteButtonProps) {
  const likeMutation = useMutation({
    mutationFn: () => {
      return cubesApiService().ressource.apiRessourceRessourceRessourceAddToFavoritesPost(
        resource._id
      );
    },
  });

  const dislikeMutation = useMutation({
    mutationFn: () => {
      return cubesApiService().ressource.apiRessourceUserFavIdRessourceDeletefavoriteDelete(
        resource._id
      );
    },
  });

  const user = useUser();

  const { data: isFavorite, refetch: refetchIsFavorite } = useQuery({
    queryKey: ["isFavorite", resource._id],
    queryFn: async (): Promise<boolean> => {
      const res =
        await cubesApiService().ressource.apiRessourceRessourceByUserGet();

      // @ts-ignore
      const favoriteRessources: IResource[] | null = res.data.data;
      if (!favoriteRessources) return false;

      return favoriteRessources.some(
        (ressource) => ressource._id === resource._id
      );
    },
    enabled: Boolean(user),
  });

  return (
    <Tooltip
      title={!user ? "Vous devez être connecté pour ajouter à mes favoris" : ""}
    >
      <Button
        disabled={!user}
        icon={
          <FontAwesomeIcon
            icon={faStar}
            color={isFavorite ? "gold" : "black"}
          />
        }
        type="default"
        onClick={async () => {
          if (isFavorite) {
            await dislikeMutation.mutateAsync();
          } else {
            await likeMutation.mutateAsync();
          }
          refetchIsFavorite();
        }}
      >
        {isFavorite ? "Supprimer de mes favoris" : "Ajouter à mes favoris"}
      </Button>
    </Tooltip>
  );
}
