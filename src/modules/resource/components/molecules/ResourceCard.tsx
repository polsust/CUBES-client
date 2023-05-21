import { Card } from "antd";
import React from "react";

interface ResourceCardProps {
  title: string;
  children: React.ReactNode;
  onClick: () => void;
}

export default function ResourceCard({
  title,
  children,
  onClick,
}: ResourceCardProps) {
  return (
    <Card
      className="overflow-hidden m-1 w-full cursor-pointer md:m-2 md:w-80 lg:m-3 min-h-fit"
      onClick={onClick}
    >
      <h3>{title}</h3>
      {children}
    </Card>
  );
}
