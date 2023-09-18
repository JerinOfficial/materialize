import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import style from "../styles/materialize.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Image from "next/image";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import { Inter } from "next/font/google";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import FormControl from "@mui/material/FormControl";
import Layout from "@/Layout/Layout";
import { useRouter } from "next/router";
import { getUser } from "@/Actions/user";
import Cookies from "js-cookie";
import PrivateRoute from "@/components/PrivateRoute";

const inter = Inter({ subsets: ["latin"] });

export const logout = () => {
  window.localStorage.clear();
  Cookies.remove("loggedin", false);
  localStorage.removeItem("authentication");
  localStorage.setItem("authentication", false);
};

export default function LoginPage() {
  const router = useRouter();
  const [hidePw, sethidePw] = useState(false);
  const [formDatas, setformDatas] = useState({
    email: "admin@materialize.com",
    password: "admin",
  });
  const { email, password } = formDatas;
  const [emailErr, setemailErr] = useState(false);
  const [passwordErr, setpasswordErr] = useState(false);
  const [errAlert, seterrAlert] = useState({
    email: "email is a required field",
    password: "password must be at least 5 characters",
  });

  const emailBlurHandler = () => {
    if (email === "") {
      setemailErr(true);
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setemailErr(true);
        seterrAlert({ ...errAlert, email: "email must be a valid email" });
      } else {
        setemailErr(false);
      }
    }
  };
  const passwordBlurHandler = () => {
    if (password.length < 5) {
      setpasswordErr(true);
    } else {
      setpasswordErr(false);
    }
  };

  const emailOnchangeHandler = (e) => {
    setformDatas({ ...formDatas, email: e.target.value });
  };
  const passwordOnchangeHandler = (e) => {
    setformDatas({ ...formDatas, password: e.target.value });
  };

  const validation = () => {
    if (email === "") {
      setemailErr(true);
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setemailErr(true);
        seterrAlert({ ...errAlert, email: "email must be a valid email" });
      } else {
        setemailErr(false);
      }
    }
    if (password.length < 5) {
      setpasswordErr(true);
    } else {
      setpasswordErr(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (email !== "" && password !== "") {
      if (getUser() !== null) {
        if (email === getUser().email && password === getUser().password) {
          Cookies.set("loggedin", true);
          localStorage.removeItem("authentication");
          localStorage.setItem("authentication", true);
          router.push("/dashBoard");
        } else {
          if (email !== getUser().email) {
            setemailErr(true);
            seterrAlert({ ...errAlert, email: "User not found" });
          }
          if (password !== getUser().password) {
            setpasswordErr(true);
            seterrAlert({ ...errAlert, password: "password incorrect" });
          }
        }
      } else {
        // console.log(formDatas, "form");
        setemailErr(false);
        setpasswordErr(false);
        validation();
        alert("User not found");
      }
    } else {
      if (email == "") {
        setemailErr(true);
      }
      if (password == "") {
        setpasswordErr(true);
      }
    }
  };

  return (
    <PrivateRoute>
      <Layout
        maskImg={
          <Image
            priority="high"
            alt="mask"
            src={require("../assets/auth-v2-login-mask-light.png")}
          />
        }
        image={
          <Image
            priority="high"
            alt="bg"
            className={style.bgImg}
            src={require("../assets/bg.png")}
          />
        }
      >
        <Stack className={style.formBox} sx={{ width: "100%" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: "8px",
                marginBottom: "24px",
                gap: "6px",
              }}
            >
              <Typography
                className={style.formHeading}
                variant="h5"
                sx={{
                  fontSize: "24px",
                  fontWeight: 600,
                  color: "rgba(76, 78, 100, 0.87)",
                  letterSpacing: "0.18px",
                }}
              >
                Welcome to Materialize! 👋🏻
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: "rgba(76, 78, 100, 0.6)",
                  letterSpacing: "0.15px",
                }}
              >
                Please sign-in to your account and start the adventure
              </Typography>
            </Box>
            <Box
              sx={{
                color: "rgb(102, 108, 255)",
                backgroundColor: "rgba(102, 108, 255, 0.12)",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                fontSize: "12px",
                letterSpacing: ".4px",
                padding: "12px 16px",
                borderRadius: "8px",
                marginBottom: "24px",
              }}
            >
              <span>
                Admin: <strong>admin@materialize.com</strong> / Pass:
                <strong>admin</strong>
              </span>
              <span>
                Client: <strong>client@materialize.com</strong> / Pass:
                <strong>client</strong>
              </span>
            </Box>
            <form
              onSubmit={(e) => {
                submitHandler(e);
              }}
              style={{ display: "flex", gap: "15px", flexDirection: "column" }}
            >
              <TextField
                autoComplete="email"
                onBlur={emailBlurHandler}
                error={emailErr && "true"}
                type="email"
                label="Email"
                placeholder="admin@materialize.com"
                helperText={emailErr && errAlert.email}
                value={email}
                onChange={emailOnchangeHandler}
                inputProps={{ style: { color: "#677086" } }}
                InputProps={{
                  style: {
                    borderRadius: "8px",
                  },
                }}
                autoFocus
              />
              <FormControl sx={{ position: "relative" }}>
                <TextField
                  autoComplete="password"
                  onBlur={passwordBlurHandler}
                  inputProps={{
                    style: {
                      letterSpacing: hidePw ? "" : "3px",
                      color: "#677086",
                      fontSize: hidePw ? "" : "large",
                      padding: hidePw ? "" : "15px",
                    },
                  }}
                  InputProps={{
                    style: {
                      borderRadius: "8px",
                    },
                  }}
                  sx={{ color: "#95858d" }}
                  error={passwordErr && "true"}
                  type={hidePw ? "text" : "password"}
                  label="Password"
                  helperText={passwordErr && errAlert.password}
                  value={password}
                  onChange={passwordOnchangeHandler}
                />
                <IconButton
                  sx={{ position: "absolute", right: 15, top: 10 }}
                  edge="end"
                  onClick={() => {
                    sethidePw((p) => !p);
                  }}
                >
                  {hidePw ? (
                    <VisibilityOutlinedIcon />
                  ) : (
                    <VisibilityOffOutlinedIcon />
                  )}
                </IconButton>
              </FormControl>

              <div
                className={style.resBox1}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1px",
                }}
              >
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Remember Me"
                  sx={{ color: "#4C4E6499" }}
                  className={style.resPara}
                />
                <p
                  style={{ color: "rgb(102, 108, 255)", cursor: "pointer" }}
                  onClick={() => {
                    router.push("/forgetPwPage");
                  }}
                  sx={{ fontSize: "14px" }}
                  className={style.resPara}
                >
                  Forgot Password?
                </p>
              </div>

              <Button
                type="submit"
                variant="contained"
                style={{
                  backgroundColor: "#666cff",
                  marginBottom: "28px",
                  padding: "8px 26px",
                  borderRadius: "10px",
                }}
              >
                login
              </Button>
            </form>
            <div
              className={style.resBox2}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                fontWeight: 400,
                letterSpacing: "0.15px",
                fontSize: "16px",
              }}
            >
              <Typography
                className={`${inter.className}`}
                sx={{ color: "#4C4E6499" }}
              >
                New on our platform?
              </Typography>
              <p
                style={{ color: "rgb(102, 108, 255)", cursor: "pointer" }}
                onClick={() => {
                  router.push("/registerPage");
                }}
                className={`${inter.className}`}
              >
                Create an account
              </p>
            </div>
            <Divider
              sx={{
                fontSize: "16px",
                color: "#4C4E64DE",
                textAlign: "center",
                padding: "20px 0 30px",
              }}
            >
              <Typography variant="p">or</Typography>
            </Divider>
            <Box
              sx={{
                height: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton>
                <Facebook sx={{ color: "#497ce2" }} />
              </IconButton>
              <IconButton>
                <Twitter sx={{ color: "#1da1f2" }} />
              </IconButton>
              <IconButton>
                <GitHub sx={{ color: "#272727" }} />
              </IconButton>
              <IconButton>
                <GoogleIcon sx={{ color: "#dc483b" }} />
              </IconButton>
            </Box>
          </Box>
        </Stack>
      </Layout>
    </PrivateRoute>
  );
}
