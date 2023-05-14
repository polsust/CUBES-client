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
      className="m-1 w-60 h-60 md:m-2 md:w-80 md:h-80 lg:m-3 cursor-pointer overflow-hidden"
      title={title}
      onClick={onClick}
    >
      {children}
    </Card>
  );
}
