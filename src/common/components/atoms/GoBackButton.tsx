import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";
import { useRouter } from "next/router";

interface GoBackButtonProps { }

export default function GoBackButton({ }: GoBackButtonProps) {
  const router = useRouter();
  return (
    <Button
      icon={<FontAwesomeIcon icon={faArrowLeft} />}
      onClick={() => {
        router.back();
      }}
    >
      Retour
    </Button>
  );
}
