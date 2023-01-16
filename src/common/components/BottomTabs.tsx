import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React, { useState } from "react";

interface BottomTabsProps {}

export default function BottomTabs({}: BottomTabsProps) {
  const [value, setValue] = useState("recents");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        // icon={}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        // icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        // icon={<LocationOnIcon />}
      />
      <BottomNavigationAction label="Folder" value="folder" />
    </BottomNavigation>
  );
}
