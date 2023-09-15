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
import SmallCharts from "@/components/Charts/SmallCharts";
import {
  lineOption,
  performanceOption,
  transactionOption,
} from "@/components/Charts/Options/AllOptions";
import CircleEchart from "@/components/Charts/CircleEchart";

export default function Analytics() {
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
          <Grid item md={8} sm={12} xs={12}>
            <Box className={`${Style.layout} ${Style.smallHeight}`}>
              <Stack className={Style.ImgContainer}>
                <div className={Style.analyticsImg}>
                  <img src="https://demos.pixinvent.com/materialize-nextjs-admin-template/demo-1/images/cards/illustration-john-light.png" />
                </div>
              </Stack>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "24px",
                  color: "rgba(76, 78, 100, 0.87)",
                  letterSpacing: "0.18px",
                  fontWeight: 500,
                  marginBottom: 2,
                }}
              >
                Congratulations <strong>John!</strong> 🎉
              </Typography>
              <p>You have done 68% 😎 more sales today.</p>
              <p>Check your new badge in your profile.</p>

              <Button>View Profile</Button>
            </Box>
          </Grid>
          <Grid item md={2} sm={6} xs={6}>
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
          <Grid item md={2} sm={6} xs={6}>
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
              <SmallCharts options={lineOption} />
            </Box>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <div
              className={`${Style.layout} ${Style.largeHeight} ${Style.flexGrid}`}
            >
              <Box
                sx={{
                  padding: "20px",
                  width: { md: "57%", xs: "100%" },
                  display: "flex",
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
                  Total Transactions
                </Typography>
                <CircleEchart options={transactionOption} />
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box
                sx={{
                  padding: "20px",
                  width: { md: "43%", xs: "100%" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: { xs: 3 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Stack>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "20px",
                        color: "rgba(76, 78, 100, 0.87)",
                        letterSpacing: "0.18px",
                        fontWeight: 500,
                      }}
                    >
                      Report
                    </Typography>
                    <p>Last month transactions $234.40k</p>
                  </Stack>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    sx={{ gap: { xs: 1 } }}
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
                    <p>This Week</p>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "18px",
                        color: "rgba(76, 78, 100, 0.87)",
                        letterSpacing: "0.18px",
                        fontWeight: 500,
                      }}
                    >
                      +82.45%
                    </Typography>
                  </Stack>
                  <Divider orientation="vertical" flexItem />
                  <Stack
                    sx={{ gap: { xs: 1 } }}
                    justifyContent="center"
                    alignItems="center"
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
                    <p>This Week</p>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "18px",
                        color: "rgba(76, 78, 100, 0.87)",
                        letterSpacing: "0.18px",
                        fontWeight: 500,
                      }}
                    >
                      +82.45%
                    </Typography>
                  </Stack>
                </Box>
                <Divider />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <Stack justifyContent="center" alignItems="center">
                    <p>Performance</p>
                    <Typography
                      variant="h6"
                      sx={{
                        fontSize: "18px",
                        color: "rgba(76, 78, 100, 0.87)",
                        letterSpacing: "0.18px",
                        fontWeight: 500,
                      }}
                    >
                      +94.15%
                    </Typography>
                  </Stack>
                  <Stack justifyContent="center" alignItems="center">
                    <Button>View Report</Button>
                  </Stack>
                </Box>
              </Box>
            </div>
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
                  Performance
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
              <CircleEchart options={performanceOption} />
            </Box>
          </Grid>
          {/* <Grid item md={4} sm={6} xs={12}>
            <Box
              sx={{ height: { sm: "370", md: "424px" } }}
              className={`${Style.layout} ${Style.largeHeight}`}
            >
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
                  Project Statistics
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Grid
              style={{ height: "424px" }}
              width="100%"
              container
              spacing={1}
              alignItems="center"
              justifyContent="space-between"
              className={`${Style.largeHeight}`}
            >
              <Grid item md={6} sm={6} xs={6}>
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
                </Box>
              </Grid>

              <Grid item md={6} sm={6} xs={6}>
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
                  <p>Total Sales</p>
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

              <Grid item md={6} sm={6} xs={6}>
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
                  <p>Total Orders</p>
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

              <Grid item md={6} sm={6} xs={6}>
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
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box
              style={{ height: "424px" }}
              className={`${Style.layout} ${Style.largeHeight}`}
            >
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
                  Sales Country
                </Typography>
                <IconButton>
                  <MoreVert />
                </IconButton>
              </Box>
            </Box>
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
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
                  Top Referral Sources
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
          </Grid> */}
        </Grid>
      </Box>
    </DashboardLayout>
  );
}
