import React, { useEffect, useState } from "react";
import DrawerComponent from "../components/DrawerComponent";
import AppBarComponent from "@/components/AppBarComponent";
import Style from "../Layout/dashboard.module.css";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Loader from "@/components/Loader";

export default function DashboardLayout({ children }) {
  const [isScroll, setisScroll] = useState(false);
  const [positionChange, setpositionChange] = useState(false);
  const [isloading, setisloading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setisloading(false);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
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
  useEffect(() => {
    const handleBeforeUnload = () => {
      setIsLoading(true);
    };

    window.onbeforeunload = handleBeforeUnload;

    return () => {
      window.onbeforeunload = null;
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={Style.main}>
          <DrawerComponent
            setisloading={setisloading}
            positionChange={positionChange}
            setpositionChange={setpositionChange}
          />
          <div
            className={Style.container}
            style={{ width: positionChange ? "84%" : "100%" }}
          >
            {isloading && (
              <Box
                sx={{
                  width: "100%",
                  zIndex: 100,
                  position: "absolute",
                  top: 0,
                }}
              >
                <LinearProgress />
              </Box>
            )}
            <AppBarComponent handleScroll={isScroll} />

            <Box className={Style.ChildContainer}>{children}</Box>
          </div>
        </div>
      )}
    </>
  );
}
