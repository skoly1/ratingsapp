import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { SIDEPAGES } from "../../utils/NavPages";

const SideMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)}>
        <List>
          {SIDEPAGES.map((pages, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                <ListItemText>{pages}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default SideMenu;
