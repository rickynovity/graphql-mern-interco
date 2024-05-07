import { useLocation } from "react-router-dom";

const useIsHomePage = () => {
  const location = useLocation();
  return location.pathname === "/";
};

export default useIsHomePage;
