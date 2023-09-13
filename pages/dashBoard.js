import DashboardLayout from "@/Layout/DashboardLayout";
import { Box } from "@mui/material";
import React from "react";
import Style from "../Layout/dashboard.module.css";

export default function DashBoard() {
  
  return (
    <DashboardLayout >
      <Box className={Style.ContentContainer}>Hello</Box>
    </DashboardLayout>
  );
}
