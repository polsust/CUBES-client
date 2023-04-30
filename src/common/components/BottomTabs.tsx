import {
  faHouse,
  faPlusSquare,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tabs } from "antd";
import { bottomTabsStyle } from "../styles/BottomTabs.style";

interface BottomTabsProps { }

export default function BottomTabs({ }: BottomTabsProps) {
  return (
    <Tabs
      className="absolute bottom-0 w-full flex bg-secondary text-white"
      css={bottomTabsStyle}
      items={[
        {
          key: "1",
          label: <FontAwesomeIcon icon={faHouse} size="3x" />,
        },
        {
          key: "2",
          label: <FontAwesomeIcon icon={faPlusSquare} size="3x" />,
        },
        {
          key: "3",
          label: <FontAwesomeIcon icon={faUser} size="3x" />,
        },
      ]}
    />
  );
}
