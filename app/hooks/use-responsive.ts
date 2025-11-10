import { useContext } from "react";
import { MediaQueryContext } from "../context/responsive";

export const useResponsive = () => {
  const ctx = useContext(MediaQueryContext);
  if (!ctx) {
    throw new Error(
      "useMediaQueryContext deve essere usato dentro MediaQueryProvider"
    );
  }
  return ctx;
};
