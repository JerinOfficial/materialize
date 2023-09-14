import DashboardLayout from "@/Layout/DashboardLayout";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import style from "./list.module.css";
import Box from "@mui/material/Box";
import Logo from "@/assets/Logo";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import OutlinedInput from "@mui/material/OutlinedInput";
import InvoiceEditTable from "@/components/InvoiceEditTable";

const UsersArray = [
  {
    name: "Jordan Stevenson",
    about: "Hall-Robbins PLC",
    address: "7777 Mendez Plains",
    phone: "(616) 865-4180",
    mail: "don85@johnson.com",
  },
  {
    name: "Stephanie Burns",
    about: "Mccann LLC and Sons",
    address: "04033 Wesley Wall Apt. 961",
    phone: "(226) 204-8287",
    mail: "brenda49@taylor.info",
  },
  {
    name: "Tony Herrera",
    about: "Leonard-Garcia and Sons",
    address: "5345 Robert Squares",
    phone: "(955) 676-1076",
    mail: "smithtiffany@powers.com",
  },
  {
    name: "Kevin Patton",
    about: "Smith, Miller and Henry LLC",
    address: "19022 Clark Parks Suite 149",
    phone: "(832) 323-6914",
    mail: "mejiageorge@lee-perez.com",
  },
  {
    name: "Mrs. Juli Donovan MD",
    about: "Garcia-Cameron and Sons",
    address: "8534 Saunders Hill Apt. 583",
    phone: "(970) 982-3353",
    mail: "brandon07@pierce.com",
  },
];

export default function Edit() {
  const [getDatas, setgetDatas] = useState("");
  const userData = UsersArray.find((data) => data.name === getDatas);

  return (
    <DashboardLayout>
      <Stack className={style.previewContainer}>
        <Stack className={style.boxContainer}>
          <Box className={style.firstBox}>
            <Stack>
              <Box className={style.logo}>
                <Logo customWidth={"40"} />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                    marginLeft: "8px",
                  }}
                >
                  Materialize
                </Typography>
              </Box>
              <Box className={style.paraBox}>
                <p>Office 149, 450 South Brand Brooklyn</p>
                <p>San Diego County, CA 91905, USA</p>
                <p>+1 (123) 456 7891, +44 (876) 543 2198</p>
              </Box>
            </Stack>
            <Stack gap>
              <Box className={style.editRightBox}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                  }}
                >
                  Invoice
                </Typography>
                
              </Box>
              <Box className={style.editRightBox}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                  }}
                >
                  Invoice
                </Typography>
                
              </Box>
              <Box className={style.editRightBox}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 500,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                  }}
                >
                  Invoice
                </Typography>
               
              </Box>
            </Stack>
          </Box>
          <Divider />
          <Box className={style.firstBox}>
            <Stack gap="12px">
              <Box className={style.rightBox}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                  }}
                >
                  Invoice To:
                </Typography>
              </Box>
              <Box className={style.rightBox}>
                <Box className={style.paraBox}>
                  <FormControl
                    size="small"
                    sx={{ minWidth: 120, width: "200px" }}
                  >
                    <Select
                      defaultValue="Jordan Stevenson"
                      size="small"
                      sx={{
                        borderRadius: "8px",
                        color: "rgba(76, 78, 100, 0.6)",
                      }}
                      onChange={(e) => {
                        setgetDatas(e.target.value, "ONCLICK");
                      }}
                    >
                      {UsersArray.map((user, index) => {
                        return (
                          <MenuItem key={index} value={user.name}>
                            {user.name}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                  <p>{userData ? userData?.about : "Hall-Robbins PLC"}</p>
                  <p>{userData ? userData?.address : "7777 Mendez Plains"}</p>
                  <p>{userData ? userData?.phone : "(616) 865-4180"}</p>
                  <p>{userData ? userData?.mail : "don85@johnson.com"}</p>
                </Box>
              </Box>
            </Stack>
            <Stack gap="12px">
              <Box className={style.rightBox}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                  }}
                >
                  Bill To:
                </Typography>
              </Box>
              <Box className={style.rightBox}>
                <Box className={style.paraBox}>
                  <p>Total Due:</p>
                  <p>Bank name:</p>
                  <p>Country:</p>
                  <p>IBAN:</p>
                  <p>SWIFT code:</p>
                </Box>
                <Box className={style.paraBox}>
                  <p>$12,110.55</p>
                  <p>American Bank</p>
                  <p>United States</p>
                  <p>ETD95476213874685</p>
                  <p>BR91905</p>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Divider />
          <InvoiceEditTable />
          <Divider />
          <Box className={style.firstBox}>
            <Stack gap="12px">
              <Box
                sx={{ display: "flex", alignItems: "center" }}
                className={style.rightBox}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "rgba(76, 78, 100, 0.87)",
                    letterSpacing: "0.18px",
                  }}
                >
                  <strong> Note:</strong> It was a pleasure working with you and
                  your team. We hope you will keep us in mind for future
                  freelance projects. Thank You!
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Stack>
        <Stack className={style.rightContainer}>
          <Stack className={style.buttonBox}>
            <Button
              sx={{
                backgroundColor: "rgb(102, 108, 255) !important",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgb(90, 95, 224)",
                  boxShadow: "rgba(76, 78, 100, 0.56) 0px 6px 18px -8px",
                },
              }}
              className={style.button}
              startIcon={<SendOutlinedIcon />}
            >
              Send Invoice
            </Button>
            <Button
              sx={{
                border: "1px solid rgba(109, 120, 141, 0.5)",
                color: "rgb(109, 120, 141)",
                "&:hover": {
                  backgroundColor: "rgba(109, 120, 141, 0.08)",
                  border: "1px solid rgb(109, 120, 141)",
                },
              }}
              className={style.button}
              variant="outlined"
            >
              Preview
            </Button>
            <Button
              sx={{
                border: "1px solid rgba(109, 120, 141, 0.5)",
                color: "rgb(109, 120, 141)",
                "&:hover": {
                  backgroundColor: "rgba(109, 120, 141, 0.08)",
                  border: "1px solid rgb(109, 120, 141)",
                },
              }}
              className={style.button}
              variant="outlined"
            >
              Save
            </Button>
            <Button
              sx={{
                background: "#72e128 !important",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgb(100, 198, 35)",
                  boxShadow: "rgba(76, 78, 100, 0.56) 0px 6px 18px -8px",
                },
              }}
              className={style.button}
              startIcon={<AttachMoneyOutlinedIcon />}
            >
              Add Payment
            </Button>
          </Stack>
          <FormControl fullWidth sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Accept payment via
            </InputLabel>
            <Select
              defaultValue={"Internet Banking"}
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Invoice Status"
              fullWidth
              sx={{ borderRadius: "10px" }}
            >
              <MenuItem value={"Internet Banking"}>Internet Banking</MenuItem>
              <MenuItem value={"Debit Card"}>Debit Card</MenuItem>
              <MenuItem value={"Credit Card"}>Credit Card</MenuItem>
              <MenuItem value={"Paypal"}>Paypal</MenuItem>
              <MenuItem value={"UPI Transfer"}>UPI Transfer</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography className={style.text}>Payment Terms</Typography>
            <Switch defaultChecked />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography className={style.text}>Client Notes</Typography>
            <Switch />
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography className={style.text}>Payment Stub</Typography>
            <Switch />
          </Box>
        </Stack>
      </Stack>
    </DashboardLayout>
  );
}
