import { IResource } from "../../types/Resource";
import {
  faEnvelope,
  faEye,
  faLink,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import DataField from "../atoms/DataField";
import Link from "next/link";

interface ResourceWrapperProps {
  resource: IResource;
}

export default function ResourceWrapper({ resource }: ResourceWrapperProps) {
  console.log(resource);

  return (
    <div>
      <Link
        href={resource._url}
        target="_blank"
        className="text-white no-underline hover:underline text-center"
      >
        <h1>{resource._title}</h1>
      </Link>

      <div className="p-5 m-8 max-w-6xl bg-white rounded-xl">
        <DataField icon={faLocationPin} data={resource.ville} title="ville" />
        <DataField
          icon={faEnvelope}
          title="Code postal"
          label="CP"
          data={resource.zipcode}
        />
        <DataField
          icon={faLink}
          title="Lien"
          data={
            <Link href={resource._url} className="text-black" target="_blank">
              {resource._url}
            </Link>
          }
        />

        <p className="my-20 whitespace-pre-line">
          {resource.description}
        </p>

        <DataField
          title="Nombre de visites"
          icon={faEye}
          data={resource._views}
        />
      </div>
    </div>
  );
}
