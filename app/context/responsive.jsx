import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const MediaQueryContext = createContext(null);

export const MediaQueryProvider = ({ children }) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px) and (max-width: 1823px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1223px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const value = { isBigScreen, isDesktop, isTablet, isMobile };

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
};
