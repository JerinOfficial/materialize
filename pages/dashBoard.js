import DashboardLayout from "@/Layout/DashboardLayout";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import Style from "../Layout/dashboard.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import IconButton from "@mui/material/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import DashboardTable from "@/components/DashboardTable";
import CircleEchart from "@/components/Charts/CircleEchart";
import SmallCharts from "@/components/Charts/SmallCharts";
import WeeklyOverviewChart from "@/components/Charts/WeeklyOverviewChart";
import {
  externalLinksOption,
  growthOption,
  monthlyBudgetOption,
  nameGraphOption,
  organicOption,
  socialOption,
  totalProfitOption,
} from "@/components/Charts/Options/AllOptions";
import Loader from "@/components/Loader";

export default function DashBoard() {
  return (
    <DashboardLayout>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid
          width="100%"
          container
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
          className={Style.ContentContainer}
        >
          <Grid item md={4} sm={12} xs={12}>
            <Box className={`${Style.layout} ${Style.smallHeight}`}>
              <Typography
                variant="h5"
                sx={{
                  fontSize: "24px",
                  color: "rgba(76, 78, 100, 0.87)",
                  letterSpacing: "0.18px",
                }}
              >
                Congratulations <strong>Norris!</strong> 🎉
              </Typography>
              <p>Best seller of the month</p>
              <h5
                style={{
                  fontSize: "1.4993rem",
                  letterSpacing: 0,
                  color: "rgb(102, 108, 255)",
                  fontWeight: 600,
                  marginTop: "10px",
                }}
              >
                $42.8k
              </h5>
              <p>78% of target 🤟🏻</p>
              <Button
                size="small"
                sx={{
                  background: "rgb(102, 108, 255) !important",
                  color: "white",
                  borderRadius: "8px",
                  width: "100px",
                  marginTop: 1,
                }}
              >
                View sales
              </Button>
              <img
                style={{
                  position: "absolute",
                  height: "140px",
                  width: "106px",
                  right: 22,
                  bottom: 0,
                }}
                src="https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-1/images/cards/trophy.png"
              />
            </Box>
          </Grid>
          <Grid item md={2} sm={3} xs={6}>
            <Box className={`${Style.layout} ${Style.smallHeight}`}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(102, 108, 255, 0.12)",
                    color: "rgb(102, 108, 255)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AddShoppingCartIcon />
                </span>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "rgb(114, 225, 40)",
                    letterSpacing: "0.18px",
                  }}
                >
                  +22% <KeyboardArrowUp />
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  color: "rgba(76, 78, 100, 0.87)",
                  letterSpacing: "0.18px",
                  marginTop: "25px",
                }}
              >
                <strong>155k</strong>
              </Typography>
              <p style={{ marginBottom: 10 }}>Total Orders</p>
              <span
                style={{
                  background: "rgba(109, 120, 141, 0.12)",
                  color: "rgba(76, 78, 100, 0.6)",
                  borderRadius: "16px",
                  fontSize: "0.75rem",
                  alignSelf: "flex-start",
                  fontWeight: 500,
                  padding: "1px 8px",
                }}
              >
                Last 4 Month
              </span>
            </Box>
          </Grid>
          <Grid item md={2} sm={3} xs={6}>
            <Box className={`${Style.layout} ${Style.smallHeight}`}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(114, 225, 40, 0.12)",
                    color: "rgb(114, 225, 40)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <AttachMoneyIcon />
                </span>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "rgb(114, 225, 40)",
                    letterSpacing: "0.18px",
                  }}
                >
                  +38% <KeyboardArrowUp />
                </Typography>
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  color: "rgba(76, 78, 100, 0.87)",
                  letterSpacing: "0.18px",
                  marginTop: "25px",
                }}
              >
                <strong>$13.4k</strong>
              </Typography>
              <p style={{ marginBottom: 10 }}>Total Sales</p>
              <span
                style={{
                  background: "rgba(109, 120, 141, 0.12)",
                  color: "rgba(76, 78, 100, 0.6)",
                  borderRadius: "16px",
                  fontSize: "0.75rem",
                  alignSelf: "flex-start",
                  fontWeight: 500,
                  padding: "1px 8px",
                }}
              >
                Last Six Month
              </span>
            </Box>
          </Grid>
          <Grid item md={2} sm={3} xs={6}>
            <Box className={`${Style.layout} ${Style.smallHeight}`}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                    fontWeight: 500,
                  }}
                >
                  $88.5k
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "rgb(255, 77, 73)",
                    letterSpacing: "0.1px",
                    fontWeight: 500,
                  }}
                >
                  -18%
                </Typography>
              </Box>
              <p>Total Sales</p>
              <SmallCharts options={totalProfitOption} />
            </Box>
          </Grid>
          <Grid item md={2} sm={3} xs={6}>
            <Box className={`${Style.layout} ${Style.smallHeight}`}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                    fontWeight: 500,
                  }}
                >
                  $27.9k
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "rgb(114, 225, 40)",
                    letterSpacing: "0.1px",
                    fontWeight: 500,
                  }}
                >
                  +16%
                </Typography>
              </Box>
              <p>Total Growth</p>
              <SmallCharts options={growthOption} />
            </Box>
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Box className={`${Style.layout} ${Style.largeHeight}`}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                    fontWeight: 500,
                  }}
                >
                  Organic Sessions
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
              <CircleEchart options={organicOption} />
            </Box>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Box className={`${Style.layout} ${Style.largeHeight}`}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                    fontWeight: 500,
                  }}
                >
                  Project Timeline
                </Typography>
                <p>Total 840 Task Completed</p>
              </Box>
              <CircleEchart options={nameGraphOption} />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box className={`${Style.layout} ${Style.largeHeight}`}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                    fontWeight: 500,
                  }}
                >
                  Weekly Overview
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
              <WeeklyOverviewChart />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box className={`${Style.layout} ${Style.largeHeight}`}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                    fontWeight: 500,
                  }}
                >
                  Social Network Visits
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
              <CircleEchart options={socialOption} />
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box className={`${Style.layout} ${Style.largeHeight}`}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                    fontWeight: 500,
                  }}
                >
                  Monthly Budget
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
              <CircleEchart options={monthlyBudgetOption} />
            </Box>
          </Grid>

          <Grid item md={4} sm={6} xs={12}>
            <Box className={`${Style.layout} ${Style.largeHeight}`}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                    fontWeight: 500,
                  }}
                >
                  External Links
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
              <CircleEchart options={externalLinksOption} />
            </Box>
          </Grid>

          <Grid item md={8} xs={12}>
            <Box
              className={`${Style.layout} ${Style.largeHeight}`}
              style={{ padding: 0 }}
            >
              <DashboardTable />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}
