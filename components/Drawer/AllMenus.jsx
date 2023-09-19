import React, { useState } from "react";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItems from "./ListItems";

export default function AllMenus({
  selectedMenu,
  open,
  setselectedMenu,
  isSelected,
  setisSelected,
  drawerArray,
  closeDropdown,
  setcloseDropdown,
  setisloading,
}) {
  return (
    <>
      {drawerArray.map((items, index) => {
        return (
          <div key={index}>
            {open ? (
              <Divider textAlign="left">
                <Typography
                  sx={{
                    color: "rgba(76, 78, 100, 0.38)",
                    opacity: open ? 1 : 0,
                    textTransform: "uppercase",
                    fontSize: "small",
                  }}
                >
                  {items.title}
                </Typography>
              </Divider>
            ) : (
              <Divider variant="middle" />
            )}

            <List
              sx={{
                padding: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <ListItems
                setisloading={setisloading}
                array={items.items}
                selectedMenu={selectedMenu}
                setselectedMenu={setselectedMenu}
                open={open}
                isSelected={isSelected}
                setisSelected={setisSelected}
                closeDropdown={closeDropdown}
                setcloseDropdown={setcloseDropdown}
              />
            </List>
          </div>
        );
      })}
    </>
  );
}
