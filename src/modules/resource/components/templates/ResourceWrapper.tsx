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
        className="text-white no-underline hover:underline"
      >
        <h1>{resource._title}</h1>
      </Link>

      <div className="m-8">
        <DataField icon={faLocationPin} data={resource.ville} title="ville" />
        <DataField
          icon={faEnvelope}
          title="Code postal"
          label="CP"
          data={resource.zipcode}
        />
        <DataField
          icon={faLink}
          title="Code postal"
          label="CP"
          data={
            <Link href={resource._url} className="text-black" target="_blank">
              {resource._url}
            </Link>
          }
        />

        <p className="my-20">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet.Nisi anim cupidatat excepteur officia.Reprehenderit
          nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
          minim nulla est proident.Nostrud officia pariatur ut officia.Sit irure
          elit esse ea nulla sunt ex occaecat reprehenderit commodo officia
          dolor Lorem duis laboris cupidatat officia voluptate.Culpa proident
          adipisicing id nulla nisi laboris ex in Lorem sunt duis officia
          eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit
          enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et
          est culpa et culpa duis.
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
