import { Input } from "antd";
import React from "react";

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <Input.Search
      size="large"
      placeholder="Rechercher"
      onSearch={onSearch}
    />
  );
}
