import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  HomeOutlined,
  KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";
import DropDown from "./DropDown";
import { useRouter } from "next/router";

export default function Header({
  selectedMenu,
  open,
  setselectedMenu,
  isSelected,
  setisSelected,
}) {
  const router = useRouter();
  return (
    <List
      sx={{
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "50px",
        listStyle: "inside",
        listStylePosition: "inside",
        listStyleType: "disc",
      }}
    >
      {[
        {
          name: "home",
          content: [
            { name: "CRM", to: "/dashBoard" },
            { name: "Analytics" },
            { name: "eCommerce" },
          ],
        },
      ].map((text, index) => (
        <div key={index}>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              borderRadius: "10px",
            }}
            selected={router.pathname === text.to}
          >
            <ListItemButton
              onClick={() => {
                setselectedMenu(text.name);
                setisSelected((p) => !p);
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                borderRadius: "10px",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText
                primary={text.name}
                sx={{
                  opacity: open ? 1 : 0,
                  color: "rgba(76, 78, 100, 0.87)",
                }}
              />
              {open &&
                text.content !== null &&
                (selectedMenu === text.name && isSelected ? (
                  <KeyboardArrowDown />
                ) : (
                  <KeyboardArrowRight />
                ))}
            </ListItemButton>
          </ListItem>
          <>
            {selectedMenu === text.name && isSelected && open && (
              <DropDown
                selectedMenu={selectedMenu}
                setselectedMenu={setselectedMenu}
                setisSelected={setisSelected}
                array={text.content}
              />
            )}
          </>
        </div>
      ))}
    </List>
  );
}
