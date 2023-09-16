import React, { useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import DropDown from "./DropDown";
import { useRouter } from "next/router";

export default function ListItems({
  selectedMenu,
  open,
  setselectedMenu,
  isSelected,
  setisSelected,
  array,
  closeDropdown,
  setcloseDropdown,
}) {
  const router = useRouter();
  return (
    <>
      {array.map((text, index) => (
        <div key={index}>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              borderRadius: "10px",
            }}
          >
            <ListItemButton
              onClick={() => {
                setselectedMenu(text.name === selectedMenu ? null : text.name);
                text.isdropdown && setisSelected((p) => !p);
                setcloseDropdown(true);
              }}
              selected={router.pathname.includes(text.to)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&:hover": {
                  borderRadius: "10px",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                {text.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  text.name.length > 16
                    ? text.name.slice(0, 16) + "..."
                    : text.name
                }
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
            <DropDown
              open={selectedMenu === text.name && closeDropdown}
              array={text.content}
            />
          </>
        </div>
      ))}
    </>
  );
}
