import { GetServerSideProps } from "next";
import ResourceWrapper from "@cubes/modules/resource/components/templates/ResourceWrapper";
import axios from "axios";
import { IResource } from "@cubes/modules/resource/types/Resource";

export const getServerSideProps: GetServerSideProps<{
  resource: IResource;
}> = async (context) => {
  const id = context?.params?.id as string;

  const instance = axios.create();
  const res = await instance.get(
    `${process.env.NEXT_PUBLIC_API_URL
    }/api/Ressource/GetRessource/${id}`
  );

  return {
    props: {
      resource: res.data.data as IResource,
    },
  };
};

export default function Resource({ resource }: { resource: IResource }) {
  return <ResourceWrapper resource={resource} />;
}
