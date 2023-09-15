import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import React from "react";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Button from "@mui/material/Button";
import style from "../pages/invoice/list.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function InvoiceEditTable() {
  return (
    <Stack padding="20px">
      <Grid container gridRow={4}>
        <Grid item md={6}>
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
        <Grid item md={2}>
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
        <Grid item md={2}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(76, 78, 100, 0.87)",
              letterSpacing: "0.18px",
            }}
          >
            Hours
          </Typography>
        </Grid>
        <Grid item md={2}>
          <Typography
            variant="h6"
            sx={{
              fontSize: "14px",
              fontWeight: 500,
              color: "rgba(76, 78, 100, 0.87)",
              letterSpacing: "0.18px",
            }}
          >
            Price
          </Typography>
        </Grid>
        <Grid sx={{ color: "rgba(76, 78, 100, 0.6)" }} item md={12}>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              border: "1px solid rgba(76, 78, 100, 0.6)",
              borderRadius: "8px",
            }}
          >
            <Grid
              sx={{
                color: "rgba(76, 78, 100, 0.87)",
              }}
              container
              padding="15px"
              spacing={3}
            >
              <Grid item md={6}>
                <FormControl fullWidth size="small" sx={{ minWidth: 120 }}>
                  <Select
                    defaultValue="App Design"
                    fullWidth
                    sx={{
                      borderRadius: "8px",
                      color: "rgba(76, 78, 100, 0.6)",
                    }}
                  >
                    <MenuItem value="App Design">App Design</MenuItem>
                    <MenuItem value="App Customization">
                      App Customization
                    </MenuItem>
                    <MenuItem value="App Template">App Template</MenuItem>
                    <MenuItem value="App Development">App Development</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item md={2}>
                <OutlinedInput
                  defaultValue={24}
                  type="number"
                  size="small"
                  sx={{ borderRadius: "8px", color: "rgba(76, 78, 100, 0.6)" }}
                />
              </Grid>
              <Grid item md={2}>
                <OutlinedInput
                  defaultValue={1}
                  type="number"
                  size="small"
                  sx={{ borderRadius: "8px", color: "rgba(76, 78, 100, 0.6)" }}
                />
              </Grid>
              <Grid item md={2}>
                $24.00
              </Grid>
              <Grid item md={6}>
                <OutlinedInput
                  multiline
                  fullWidth
                  defaultValue={"Customization & Bug Fixes"}
                  sx={{ borderRadius: "8px", color: "rgba(76, 78, 100, 0.6)" }}
                />
              </Grid>
              <Grid item md={2}>
                <Typography variant="body1">Discount:</Typography>
                <Typography fontSize="">0% 0% 0%</Typography>
              </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem />
            <Box
              sx={{
                color: "rgba(76, 78, 100, 0.87)",
              }}
            >
              <IconButton size="small">
                <Close fontSize="10px" />
              </IconButton>
            </Box>
          </Box>
        </Grid>
        <Grid item md={12}>
          <Button startIcon={<AddIcon />}>ADD ITEM</Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
