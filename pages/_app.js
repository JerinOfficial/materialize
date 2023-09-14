import "@/styles/globals.css";
import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export default function App({ Component, pageProps }) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <UserContext.Provider value={{ isOpen, setisOpen }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}
export function useUserContext() {
  return useContext(UserContext);
}
