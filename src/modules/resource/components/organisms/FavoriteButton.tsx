import { Button, Tooltip } from "antd";
import { IResource } from "../../types/Resource";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useMutation, useQuery } from "react-query";
import { cubesApiService } from "@cubes/common/services/CubesApiService";
import AuthService from "@cubes/modules/auth/services/AuthService";

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

  const { data: isFavorite, refetch: refetchIsFavorite } = useQuery({
    queryKey: ["isFavorite", resource._id],
    queryFn: async (): Promise<boolean> => {
      const res =
        await cubesApiService().ressource.apiRessourceRessourceByUserGet();

      // @ts-ignore
      const favoriteRessources: IResource[] = res.data.data;
      console.log(favoriteRessources);

      return favoriteRessources.some(
        (ressource) => ressource._id === resource._id
      );
    },
  });

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => AuthService.getUser(),
  });

  return (
    <Tooltip
      title={!user ? "Vous devez être connecté pour ajouter à mes favoris" : ""}
    >
      <Button
        disabled={!user}
        icon={<FontAwesomeIcon icon={faStar} />}
        type="default"
        onClick={async () => {
          await likeMutation.mutateAsync();
          refetchIsFavorite();
        }}
      >
        {isFavorite ? "Supprimer de mes favoris" : "Ajouter à mes favoris"}
      </Button>
    </Tooltip>
  );
}
