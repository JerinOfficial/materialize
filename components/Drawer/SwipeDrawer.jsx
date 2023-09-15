import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function SwipeDrawer({ open, close }) {
  return (
    <SwipeableDrawer
      sx={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
        width: "100%",
      }}
      open={open}
      onClose={close}
      anchor="right"
    >
      <Stack sx={{ width: 383.2 }}>
        <Box
          sx={{
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#f7f7f9",
          }}
        >
          <Typography>Add new Customer</Typography>
          <IconButton onClick={close}>
            <Close />
          </IconButton>
        </Box>
        <Stack gap="20px" sx={{ padding: "20px" }}>
          <TextField
            type="text"
            label="Name"
            InputProps={{ style: { borderRadius: "8px" } }}
          />
          <TextField
            type="text"
            label="Company"
            InputProps={{ style: { borderRadius: "8px" } }}
          />
          <TextField
            type="email"
            label="Email"
            InputProps={{ style: { borderRadius: "8px" } }}
          />
          <TextField
            type="text"
            label="Address"
            multiline
            rows={6}
            InputProps={{ style: { borderRadius: "8px" } }}
          />
          <FormControl fullWidth sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Country
            </InputLabel>
            <Select
              defaultValue={"USA"}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Country"
              fullWidth
              sx={{ borderRadius: "8px" }}
            >
              <MenuItem value={"USA"}>USA</MenuItem>
              <MenuItem value={"UK"}>UK</MenuItem>
              <MenuItem value={"Russia"}>Russia</MenuItem>
              <MenuItem value={"Australia"}>Australia</MenuItem>
              <MenuItem value={"Canada"}>Canada</MenuItem>
            </Select>
          </FormControl>
          <TextField
            type="number"
            label="Contact Number"
            InputProps={{ style: { borderRadius: "8px" } }}
          />
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Button style={{ margin: 0 }}>Add</Button>
            <Button variant="outlined">Cancel</Button>
          </Box>
        </Stack>
      </Stack>
    </SwipeableDrawer>
  );
}
