import React, { useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";

export default function DropDown({ array, open }) {
  const router = useRouter();
  return (
    <>
      {array?.map((item, index) => {
        return (
          <ListItemButton
            hidden={!open}
            onClick={() => {
              router.push(item.to);
            }}
            selected={router.pathname === item.to}
            key={index}
            sx={{
              justifyContent: open ? "initial" : "center",
              borderRadius: "10px",
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                color: "rgba(76, 78, 100, 0.87)",
                display: "list-item",
                listStyleType: "disc",
              }}
            />
          </ListItemButton>
        );
      })}
    </>
  );
}
