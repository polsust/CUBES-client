import { IResource } from "../../types/Resource";
import {
  faEnvelope,
  faEye,
  faLink,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";
import DataField from "../atoms/DataField";
import Link from "next/link";
import GoBackButton from "@cubes/common/components/atoms/GoBackButton";

interface ResourceWrapperProps {
  resource: IResource;
}

export default function ResourceWrapper({ resource }: ResourceWrapperProps) {
  console.log(resource);

  const title = <h1 className="text-center text-white">{resource._title}</h1>;

  return (
    <div>
      <GoBackButton />
      {resource._url ? (
        <Link
          href={resource._url}
          target="_blank"
          className="text-white no-underline hover:underline"
        >
          {title}
        </Link>
      ) : (
        title
      )}

      <div className="m-8 bg-white p-5 rounded-xl">
        <DataField icon={faLocationPin} data={resource.ville} title="ville" />
        <DataField
          icon={faEnvelope}
          title="Code postal"
          label="CP"
          data={resource.zipcode}
        />
        {Boolean(resource._url) && (
          <DataField
            icon={faLink}
            title="Lien"
            data={
              <Link href={resource._url} className="text-black" target="_blank">
                {resource._url}
              </Link>
            }
          />
        )}

        <p className="my-20 whitespace-pre-line">{resource.description}</p>

        <DataField
          title="Nombre de visites"
          icon={faEye}
          data={resource._views}
        />
      </div>
    </div>
  );
}
