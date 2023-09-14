import DashboardLayout from "@/Layout/DashboardLayout";
import Grid from "@mui/material/Grid";
import React from "react";
import Style from "../../Layout/dashboard.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import IconButton from "@mui/material/IconButton";
import MoreVert from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import DashboardTable from "@/components/DashboardTable";

export default function Ecommerce() {
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
          <Grid item md={6} sm={12} xs={12}>
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
          <Grid item md={3} sm={6} xs={6}>
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
                  +22%
                  <KeyboardArrowUp />
                </Typography>
                <img
                  style={{
                    position: "absolute",
                    height: "134px",
                    width: "94px",
                    right: 22,
                    bottom: 0,
                  }}
                  src="https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-1/images/cards/card-stats-img-1.png"
                />
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "20px",
                  color: "rgba(76, 78, 100, 0.87)",
                  letterSpacing: "0.18px",
                  marginTop: "25px",
                  fontWeight: 500,
                }}
              >
                155k
              </Typography>
              <p style={{ marginBottom: 20 }}>Total Orders</p>
              <span
                style={{
                  background: "rgba(109, 120, 141, 0.12)",
                  color: "rgba(76, 78, 100, 0.6);",
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
          <Grid item md={3} sm={6} xs={6}>
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
                  $38.5k
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
                  +62%
                </Typography>
              </Box>
              <p>Sessions</p>
              <img
                style={{
                  position: "absolute",
                  height: "134px",
                  width: "84px",
                  right: 22,
                  bottom: 0,
                }}
                src="https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-1/images/cards/card-stats-img-2.png"
              />
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
                  Weekly Sales
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
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
                  Visits by Day
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item md={8} xs={12}>
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
                  Activity Timeline
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}
