import Image from "next/image";
import { Inter } from "next/font/google";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";
import LoginPage from "./loginPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    window.localStorage.setItem("auth", false);
    window.localStorage.setItem("authentication", false);
    const timer = setTimeout(() => {
      setisloading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <>{isloading ? <Loader /> : <LoginPage />}</>;
}
