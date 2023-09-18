import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "./Loader";

const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const [isloading, setisloading] = useState(true);
  let boolean;
  useEffect(() => {
    boolean = localStorage.getItem("authentication");
    if (boolean === "true") {
      router.push("/dashBoard");
    }
    window.localStorage.setItem("auth", false);

    const timer = setTimeout(() => {
      setisloading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return <>{boolean ? <>{isloading ? <Loader /> : children}</> : children}</>;
};

export default PrivateRoute;
