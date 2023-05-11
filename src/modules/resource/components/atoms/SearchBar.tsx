import { Input } from "antd";
import React from "react";

interface SearchBarProps {
  onChange: (value: string) => void;
}

export default function SearchBar({ onChange }: SearchBarProps) {
  return (
    <Input.Search
      size="large"
      placeholder="Rechercher"
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
