import Image from "next/image";
import { Inter } from "next/font/google";
import HomePage from "./homePage";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isloading, setisloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setisloading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return <>{isloading ? <Loader /> : <HomePage />}</>;
}
