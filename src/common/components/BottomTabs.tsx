import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "antd";

interface BottomTabsProps { }

export default function BottomTabs({ }: BottomTabsProps) {
  interface Tab {
    icon: IconProp;
    route: string;
    isActive: boolean;
  }

  const tabs = [];

  return (
    <div className="w-full h-20 bg-secondary">
      <Button icon={<FontAwesomeIcon icon={icon} />} />
    </div>
  );
}
