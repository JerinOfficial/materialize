import React, { useEffect, useState } from "react";
import DrawerComponent from "../components/DrawerComponent";
import AppBarComponent from "@/components/AppBarComponent";
import Style from "../Layout/dashboard.module.css";
import Box from "@mui/material/Box";

export default function DashboardLayout({ children }) {
  const [isScroll, setisScroll] = useState(false);
  const [positionChange, setpositionChange] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setisScroll(true);
      } else {
        setisScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={Style.main}>
      <DrawerComponent
        positionChange={positionChange}
        setpositionChange={setpositionChange}
      />
      <div
        className={Style.container}
        style={{ width: positionChange ? "84%" : "100%" }}
      >
        <AppBarComponent handleScroll={isScroll} />
        <Box className={Style.ChildContainer}>{children}</Box>
      </div>
    </div>
  );
}
