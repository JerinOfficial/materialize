import auth from "@/utils/auth";
import { useRouter } from "next/router";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (!auth()) {
      router.push("/");
    }
  }, []);

  return children;
};

export default PrivateRoute;
