import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React from "react";
import Grid from "@mui/material/Grid";

export default function InvoiceEditTable() {
  return (
    <Stack>
      <Grid container gridRow={4}>
        <Grid item md={4}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(76, 78, 100, 0.87)",
              letterSpacing: "0.18px",
            }}
          >
            Item
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(76, 78, 100, 0.87)",
              letterSpacing: "0.18px",
            }}
          >
            Cost
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(76, 78, 100, 0.87)",
              letterSpacing: "0.18px",
            }}
          >
            Cost
          </Typography>
        </Grid>
        <Grid item md={3}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(76, 78, 100, 0.87)",
              letterSpacing: "0.18px",
            }}
          >
            Cost
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
}
